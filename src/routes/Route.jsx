import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../pages/Shared/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignkUp/SignUp";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome";
import StudentHome from "../pages/Dashboard/Student/StudentHome";
import ManageUser from "../pages/Dashboard/Admin/ManageUser";
import ManageClass from "../pages/Dashboard/Admin/ManageClass";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass";
import MyClass from "../pages/Dashboard/Instructor/MyClass";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import PrivateRoute from "./PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },

    // Dashboard related route
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            // student related route
            {
                path: 'student-home',
                element: <StudentRoute><StudentHome></StudentHome></StudentRoute>
            },
            {
                path: 'selected-class',
                element: <StudentRoute><SelectedClass></SelectedClass></StudentRoute>
            },
            {
                path: 'enrolled-class',
                element: <StudentRoute><EnrolledClass></EnrolledClass></StudentRoute>
            },


            // instructors related route
            {
                path: 'instructor-home',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: 'my-class',
                element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
            },
            {
                path: 'add-class',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },

            // admin related route
            {
                path: 'admin-home',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'manage-user',
                element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
            },
            {
                path: 'manage-class',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            }

        ]
    }
]);