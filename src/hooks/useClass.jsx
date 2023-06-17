import { useQuery } from "@tanstack/react-query";


const useClass = () => {

    const { data: allClasses = [], refetch, isLoading } = useQuery(['all-classes'], async () => {
        const res = await fetch('https://b7a12-summer-camp-server-side-jahangir2k04.vercel.app/all-classes');
        return res.json();
    });

    return { allClasses, refetch, isLoading };
};

export default useClass;