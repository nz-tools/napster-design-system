#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const cssPath = path.join(root, "colors_and_type.css");
const designPath = path.join(root, "DESIGN.md");

const css = fs.readFileSync(cssPath, "utf8");
const design = fs.readFileSync(designPath, "utf8");

const failures = [];

function fail(message) {
  failures.push(message);
}

function extractCustomProps(source, selectorStart) {
  const start = source.indexOf(selectorStart);
  if (start === -1) return new Set();
  const open = source.indexOf("{", start);
  let depth = 0;
  let end = -1;
  for (let i = open; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    if (source[i] === "}") depth -= 1;
    if (depth === 0) {
      end = i;
      break;
    }
  }
  const body = source.slice(open + 1, end);
  return new Set([...body.matchAll(/--[a-z0-9-]+(?=\s*:)/gi)].map((match) => match[0]));
}

const darkProps = extractCustomProps(css, ":root,");
const lightProps = extractCustomProps(css, '[data-theme="light"]');

const modeAwareProps = [
  "--bg",
  "--bg-mulberry",
  "--bg-plum",
  "--bg-purple",
  "--bg-charcoal",
  "--bg-panel",
  "--surface-glass",
  "--fg",
  "--fg-muted",
  "--fg-subtle",
  "--fg-disabled",
  "--panel-fill",
  "--panel-fill-pink",
  "--border",
  "--border-strong",
  "--border-pink",
  "--hairline",
  "--surface-page",
  "--surface-card",
  "--surface-panel",
  "--surface-panel-pink",
  "--surface-glass-fill",
  "--surface-glass-border",
  "--text-primary",
  "--text-muted",
  "--text-subtle",
  "--text-disabled",
  "--accent",
  "--accent-hot",
  "--accent-strong",
  "--on-accent",
  "--eyebrow-fg",
  "--link-fg",
  "--link-hover",
  "--pull-quote-border",
  "--code-bg",
  "--code-fg",
  "--btn-fg",
  "--btn-primary-bg",
  "--btn-primary-hover-bg",
  "--btn-primary-hover",
  "--btn-primary-fg",
  "--btn-secondary-bg",
  "--btn-secondary-border",
  "--btn-secondary-hover-bg",
  "--btn-secondary-hover",
  "--btn-secondary-fg",
  "--btn-ghost-fg",
  "--btn-ghost-hover-fg",
  "--btn-ghost-hover",
  "--btn-pulse-fg",
  "--btn-pulse-hover-ring",
  "--card-bg",
  "--card-border",
  "--card-hover-border",
  "--input-bg",
  "--input-border",
  "--input-fg",
  "--input-placeholder",
  "--input-focus-border",
  "--focus-ring",
  "--panel-border",
  "--panel-border-pink",
  "--napster-shadow-sm",
  "--napster-shadow-md",
  "--napster-shadow-lg",
  "--napster-shadow-panel",
  "--napster-shadow-inset-light",
  "--napster-inner-glow",
  "--napster-glow-pink",
  "--napster-glow-pulse",
  "--shadow-sm",
  "--shadow-md",
  "--shadow-lg",
  "--shadow-panel",
  "--shadow-inset-light",
  "--inner-glow",
  "--glow-pink",
  "--glow-pulse",
  "--gradient-hero",
  "--gradient-label",
  "--gradient-pulse-button"
];

for (const prop of modeAwareProps) {
  if (!darkProps.has(prop)) fail(`Missing dark role token ${prop}`);
  if (!lightProps.has(prop)) fail(`Missing light peer for ${prop}`);
}

function stripBlock(source, selectorStart) {
  const start = source.indexOf(selectorStart);
  if (start === -1) return source;
  const open = source.indexOf("{", start);
  let depth = 0;
  let end = -1;
  for (let i = open; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    if (source[i] === "}") depth -= 1;
    if (depth === 0) {
      end = i + 1;
      break;
    }
  }
  return source.slice(0, start) + source.slice(end);
}

