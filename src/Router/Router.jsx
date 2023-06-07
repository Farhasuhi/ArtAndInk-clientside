import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogInLayOut from "../Layout/LogInLayOut/LogInLayOut";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
              path: "/",
              element: <Home></Home>,
            },
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
    }
]);

export default router;