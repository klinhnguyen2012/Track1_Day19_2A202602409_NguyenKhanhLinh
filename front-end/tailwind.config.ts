import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
      },
      fontFamily: { sans: ["Inter", "sans-serif"], math: ["STIX Two Math", "serif"] },
      boxShadow: { soft: "0 16px 44px rgba(37, 60, 87, .08)" },
    },
  },
  plugins: [],
} satisfies Config;
