import { useQuery } from "@tanstack/react-query";


const PopularInstructor = () => {

    const { data: popularInstructors = [] } = useQuery(['popular-instructors'], async () => {
        const res = await fetch('http://localhost:5000/popular-instructor');
        return res.json();
    })


    return (
        <div className="max-w-7xl mx-auto mb-16">
            <h3 className="mb-8">
                <span className="text-4xl font-bold">Popular Instructors</span>
                <span className="ms-1 text-xl">{`(top 6)`}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ">
                {
                    popularInstructors.map(popularInstructor =>

                        <div key={popularInstructor._id} className="mx-auto w-72 bg-base-100 shadow-2xl hover:border hover:border-orange-600 rounded-lg">
                            <figure><img className="h-48 w-full" src={popularInstructor.image} alt="Photo" /></figure>
                            <div className="card-body p-5">
                                <h2 className="card-title">{popularInstructor.name}</h2>
                                <p className="my-4">Email: {popularInstructor.email}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;