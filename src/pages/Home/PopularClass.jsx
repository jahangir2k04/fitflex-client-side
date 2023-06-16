import { useQuery } from "@tanstack/react-query";


const PopularClass = () => {

    const { data: popularClasses = [] } = useQuery(['popular-classes'], async () => {
        const res = await fetch('http://localhost:5000/popular-classes');
        return res.json();
    })

    return (
        <div className="max-w-7xl mx-auto mb-16">
            <h3 className="mb-8">
                <span className="text-4xl font-bold">Popular Classes</span>
                <span className="ms-1 text-xl">{`(top 6)`}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    popularClasses.map(popularClass =>

                        <div key={popularClass._id} className="mx-auto w-72 bg-base-100 shadow-xl">
                            <figure><img className="h-48 w-full" src={popularClass.image} alt="Photo" /></figure>
                            <div className="card-body p-5">
                                <h2 className="card-title">{popularClass.className}</h2>
                                <p>Instructor: {popularClass.instructorName}</p>
                                <p className="text-xl text-orange-500 font-bold my-4">Price: ${popularClass.price}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PopularClass;