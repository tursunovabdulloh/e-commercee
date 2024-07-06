import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  function ProtectedRoutes({ children }) {
    const { users } = useSelector((state) => state.login);

    return users ? children : <Navigate to="/login" />;
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

  return <RouterProvider router={routes} />;
}

export default App;