const componentCss = stripBlock(stripBlock(css, ":root,"), '[data-theme="light"]');
const rawDarkLiteral = /rgba\(\s*(?:255\s*,\s*255\s*,\s*255|0\s*,\s*0\s*,\s*0)\s*,/i;
componentCss.split(/\n/).forEach((line, index) => {
  if (rawDarkLiteral.test(line)) {
    fail(`Raw dark-only alpha literal outside token selectors at colors_and_type.css:${index + 1}`);
  }
});

function srgbToLinear(channel) {
  const value = channel / 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function parseHex(hex) {
  return [0, 2, 4].map((offset) => parseInt(hex.slice(1 + offset, 3 + offset), 16));
}

function composite(fgHex, bgHex, alpha) {
  const fg = parseHex(fgHex);
  const bg = parseHex(bgHex);
  return fg.map((channel, index) => Math.round(channel * alpha + bg[index] * (1 - alpha)));
}

function luminance(rgb) {
  const [r, g, b] = rgb.map(srgbToLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(fg, bg) {
  const fgRgb = Array.isArray(fg) ? fg : parseHex(fg);
  const bgRgb = Array.isArray(bg) ? bg : parseHex(bg);
  const [lighter, darker] = [luminance(fgRgb), luminance(bgRgb)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
}

const aaNormal = 4.5;
const aaLarge = 3;
const contrastPairs = [
  ["Body text #FFFFFF on #000000", "Body text `#FFFFFF` on `#000000`", "#FFFFFF", "#000000", aaNormal],
  ["Muted text rgba(255,255,255,0.5) on #000000", "Muted text `rgba(255,255,255,0.5)` composited on `#000000`", composite("#FFFFFF", "#000000", 0.5), "#000000", aaNormal],
  ["Pink #DD52CB on #000000", "Pink `#DD52CB` on `#000000`", "#DD52CB", "#000000", aaNormal],
  ["White on #BE369D button", "White on `#BE369D` button", "#FFFFFF", "#BE369D", aaNormal],
  ["White on #C33DA2 primary-button hover", "White on `#C33DA2` primary-button hover", "#FFFFFF", "#C33DA2", aaNormal],
  ["White on dark pulse endpoint #E65AD5", "White on `.btn-primary-pulse`'s button-specific gradient", "#FFFFFF", "#E65AD5", aaLarge],
  ["Light primary text #201820 on #FAF8FC", "Light primary text `#201820` on `#FAF8FC`", "#201820", "#FAF8FC", aaNormal],
  ["Light muted text rgba(32,24,32,0.64) on #FAF8FC", "Light muted text `rgba(32,24,32,0.64)` composited on `#FAF8FC`", composite("#201820", "#FAF8FC", 0.64), "#FAF8FC", aaNormal],
  ["Light accent #BE369D on #FAF8FC", "Light accent `#BE369D` on `#FAF8FC`", "#BE369D", "#FAF8FC", aaNormal],
  ["Light accent hover #A82C8C on #FAF8FC", "Light accent hover `#A82C8C` on `#FAF8FC`", "#A82C8C", "#FAF8FC", aaNormal],
  ["White on light pulse endpoint #B92C9F", "White on light `.btn-primary-pulse` gradient", "#FFFFFF", "#B92C9F", aaNormal],
  ["White on light pulse endpoint #962480", "White on light `.btn-primary-pulse` gradient", "#FFFFFF", "#962480", aaNormal]
];

for (const [label, needle, fg, bg, minimum] of contrastPairs) {
  if (!design.includes(needle)) {
    fail(`DESIGN.md is missing declared contrast pair: ${label}`);
  }
  const ratio = contrast(fg, bg);
  if (ratio < minimum) {
    fail(`${label} contrast ${ratio.toFixed(2)} is below ${minimum}:1`);
  }
}

if (failures.length) {
  console.error("Theme validation failed:");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Theme validation passed: ${modeAwareProps.length} light peers, no raw component dark alphas, ${contrastPairs.length} contrast pairs.`);
