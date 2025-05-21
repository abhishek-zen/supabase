import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6366f1",
          DEFAULT: "#4f46e5",
          dark: "#3730a3",
        },
        secondary: {
          light: "#6ee7b7",
          DEFAULT: "#34d399",
          dark: "#059669",
        },
        accent: {
          light: "#fbbf24",
          DEFAULT: "#f59e42",
          dark: "#b45309",
        },
        background: {
          light: "#f9fafb",
          DEFAULT: "#fff",
          dark: "#18181b",
          contrast: "#000",
        },
        surface: {
          light: "#fff",
          DEFAULT: "#f3f4f6",
          dark: "#27272a",
          contrast: "#1a1a1a"
        },
        // Status colors
        success: "#22c55e",
        warning: "#facc15",
        error: "#ef4444",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      spacing: {
        "xs": "0.5rem",
        "sm": "1rem",
        "md": "2rem",
        "lg": "3rem",
        "xl": "4rem"
      },
      borderRadius: {
        'md': '0.5rem',
        'lg': '1rem',
        'full': '9999px'
      },
      transitionProperty: {
        theme: "background-color, color, border-color"
      }
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.900'),
          a: { color: theme('colors.primary.DEFAULT'), '&:hover': { color: theme('colors.primary.dark') } },
        },
      },
      dark: {
        css: {
          color: theme('colors.gray.100'),
          a: { color: theme('colors.primary.light'), '&:hover': { color: theme('colors.primary.DEFAULT') } },
        },
      },
      highcontrast: {
        css: {
          color: theme('colors.background.contrast'),
          backgroundColor: theme('colors.background.contrast'),
        }
      }
    }),
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
};

export default config;
