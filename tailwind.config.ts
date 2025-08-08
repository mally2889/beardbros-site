import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0c0d",
        ash: "#101214",
        neon: "#34f5c5",
        lime: "#a7f3d0"
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.12)"
      },
      backgroundImage: {
        'radial-mask': "radial-gradient(1200px 600px at 50% -100px, rgba(52,245,197,0.25), transparent)"
      }
    },
  },
  plugins: [],
};
export default config;
