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
        path: "/userlist",
        element: <UsersList />
    },

    {
        path: "/dasboard",
        element: <UserDasboard />,
    },
    {
        path: "profile",
        element: <UserProfile />
    },

    {
        path: "*",
        element: <Error404 />
    }
]);
