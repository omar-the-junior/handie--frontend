import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents, theme }) => {
  addComponents({
    '.btn': {
      padding: '0.625rem 1.25rem',
      borderRadius: theme('borderRadius.md'),
      fontSize: theme('fontSize.base'),
      fontWeight: theme('fontWeight.semibold'),
      backgroundColor: theme('colors.primary'),
      color: theme('colors.white'),
      transition: 'all 0.3s ease-in-out',
      borderWidth: '2px',
      borderColor: theme('colors.primary'),

      '&:disabled': {
        backgroundColor: theme('colors.gray'),
        borderColor: theme('colors.gray'),
        color: theme('colors.white'),
        cursor: 'not-allowed',

        '&:hover': {
          backgroundColor: theme('colors.gray'),
          borderColor: theme('colors.gray'),
          color: theme('colors.white'),
        },

        '&:active': {
          transform: 'none',
        },
      },
      '&:active': {
        transform: 'scale(0.90)',
        transition: 'transform 0.15s ease-in-out',
      },

      '&:hover': {
        backgroundColor: theme('colors.accent'),
        borderColor: theme('colors.accent'),
      },
      '&.btn-outline': {
        backgroundColor: 'transparent',
        border: `2px solid ${theme('colors.primary')}`,
        color: theme('colors.primary'),
        '&:hover': {
          backgroundColor: `${theme('colors.primary')}f2`,
          color: theme('colors.white'),
        },
      },

      '&.btn-sm': {
        padding: '0.5rem 1rem',
        borderRadius: theme('borderRadius.DEFAULT'),
        fontWeight: theme('fontWeight.sm'),
        fontSize: theme('fontSize.sm'),
      },

      '&.btn-md': {
        padding: '0.625rem 1.25rem',
        borderRadius: theme('borderRadius.md'),
        fontSize: theme('fontSize.base'),
        fontWeight: theme('fontWeight.semibold'),
      },

      '&.btn-lg': {
        padding: '0.875rem 1.75rem',
        borderRadius: theme('borderRadius.lg'),
        fontWeight: theme('fontWeight.bold'),
        fontSize: theme('fontSize.xl'),
      },

      '&.btn-error': {
        backgroundColor: theme('colors.error'),
        borderColor: theme('colors.error'),

        '&.btn-outline': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.error')}`,
          color: theme('colors.error'),
          '&:hover': {
            backgroundColor: theme('colors.error'),
            color: theme('colors.white'),
          },
        },
      },

      '&.btn-success': {
        backgroundColor: theme('colors.success'),
        borderColor: theme('colors.success'),
        '&.btn-outline': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.success')}`,
          color: theme('colors.success'),
          '&:hover': {
            backgroundColor: theme('colors.success'),
            color: theme('colors.white'),
          },
        },
      },

      '&.btn-neutral': {
        backgroundColor: theme('colors.neutral'),
        color: theme('colors.charcoal'),
        borderColor: theme('colors.neutral'),
        '&.btn-outline': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.neutral')}`,
          color: theme('colors.neutral'),
          '&:hover': {
            backgroundColor: theme('colors.neutral'),
            color: theme('colors.charcoal'),
          },
        },
      },

      '&.btn-alert': {
        backgroundColor: theme('colors.alert'),
        borderColor: theme('colors.alert'),
        '&.btn-outline': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.alert')}`,
          color: theme('colors.alert'),
          '&:hover': {
            backgroundColor: theme('colors.alert'),
            color: theme('colors.white'),
          },
        },
      },

      '&.btn-charcoal': {
        backgroundColor: theme('colors.charcoal'),
        borderColor: theme('colors.charcoal'),
        '&.btn-outline': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.charcoal')}`,
          color: theme('colors.charcoal'),
          '&:hover': {
            backgroundColor: theme('colors.charcoal'),
            color: theme('colors.white'),
          },
        },
      },
    },
  });
});
