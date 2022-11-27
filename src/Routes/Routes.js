import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddProducts from "../pages/AddProducts/AddProducts";
import Blog from "../pages/Blog/Blog";
import BookNow from "../pages/BookNow/BookNow";
import Categories from "../pages/Category/Categories";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Product from "../pages/Products/Product";
import Products from "../pages/Products/Products";
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
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            },
            // {
            //     path: '/product',
            //     element: <Products></Products>
            // },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Product></Product>

            },
            // {
            //     path: '/booking',
            //     element: <BookNow></BookNow>
            // },
            // {
            //     path: '/categories/:id',
            //     loader: async ({ params }) => {
            //         return fetch(`http://localhost:5000/category/${params.id}}`)
            //     },
            //     element: <Products></Products>
            // },
        ]
    },
    {

        path: '*',
        element: <ErrorPage></ErrorPage>

    }
])