import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  // primary, primaryBright, and primaryDark are the unlock wallet and stake colors.
  primary: "#3AC610",
  primaryBright: "#3AC610",
  primaryDark: "#3AC610",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#37901c",
  backgroundDisabled: "#37901c",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#742fb5",
  textDisabled: "#BDC2C4",
  textSubtle: "#37901c",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#3AC610",
  backgroundDisabled: "#3AC610",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#742fb5",
  textDisabled: "#666171",
  // textSubtle is the farm and pool multipler color
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
