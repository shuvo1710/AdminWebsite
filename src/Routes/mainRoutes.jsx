import { createBrowserRouter } from "react-router-dom";
import MainDashboard from "../Components/MainDashboard/MainDashboard";
import MyAcount from "../Components/MyAccount/MyAccount";
import AccountDetails from "../Components/AccountDetails/AccountDetails";
import PurchaseHistory from "../Components/PurchaseHistory/PurchaseHistory";
import CommissionWithdraw from "../Components/CommissionWithdraw/CommissionWithdraw";
import CommissionLedger from "../Components/CommissionLedger/CommissionLedger";
import Transactions from "../Components/Transactions/Transactions";
import BalanceTransfer from "../Components/BalanceTransfer/BalanceTransfer";
import SignIn from "../Components/SignIn/SignIn";

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
      {
        path: "/PurchaseHistory",
        element: <PurchaseHistory />,
      },
      {
        path: "/commissionWithdraw",
        element: <CommissionWithdraw />,
      },
      {
        path: "/CommissionLedger",
        element: <CommissionLedger />,
      },
      {
        path: "/Transactions",
        element: <Transactions />,
      },
      {
        path: "/BalanceTransfer",
        element: <BalanceTransfer />,
      },
    ],
  },

  {
    path: "/singin",
    element: <SignIn />,
  },
]);
