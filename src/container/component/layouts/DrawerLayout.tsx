import * as React from "react";
import { ThemeProvider, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import DrawerHeader from "./DrawerHeader";
import DrawerSideBar from "./DrawerSideBar";
// import theme from "./theme"
import theme from "./../../../theme";
import HomeScreen from "../../screens/dashboard";
const drawerWidth = 280;

const DrawerHeaderStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerLayout = ({ outlet }: any) => {
  const [openDrawer, setOpenDrawer] = React.useState(true);
  const toggleDrawer = (drawerToggleValue: boolean) => () => {
    setOpenDrawer(drawerToggleValue);
  };

  return (
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <CssBaseline />
        <DrawerHeader
          openDrawer={openDrawer}
          drawerWidth={drawerWidth}
          toggleDrawerHandler={toggleDrawer}
        />
        
        <DrawerSideBar
          openDrawer={openDrawer}
          drawerWidth={drawerWidth}
          toggleDrawerHandler={toggleDrawer}
        />
        {/* component render here */}
        <Box>
          {/* used for margin */}
          <DrawerHeaderStyle />
          <div className="wrapper-content">{outlet}</div>
        </Box>
        {/* <HomeScreen /> */}
      </Box>
    </ThemeProvider>
    //   </React.StrictMode>
  );
};

export default DrawerLayout;
