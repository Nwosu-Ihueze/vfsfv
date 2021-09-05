module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        marquee3: 'marquee3 25s linear infinite',
        marquee4: 'marquee4 25s linear infinite',
        marquee5: 'marquee5 25s linear infinite',
        marquee6: 'marquee6 25s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee4: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(-0%)' },
        },
        marquee5: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee6: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      zIndex: {
       '-10': '-10',
       '-20': '-20',
      },
      height: {
        '2xl': '105rem',
        'xxs' : '400px',
        'xs' : '550px',
        'sm' : '640px',
        '168': '35rem'
      },
      width: {
        'xxs' : '400px',
        'xs' : '550px',
        'sm' : '640px',
        'md' : '768px',
      },
      rotate: {
        '270' : '270deg'
      }
    }
  },
  variants: {
    extend: {
      zIndex: ['hover']
    },
  },
  plugins: [],
}
