import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/mainRoutes";
import { Children } from "react";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={routes}>{Children}</RouterProvider>
    </div>
  );
}

export default App;
