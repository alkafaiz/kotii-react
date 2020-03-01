import Login from "./components/layouts/Login";
import Main from "./components/layouts/Main";
import Signup from "./components/pages/Signup";
import Invite from "./components/pages/Invite";
export const LANDING = {
  path: "/"
};

export const LOGIN = {
  path: "/login",
  component: Login
};

export const SIGNUP = {
  path: "/signup",
  component: Signup
};

export const MAIN = {
  path: "/main",
  component: Main
};

export const INVITE = {
  path: "/invite",
  component: Invite
};
