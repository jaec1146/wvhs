/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'icono-wvhs':"url('icons/icon-wvhs.svg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#BF9763',
        'secondary': '#F0BA4E',
        'tertiary': '#0E5452',
      }),
      colors: {
        'default': '#fff',
        'primary': '#bf9763',
        'secondary': '#F0BA4E',
        'tertiary': '#0E5452',
      },
      fontFamily: {
        RockSalt: ['var(--font-Rock_Salt)'],
        RubikGlitch: ['var(--font-Rubik_Glitch)'],
        NotoSans: ['var(--font-Noto_Sans)']
      },
      aspectRatio: {
        '10/16': '10 / 16'
      }
    },
  },
  plugins: [
    
  ],
};
