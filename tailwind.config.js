module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#F4F6FA',              // lighter neutral background
        'main-dark-bg': '#1A1C23',         // deeper dark mode bg
        'secondary-dark-bg': '#2C2F36',    // softer dark mode secondary
        'light-gray': '#E2E8F0',           // updated light gray
        'half-transparent': 'rgba(0, 0, 0, 0.4)', // slightly clearer overlay
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(100, 116, 139, 0.3)', // bluish-gray border tone
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: [],
};
