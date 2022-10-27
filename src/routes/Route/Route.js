import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Details from "../../others/Details/Details";
import Category from "../../pages/Category/Category";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import LeftSide from "../../pages/Shared/LeftSide/LeftSide";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch(`http://localhost:5000/details/`)
        },
        {
          path: "/category",
          element: <LeftSide></LeftSide>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
          loader: () => fetch(`http://localhost:5000/details/`)
        },
        {
          path: "/details/:id",
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
          path: "/category/:id",
          element: <Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        }
      ],
    },
]);