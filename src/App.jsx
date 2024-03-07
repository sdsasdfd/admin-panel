import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import User from "./pages/User";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Products from "./pages/Products";
import New from "./pages/new/New";

const router = createBrowserRouter([
  { index: true, element: <Home /> },
  { path: "login", element: <Login /> },
  {
    path: "users",
    element: <User />,
    children: [
      { index: true, element: <List /> },
      { path: ":userId", element: <Single /> },
      { path: "new", element: <New /> },
    ],
  },
  {
    path: "products",
    element: <Products />,
    children: [
      { index: true, element: <List /> },
      { path: ":productId", element: <Single /> },
      { path: "new", element: <New /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
