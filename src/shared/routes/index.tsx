import { createBrowserRouter } from "react-router-dom";

import Root from "./root";
import LoginPage from "../../features/authentication/containers/login-page/loginPage";
import UserProfilePage from "../../features/user-profile/containers/user-profile-page/UserProfilePage";
import MyipPage from "../../features/myip/containers/myip-page/MyipPage";
import ExamplePage from "../../features/example/containers/examples/examplePage";
import UserloginPages from "../../features/authentication/containers/userLogin-pages";
import RegisterPage from "../../features/authentication/containers/register-pages/registerPage";

const router = createBrowserRouter([
  //main
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "profile",
        element: <UserProfilePage />,
      },
      {
        path: "myip",
        element: <MyipPage />,
      },
      {
        path: "example",
        element: <ExamplePage />,
      },
    ],
  },
  //
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/userlogin",
    element: <UserloginPages />,
  },
]);
export default router;
