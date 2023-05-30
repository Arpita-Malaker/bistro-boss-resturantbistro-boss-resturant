import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Home/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";



export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[

        {

            path:'/',
            element:<Home></Home>

        }
        ,

        {
          path:'/ourMenu',
          element:<OurMenu></OurMenu>

        },
        {
          path:'/order/:category',
          element:<Order></Order>

        },
        {
          path:'/login',
          element:<Login></Login>

        }
      ]
    },
  ]);