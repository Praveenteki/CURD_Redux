import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRoute from "../components/AuthHelpers/PrivateRoute/PrivateRoute";
import About from "../pages/About/About";

function Routes() {
  const router = createBrowserRouter([
    {
      element: <PrivateRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
