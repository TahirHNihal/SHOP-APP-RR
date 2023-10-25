import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import Layout from "../components/Layout/Layout";
import Cart from "../pages/Cart/Cart";
import WishPage from "../pages/WishPage/WishPage";
import Admin from "../pages/Admin/Admin";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Home from "../pages/Home/Home";
import Brand from "../pages/Brands/Brand";
import Tag from "../pages/Tag/Tag";
import Dashboard from "../pages/Dashboard/Dashboard";

//Create public router
const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/:slug",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <WishPage />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "brand",
            element: <Brand name="brand"/>,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "tag",
            element: <Tag />,
          },
          {
            path: "product",
            element: <Tag />,
          },
        ],
      },
    ],
  },
]);

//Export public router
export default publicRoute;
