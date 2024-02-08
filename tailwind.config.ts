import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "superlight-lavender": "#E6D3ED",
      lavender: "#D68FEF",
      "dark-lavender": "#C034F2",
    },
  },
  plugins: [],
};
export default config;
