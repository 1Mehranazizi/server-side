/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryColor: "#3b82f6",
      secondaryColor: "#facc15",
      pageColor: "#F7F7F7",
      titleColor: "#1e3a8a",
      textColor: "#222",
      paragraphColor: "rgb(156, 163 ,175)",
      subTitleColor: "#aaaaaa",
      iconColor: "#a1a1aa",
      inputColor: "#f4f4f5",
      cardColor: "#FFFFFF",
      primaryTextButton: "#FFFFFF",
      successColor: "#4ade80",
      errorColor: "#f87171",
      infoColor: "#22d3ee",
      disablePrimary: "#f0f9ff",
      disableSecondary: "#fef9c3",
      disableSuccess: "#dcfce7",
      disableError: "#fee2e2",
      disableInfo: "#cffafe",
      transparent: "transparent",
      shadowColor: "#e3e3e3",
      C: "cyan",
      K: "black",
      M: "magenta",
      Y: "yellow",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
        "15px": "15px",
      },
      borderRadius: {
        "4xl": "2rem",
        "6px": "6px",
      },
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      shabnam: "shabnam",
      yekanbakh: "yekanbakh",
      Arial: "Arial",
    },
  },
};
