import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loader from "../components/Loader";
import useInstructor from "../hooks/useInstructor";


const StudentRoute = ({ children }) => {

    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isAdminLoading || isInstructorLoading ){
        return <Loader></Loader>
    }

    if (user && !isAdmin && !isInstructor ) {
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;