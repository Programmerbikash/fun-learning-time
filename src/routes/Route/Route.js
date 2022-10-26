import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Details from "../../others/Details/Details";
import Category from "../../pages/Category/Category";
import Home from "../../pages/Home/Home";
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
          path: "/details/:id",
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
          path: "/detail/:id",
          element: <Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
      ],
    },
]);