import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useSelectedClass = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selected-class', user?.email ? user?.email : ''],
        enabled: !!user?.email && !!localStorage.getItem("fitflex-access-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/selected-class?email=${user?.email}`)
            return res.data;
        }
    });

    return [selectedClasses, refetch];

};

export default useSelectedClass;