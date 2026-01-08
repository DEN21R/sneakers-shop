import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
})
export default theme
