import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogInLayOut from "../Layout/LogInLayOut/LogInLayOut";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Instructors from "../Pages/Instructors/Instructors";
import AllUser from "../Pages/DashBoard/AllUser/AllUser";
import MyClasses from "../Pages/DashBoard/MyClasses/MyClasses";
import StudentsRoom from "../Pages/DashBoard/StudentsRoom/StudentsRoom";
import Dashboard from "../Layout/Dashboard";
import InstructorsRoom from "../Pages/DashBoard/InstructorsRoom/InstructorsRoom";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import InstructorPrivateRoute from "./InstructorPrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";
import InstructorSelectedPage from "../Pages/InstructorSelectedPage/InstructorSelectedPage";
import UpdateClass from "../Pages/DashBoard/UpdateClass/UpdateClass";
import Payment from "../Pages/DashBoard/Payment/Payment";
import EnrolledClass from "../Pages/DashBoard/EnrolledClass/EnrolledClass";
import PayementHistory from "../Pages/DashBoard/PayementHistory/PayementHistory";



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
            },
            {
              path:'instructors',
              element:<Instructors></Instructors>
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
        // student dashboard
        {
          path: "studentroom",
          element:<StudentsRoom></StudentsRoom>,
        },
        {
          path:'myclasses',
          element:<MyClasses></MyClasses>
        },
        {
          path:"enrolledclass",
          element:<EnrolledClass></EnrolledClass>
        },
        {
          path:'paymenthistory',
          element:<PayementHistory></PayementHistory>
        },
        // admin dashboard
        {
          path:'allusers',
          element:<AdminPrivateRoute><AllUser></AllUser></AdminPrivateRoute>
        },
        {
          path:"payment/:id",
          element:<Payment></Payment>
        },
        // instructor dashboard
        {
          path:'instructorroom',
          element:<InstructorsRoom></InstructorsRoom>
        },
        {
          path:"addclass",
          element:<InstructorPrivateRoute><AddClass></AddClass></InstructorPrivateRoute>
        },
        {
          path:"instructoraddclsses",
          element:<InstructorSelectedPage></InstructorSelectedPage>
        },
        {
          path:'updateclasses/:id',
          element:<UpdateClass></UpdateClass>,

        }
      ]
    }
]);

export default router;