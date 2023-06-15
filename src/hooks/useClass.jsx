import { useQuery } from "@tanstack/react-query";


const useClass = () => {

    const { data: classes = [], refetch, isLoading } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes');
        return res.json();
    });

    return { classes, refetch, isLoading };
};

export default useClass;