import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5CFF',   // biru neo cerah
          dark: '#0033CC',      // hover / aksen kuat
          light: '#A8C5FF',     // latar terang
        },
        secondary: {
          DEFAULT: '#FFFFFF',   // putih bersih
          dark: '#F0F0F0',      // hover / latar alt
          light: '#FFFFFF',
        },
        background: '#FFFFFF',  // putih
        foreground: '#000000',  // hitam pekat, kontras tinggi
      },
      fontFamily: {
        sans: ['var(--font-roboto-slab)', 'Roboto Slab', 'serif'],
      },
      // Opsional: tambahkan spacing/shadow khas neo
      boxShadow: {
        neo: '6px 6px 0px 0px #000000',
        'neo-lg': '10px 10px 0px 0px #000000',
      },
    },
  },
  plugins: [],
};

export default config;