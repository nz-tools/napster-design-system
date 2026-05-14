import themeJson from "./theme.json";

export const theme = themeJson;

export type NapsterTheme = typeof theme;
export type ColorToken = keyof NapsterTheme["color"];
export type FontFamilyToken = keyof NapsterTheme["fontFamily"];
export type FontSizeToken = keyof NapsterTheme["fontSize"];
export type FontWeightToken = keyof NapsterTheme["fontWeight"];
export type LetterSpacingToken = keyof NapsterTheme["letterSpacing"];
export type LineHeightToken = keyof NapsterTheme["lineHeight"];
export type RadiusToken = keyof NapsterTheme["radius"];
export type SpacingToken = keyof NapsterTheme["spacing"];
export type ShadowToken = keyof NapsterTheme["shadow"];
export type GradientToken = keyof NapsterTheme["gradient"];

export default theme;
