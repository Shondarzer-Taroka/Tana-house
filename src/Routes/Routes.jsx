import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import Gallery from "../Pages/Gallery/Gallery";
import Error from "../Pages/Error/Error";




    const router=createBrowserRouter([
        {
            path:'/',
            errorElement: <Error></Error>,
            element: <Root></Root>,
            children:[
                {
                    path:'/',
                    element: <Home></Home>
                },
                {
                    path:'/log',
                    element: <LogIn></LogIn>
                },
                {
                    path:'/reg',
                    element:<Register></Register>
                },
                {
                    path:'/update',
                    element: <PrivateRoute><UpdateProfile></UpdateProfile> </PrivateRoute> 

                },
                {
                    path:'/box/:id',
                    element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute> ,
                    loader:()=> fetch('/residential.json')
                },
                {
                    path:'/gallery',
                    element: <PrivateRoute><Gallery></Gallery></PrivateRoute> 
                }


            ]
        }
    ])



export default router;