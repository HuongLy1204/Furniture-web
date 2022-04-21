import { createTheme } from "@mui/material/styles";
import { red, yellow } from "@mui/material/colors";


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // MuiIcon: {
    //   styleOverrides: {
    //     root: {
    //       // Match 24px = 3 * 2 + 1.125 * 16
         
    //       fontSize: '50rem',
    //     },
    //   },
    // },
    
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "black",
          "&:hover, &.active": {
            color: "orange",
          },
        },
      },
    },
  }
});

export default theme;
