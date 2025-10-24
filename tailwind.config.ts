import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#4aa8ff",   // Carolina blue-ish
          orange: "#ff7a00"  // Safety orange
        }
      },
      boxShadow: {
        soft: "0 6px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
};
export default config;
