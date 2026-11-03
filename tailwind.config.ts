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
        brand: {
          teal: '#0d9488',       /* Tom teal escuro e nítido */
          softBlue: '#f0fdfa',   /* Fundo subtil */
          mint: '#ccfbf1',       /* Destaque suave */
          lavender: '#f3e8ff',
          textDark: '#0f172a',   /* Slate quase preto para contraste */
          textMuted: '#475569',  /* Slate médio perfeitamente legível */
        },
      },
    },
  },
  plugins: [],
};

export default config;