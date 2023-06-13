import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/Shared/ErrorPage";
import Login from "../pages/Login/Login";


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
            }
        ]
    },

    // Dashboard related route
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
    }
]);