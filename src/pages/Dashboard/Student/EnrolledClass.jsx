import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const EnrolledClass = () => {

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

    return (
        <div className="bg-base-200 h-full p-10">
            <h3 className="mb-6 font-extrabold text-3xl text-center text-orange-500">Enrolled Classes</h3>
            <div className="bg-white p-10 mb-16">
                <h3 className="text-2xl font-bold mb-5">Total Class: {enrolledClasses.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full text-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="bg-red-200 text-lg">#</th>
                                <th className="bg-red-200 text-lg">Image</th>
                                <th className="bg-red-200 text-lg">Class Name</th>
                                <th className="bg-red-200 text-lg">Instructor</th>
                                <th className="bg-red-200 text-lg">Price</th>
                                <th className="bg-red-200 text-lg">Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enrolledClasses.map((enrolledClass, index) =>
                                    <tr key={enrolledClass._id} className="hover">
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-14 h-14">
                                                    <img src={enrolledClass.image} alt="Photo" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{enrolledClass.className}</td>
                                        <td>{enrolledClass.instructorName}</td>
                                        <td>${enrolledClass.price}</td>
                                        <td>{enrolledClass.payment}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClass;