const colors = {
  primary: "#1EA4CE",
  secondary: "#6F6F6F",
  secondaryDarken: "#697488",
  primaryDarken: "#147594",
  purpleLight: "#F2F0FD",
  purpleLightAlt: "#F3F0FE",
  dark: "#191919",
  light: "#FAFAFA",
  gray: "#E0E0E0",
  grayAlt: "#A8A8A8",
  white: "#FFFFFF",
};

const typography = {
  fontFamily: {
    sans: "Open Sans, sans-serif",
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.813rem", // 13px
    base: "0.875rem", // 14px
    md: "0.938rem", // 15px
    lg: "1.25rem", // 20px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

const borderRadius = {
  sm: "0.125rem", // 2px
  base: "0.75rem", // 12px
};

const spacing = {
  // 8px
  1: "0.5rem",
  // 16px
  2: "1rem",
  // 24px
  3: "1.5rem",
};

const theme = {
  colors,
  typography,
  borderRadius,
  spacing,
};

export { theme };
