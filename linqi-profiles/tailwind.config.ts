import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#111827", 2: "#1f2937", 3: "#0b1220", line: "#374151" },
        brand: { DEFAULT: "#3b82f6", light: "#60a5fa", dark: "#2563eb" },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Display"', '"Segoe UI"', "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: { card: "28px" },
    },
  },
  plugins: [],
} satisfies Config;
