import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useEnrolledClass = () => {
    
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure(AuthContext);

    const { data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolled-classes', user?.email ? user?.email : ''],
        enabled: !!user?.email && !!localStorage.getItem("fitflex-access-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled-class?email=${user?.email}`)
            return res.data;
        }
    });

    return [enrolledClasses];
    
};

export default useEnrolledClass;