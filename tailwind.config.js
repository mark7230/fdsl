export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#315262",   // Dark teal (header, navbar)
          light: "#41697A",
          dark: "#22414D",
        },
        accent: {
          DEFAULT: "#EFAB47",   // Yellow (buttons, CTAs)
          light: "#F4C067",
          dark: "#C9872F",
        },
        neutral: {
          DEFAULT: "#829494",   // Blue-gray (borders, muted UI)
          light: "#A8B6B6",
          dark: "#5C6C6C",
        },
        background: {
          light: "#FBFCFC",     // Off-white section bg
          DEFAULT: "#FFFFFF",
        },
        text: {
          DEFAULT: "#1A1A1A",   // Body text
          primary: "#0A2540",   // Deep blue (headings like SNHU)
        }
      }
    }
  },
  plugins: []
};
