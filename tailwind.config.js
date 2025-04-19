module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}', // make sure to include your components
    ],
    theme: {
      extend: {
        animation: {
          'gradient-x': 'gradient-x 10s ease infinite',
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
        backgroundImage: {
          'gradient-multiverse': 'linear-gradient(-45deg, #2e026d, #15162c, #3b0764, #1e1b4b)',
        },
        backgroundSize: {
          'size-200': '200% 200%',
        },
      },
    },
    plugins: [],
  }
  