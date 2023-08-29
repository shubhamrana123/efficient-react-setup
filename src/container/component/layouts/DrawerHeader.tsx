import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import logo from "../../../assets/image/infrablok-logo.png";
import React from "react";
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

type Iprops = {
  openDrawer: boolean;
  toggleDrawerHandler: any;
  drawerWidth: any;
};

const DrawerHeader = ({
  openDrawer,
  toggleDrawerHandler,
  drawerWidth,
}: Iprops) => {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="transparent"
        open={openDrawer}
        sx={{
          ...(openDrawer && { zIndex: "1200" }),
        }}
      >
        <Toolbar>
          <Stack
            className="iconButton"
            sx={{
              ...(!openDrawer && {
                margin: "-25px",
                padding: "13px 15px 13px 19px",
                backgroundColor: " #01071f",
              }),
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawerHandler(true)}
              edge="start"
              sx={{
                ...(openDrawer && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
          {/* <Stack
            className="fullLogo"
            sx={{
              ...(openDrawer && {
                transform: "translateX(-100%)!important",
                opacity: "0!important",
              }),
            }}
          >
            <img src={logo} alt="" />
          </Stack> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default DrawerHeader;
