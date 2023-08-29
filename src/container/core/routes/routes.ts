import { FC } from "react";
import { RoutePath } from "../constants/RoutePath";
import SignupScreen from "../../screens/authscreen/signup";
import Login from "../../screens/authscreen/login";
import HomeScreen from "../../screens/dashboard";
interface Route {
  key: string;
  title: string;
  path: string;
  component: FC;
  navigatePath?: string;
}
export const AuthLayoutRoutes: Array<Route> = [
  {
    key: "signupScreen-route",
    title: "signup-screen",
    path: RoutePath.Signup,
    component: SignupScreen,
  },
  {
    key: "loginScreen-route",
    title: "login-screen",
    path: RoutePath.Login,
    component: Login,
  },
];
export const headerFooterLayoutRoute: Array<Route> = [
  {
    key: "dashboard-route",
    title: "dashboard",
    path: RoutePath.Home,
    component: HomeScreen,
  },
];
