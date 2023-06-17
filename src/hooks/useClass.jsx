import { useQuery } from "@tanstack/react-query";


const useClass = () => {

    const { data: allClasses = [], refetch, isLoading } = useQuery(['all-classes'], async () => {
        const res = await fetch('http://localhost:5000/all-classes');
        return res.json();
    });

    return { allClasses, refetch, isLoading };
};

export default useClass;