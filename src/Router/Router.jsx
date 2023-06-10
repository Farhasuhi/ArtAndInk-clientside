import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogInLayOut from "../Layout/LogInLayOut/LogInLayOut";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path:'classes',
              element:<Classes></Classes>
            }
          ]
    },
    {
      path:'registration',
      element:<LogInLayOut></LogInLayOut>,
      children:[
        {
          path:'login',
          element:<LogIn></LogIn>
        },
        {
          path:'signup',
          element:<Registration></Registration>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "userhome",
          element: <UserHome></UserHome>,
        },
      ]
    }
]);

export default router;