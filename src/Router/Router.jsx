import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Main from "../Layout/Main";
import Contact from "../Pages/Shared/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
