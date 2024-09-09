import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#00afd4",
        foreground: "var(--foreground)",
      },
      textColor: {
        primary:  "#00afd4"
      },
      
    
    },
  },
  plugins: [],
};
export default config;
