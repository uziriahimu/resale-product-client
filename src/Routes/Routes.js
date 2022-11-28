import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Categories from "../pages/Category/Categories";
import AddProduct from "../pages/DashBoard/AddProduct/AddProduct";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import MyOrders from "../pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../pages/DashBoard/MyProducts/MyProducts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Product from "../pages/Products/Product";
import SignUp from "../pages/Sign Up/SignUp";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category',
                element: <Categories></Categories>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Product></Product>

            },


        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,

        children: [

            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/mybuyers',
                element: <AddProduct></AddProduct>
            },

        ]

    },
    {

        path: '*',
        element: <ErrorPage></ErrorPage>

    }
])