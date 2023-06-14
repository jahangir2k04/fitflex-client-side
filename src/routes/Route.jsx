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
import StudentHome from "../pages/Dashboard/Studend/StudentHome";
import ManageUser from "../pages/Dashboard/Admin/ManageUser";
import ManageClass from "../pages/Dashboard/Admin/ManageClass";
import SelectedClass from "../pages/Dashboard/Studend/SelectedClass";
import EnrolledClass from "../pages/Dashboard/Studend/EnrolledClass";
import MyClass from "../pages/Dashboard/Instructor/MyClass";
import AddClass from "../pages/Dashboard/Instructor/AddClass";


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
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            // student related route
            {
                path: 'student-home',
                element: <StudentHome></StudentHome>
            },
            {
                path: 'selected-class',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'enrolled-class',
                element: <EnrolledClass></EnrolledClass>
            },


            // instructors related route
            {
                path: 'instructor-home',
                element: <InstructorHome></InstructorHome>
            },
            {
                path: 'my-class',
                element: <MyClass></MyClass>
            },
            {
                path: 'add-class',
                element: <AddClass></AddClass>
            },

            // admin related route
            {
                path: 'admin-home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'manage-user',
                element: <ManageUser></ManageUser>
            },
            {
                path: 'manage-class',
                element: <ManageClass></ManageClass>
            }

        ]
    }
]);