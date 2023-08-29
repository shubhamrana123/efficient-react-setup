import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MemorySharpIcon from "@mui/icons-material/MemorySharp";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import { styled, Theme, CSSObject, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOG_IN, USER_DETAILS } from "../../redux/action-types"
import Stack from "@mui/material/Stack";
import logo from "../../../assets/image/logo-white-1.png";
type Iprops = {
  openDrawer: boolean;
  toggleDrawerHandler: any;
  drawerWidth: any;
};

const DrawerSideBar = ({
  openDrawer,
  toggleDrawerHandler,
  drawerWidth,
}: Iprops) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  type Iprops = {
    text: string;
    icon: any;
    subMenuItems: any[];
  };

  const MenuList = styled(List)(({ theme }) => ({
    width: 240,
  }));

  const MenuItemRender = ({ text, icon, subMenuItems }: Iprops) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch<any>();

    const logout = () => {
      localStorage.clear();
      dispatch({ type: LOG_IN, payload: null });

      dispatch({
        type: USER_DETAILS,
        payload: null,
      });
      navigate("/login");
    };

    const handleMenuClick = (text: any) => {
      console.log("Selected Menu --", text);
      setOpen(!open);
      console.log(text);
      if (text === "Logout") {
        logout();
      } else {
        navigate("/" + text.toLowerCase());
      }
    };

    return (
      <>
        <ListItemButton onClick={() => handleMenuClick(text)}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
          {subMenuItems.length > 0 ? (
            open ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          ) : (
            <></>
          )}
        </ListItemButton>
        {/* sub menu is only shown when drawer is in open state */}
        {openDrawer && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <MenuList disablePadding>
              {subMenuItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  sx={{ pl: 4 }}
                  onClick={() => {
                    toggleDrawerHandler(false);
                    navigate(item.routePath);
                  }}
                >
                  {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                  <ListItemText primary={item.text} />
                </ListItemButton>
              ))}
            </MenuList>
          </Collapse>
        )}
      </>
    );
  };

  const menuItems = [
    {
      text: "Home",
      icon: <MemorySharpIcon />,
      subMenuItems: [],
    },
    {
      text: "Products",
      icon: <MemorySharpIcon />,
      subMenuItems: [],
      routePath: "product",
    },
    {
      text: "Profile",
      icon: <MemorySharpIcon />,
      subMenuItems: [],
      routePath: "profile",
    },

    {
      text: "Logout",
      icon: <LogoutIcon />,
      subMenuItems: [],
    },
    // Add more menu items as needed
  ];

  return (
    <React.Fragment>
      <Drawer variant="permanent" open={openDrawer}>
        <DrawerHeader>
          <Stack
            className="LogoIcon"
            sx={{
              ...(!openDrawer && {
                transform: "translateX(-100%)!important",
                opacity: "0!important",
              }),
              ...(openDrawer && {
                left: "-25px",
                position: "relative",
              }),
            }}
          >
            <img src={logo} alt="" />
          </Stack>
          <IconButton
            onClick={toggleDrawerHandler(false)}
            sx={{
              ...(openDrawer && {
                marginRight: "-25px",
                position: "fixed",
                backgroundColor: " #576086",
                "&:hover": {
                  backgroundColor: " #01071f",
                },
              }),
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <MenuList>
          {menuItems.map((item, index) => (
            <MenuItemRender key={index} {...item} />
          ))}
        </MenuList>

        <Divider />
      </Drawer>
    </React.Fragment>
  );
};
export default DrawerSideBar;
