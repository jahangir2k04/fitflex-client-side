import { useQuery } from "@tanstack/react-query";


const Instructors = () => {

    const { data: allInstructors = [] } = useQuery(['all-instructor'], async () => {
        const res = await fetch('http://localhost:5000/all-instructor');
        return res.json();
    })

    return (
        <div className="max-w-7xl mx-auto">
            <h3 className="my-6">
                <span className="text-4xl font-bold">Our Instructors</span>
                <span className="ms-1 text-xl">{`(all)`}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {
                    allInstructors.map(instructor =>

                        <div key={instructor._id} className="mx-auto w-72 bg-base-100 shadow-xl">
                            <figure><img className="h-48 w-full" src={instructor.image} alt="Photo" /></figure>
                            <div className="card-body p-5">
                                <h2 className="card-title">{instructor.name}</h2>
                                <h2>Email: {instructor.email}</h2>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Instructors;