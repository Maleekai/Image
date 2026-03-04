import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds - hex (no opacity needed)
        background: "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-tertiary": "var(--bg-tertiary)",

        // Text - hex (no opacity needed)
        foreground: "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",

        // Brand - RGB for opacity support
        brand: "rgb(var(--brand-blue) / <alpha-value>)",

        // Rise/Fall - RGB for opacity support
        rise: "rgb(var(--rise) / <alpha-value>)",
        fall: "rgb(var(--fall) / <alpha-value>)",

        // Warning - RGB for opacity support
        warning: "rgb(var(--warning) / <alpha-value>)",

        // Border - RGB for opacity support
        border: "rgb(var(--border) / <alpha-value>)",
        "border-light": "rgb(var(--border-light) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
    },
  },
  plugins: [],
};

export default config;
