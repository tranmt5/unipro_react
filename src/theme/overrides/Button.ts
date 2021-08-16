import { Theme } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none'
          },
          color: theme.palette.text.primary
        },
        sizeLarge: {
          height: 48
        },
        // contained
        containedInherit: {
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400]
          }
        },
        containedPrimary: {
          color: theme.palette.getContrastText(theme.palette.warning.light),
          boxShadow: theme.customShadows.primary
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary
        },
        containedInfo: {
          boxShadow: theme.customShadows.info
        },
        containedSuccess: {
          boxShadow: theme.customShadows.success
        },
        containedWarning: {
          boxShadow: theme.customShadows.warning
        },
        containedError: {
          boxShadow: theme.customShadows.error
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }
      }
    }
  };
}
