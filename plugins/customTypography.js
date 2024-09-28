import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents, theme }) => {
  addComponents({
    // Responsive Headers
    '.h1': {
      fontSize: '38px',
      '@screen sm': {
        fontSize: '40px',
      },
      '@screen lg': {
        fontSize: '44px',
      },
      '@screen xl': {
        fontSize: theme('fontSize.6xl'),
      },
    },
    '.h2': {
      fontSize: '36px',
      '@screen sm': {
        fontSize: '38px',
      },
      '@screen lg': {
        fontSize: '40px',
      },
      '@screen xl': {
        fontSize: theme('fontSize.5xl'),
      },
    },
    '.h3': {
      fontSize: '28px',
      '@screen sm': {
        fontSize: '30px',
      },
      '@screen lg': {
        fontSize: '32px',
      },
      '@screen xl': {
        fontSize: theme('fontSize.4xl'),
      },
    },
    '.h4': {
      fontSize: '24px',
      '@screen sm': {
        fontSize: '26px',
      },
      '@screen lg': {
        fontSize: '28px',
      },
      '@screen xl': {
        fontSize: theme('fontSize.3xl'),
      },
    },
    '.h5': {
      fontSize: '20px',
      '@screen sm': {
        fontSize: '21px',
      },
      '@screen lg': {
        fontSize: '23px',
      },
      '@screen xl': {
        fontSize: theme('fontSize.2xl'),
      },
    },
    '.h6': {
      fontSize: '18px',
      '@screen sm': {
        fontSize: '19px',
      },
      '@screen lg': {
        fontSize: '20px',
      },
      '@screen xl': {
        fontSize: theme('fontSize.xl'),
      },
    },

    // Responsive Text
    '.text-xl-r': {
      fontSize: '17px',
      '@screen sm': {
        fontSize: '18px',
      },
      '@screen lg': {
        fontSize: '19px',
      },
      '@screen xl': {
        fontSize: theme('fontSize.xl'),
      },
    },
    '.text-lg-r': {
      fontSize: '15px',
      '@screen sm': {
        fontSize: '16px',
      },
      '@screen lg': {
        fontSize: '17px',
      },
      '@screen xl': {
        fontSize: theme('fontSize.lg'),
      },
    },
    '.text-base-r': {
      fontSize: '14px',
      '@screen sm': {
        fontSize: '15px',
      },
      '@screen lg': {
        fontSize: '16px',
      },
      '@screen xl': {
        fontSize: theme('fontSize.base'),
      },
    },
  });
});
