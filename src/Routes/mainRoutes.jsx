import { createBrowserRouter } from "react-router-dom";
import MainDashboard from "../Components/MainDashboard/MainDashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard></MainDashboard>,
  },
]);
