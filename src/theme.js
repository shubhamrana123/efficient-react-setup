import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1363DF",
    },
    secondary: {
      main: "#0EDEDA",
    },
    success: {
      main: "#0ede86",
    },
    error: {
      main: "rgb(182 21 21 / 80%)",
    },
    warning: {
      main: "#ffc107",
    },
    danger: {
      main: "#dc3545",
    },
    info: {
      main: "#17a2b8",
    },
    muted: {
      main: "#6c757d",
    },
  },
  typography: {
    fontFamily: ['"Mulish"', "sans-serif"].join(","),
    fontSize: "1rem",

    h1: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: "3.2rem",
      fontWeight: "500",
      margin: "0 0 40px 0",
      letterSpacing: "-0.01em",
    },
    h2: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: "2.4rem",
      fontWeight: "500",
      margin: "0 0 32px 0",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: "1.8rem",
      fontWeight: "500",
      margin: "0 0 28px 0",
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: "1.6rem",
      fontWeight: "500",
      margin: "0 0 24px 0",
      letterSpacing: "-0.01em",
    },
    h5: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: "1.2rem",
      fontWeight: "500",
      margin: "0 0 24px 0",
      letterSpacing: "-0.01em",
    },
    h6: {
      fontFamily: ['"Rubik"', "sans-serif"].join(","),
      fontSize: "1rem",
      fontWeight: "500",
      margin: "0 0 16px 0",
      letterSpacing: "-0.01em",
    },
    subtitle1: {
      fontSize: "1.8rem",
      margin: "0 0 20px 0",
      letterSpacing: "-0.01em",
      fontWeight: "500",
    },
    subtitle2: {
      fontSize: "1.6rem",
      margin: "0 0 18px 0",
      fontWeight: "500",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "1.3rem",
      fontWeight: "400",
    },
    button: {
      textTransform: "capitalize",
      fontSize: "1rem",
      color: "#1363DF",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: () => ({
          "&.MuiAccordion-root": {
            fontFamily: ['"Mulish"', "sans-serif"].join(","),
            border: "0px none",
          },
          "& .MuiAccordionSummary-root": {
            backgroundColor: "#fff",
            borderTop: "1px solid #e0eaf4",
            "& .MuiAccordionSummary-content": {
              marginLeft: "0px",
              order: "2",
            },
          },
          "& .MuiCollapse-root": {
            "& .MuiAccordionDetails-root": {
              border: "1px solid #e0eaf4",
              background: "#fafafa",
              display: "flex",
              flexDirection: "column",
            },
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: () => ({
          "&.MuiButton-root": {
            backgroundColor: "#1363DF",
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: () => ({
          display: "inline-flex",
          maxWidth: "100px",
          height: "28px",
          borderRadius: "25px",
          "&.MuiChip-colorSuccess": {
            backgroundColor: "rgba(14, 222, 218, 0.2)",
            "& .MuiChip-label": {
              color: "rgb(13 113 111 / 80%)",
            },
          },
          "&.MuiChip-colorError": {
            backgroundColor: "#FF414133",
            "& .MuiChip-label": {
              color: "rgb(182 21 21 / 80%)",
            },
          },
        }),
        label: {
          fontSize: "0.9rem",
          fontWeight: "500",
        },
      },
    },
  },
  props: {
    MuiButton: {
      size: "small",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "small",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "small",
    },
  },
});

export default theme;
