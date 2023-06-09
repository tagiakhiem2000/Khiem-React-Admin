import Layout from "../pages/layout";
import React from "react";
import Index from "../pages";
import UserIndex from "../pages/users";
import UserCreate from "../pages/users/create";
import AuthLayout from "../pages/auth/authLayout";
import Login from "../pages/auth/login";
import ChangePassword from "../pages/auth/changePassword";
import UserEdit from "../pages/users/edit";
    
const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: "users",
                children: [
                    {
                        index: true,
                        element: <UserIndex />,
                    },  
                    {
                        path: "create",
                        element: <UserCreate />,
                    },
                    {
                        path: ":userId/edit",
                        element: <UserEdit />,
                    },
                ]
            },
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/confirm-account",
                element: <ChangePassword />,
            }
        ]
    }
])

export default router