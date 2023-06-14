import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";


const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <Loader></Loader>
    }

    if (user && isInstructor) {
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>

};

export default InstructorRoute;