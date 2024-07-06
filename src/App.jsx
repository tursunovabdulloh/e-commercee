import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";

function ProtectedRoutes({ children }) {
  const { user } = useSelector((state) => state.user);

  return user ? children : <Navigate to="/login" />;
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Layout />
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
