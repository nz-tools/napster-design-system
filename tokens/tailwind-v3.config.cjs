const theme = require("./theme.json");

module.exports = {
  theme: {
    extend: {
      colors: theme.color,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      fontWeight: theme.fontWeight,
      letterSpacing: theme.letterSpacing,
      lineHeight: theme.lineHeight,
      borderRadius: theme.radius,
      spacing: theme.spacing,
      boxShadow: theme.shadow,
      backgroundImage: theme.gradient,
      transitionDuration: theme.motion.duration,
      transitionTimingFunction: {
        napster: theme.motion.easing
      }
    }
  }
};
