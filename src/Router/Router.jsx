import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ProductAddToCart from "../Pages/ProductAddToCart.jsx";
import ProductFilter from "../Pages/ProductFilter.jsx";
import ProductDetails from "../Pages/ProductDetails.jsx";
import Signup from "../Pages/Signup.jsx";
import Login from "../Pages/Login.jsx";
import Error404 from "../Pages/Error404.jsx";
import UsersList from "../Pages/UsersList.jsx";
import UserDasboard from "../Dasboard/UserDasboard/UserDasboard.jsx";
import UserProfile from "../Dasboard/UserDasboard/UserProfile.jsx";
import Admin from "../Dasboard/Admin/Admin.jsx";
import DashboardHome from "../Dasboard/UserDasboard/DashboardHome.jsx";
import Orders from "../Dasboard/UserDasboard/Orders.jsx";
import Settings from "../Dasboard/UserDasboard/Settings.jsx";
// import ProductBuyPage from "../Pages/ProductBuyPage.jsx";

export let router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: "/cart",
        element: <ProductAddToCart />
    },
    {
        path: "/productfilter",
        element: <ProductFilter />,
        // children: [
        //     {
        //         path: ":id",
        //         element: <ProductDetails />
        //     }
        // ]
    },
    {
        path: "/productDetailsage/:id",
        element: <ProductDetails />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/userlist",
        element: <UsersList />
    },

    {
        path: "/dashboard",
        element: <UserDasboard />,
        children: [
            { index: true, element: <DashboardHome /> },
            { path: "orders", element: <Orders /> },
            { path: "cart", element: <h1>cart</h1> },
            { path: "wishlist", element: <h1>wishlist</h1> },
            { path: "profile", element: <UserProfile /> },
            { path: "settings", element: <Settings /> },
        ]
    },

    {
        path: "*",
        element: <Error404 />
    }
]);
