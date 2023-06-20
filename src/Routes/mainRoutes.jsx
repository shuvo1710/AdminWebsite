import { createBrowserRouter } from "react-router-dom";
import MainDashboard from "../Components/MainDashboard/MainDashboard";
import MyAcount from "../Components/MyAccount/MyAccount";
import AccountDetails from "../Components/AccountDetails/AccountDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard></MainDashboard>,
    children: [
      {
        path: "/",
        element: <MyAcount />,
      },
      {
        path: "/AccountDetails",
        element: <AccountDetails />,
      },
    ],
  },
]);
