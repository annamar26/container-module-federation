import { Login } from "./views/login";
import { Home } from "./views/home";


export const dispatchRoute = (pathname) => {
  if (pathname === "/") Home();
  else if(pathname === '/auth')Login();
};
export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  dispatchRoute(pathname);
};
