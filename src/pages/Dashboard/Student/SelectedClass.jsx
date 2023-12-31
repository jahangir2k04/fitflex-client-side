// import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useSelectedClass from "../../../hooks/useSelectedClass";


const SelectedClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const [selectedClasses, refetch] = useSelectedClass();

    const handleDelete = selectedClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/delete-class/${selectedClass._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })

            }
        })
    }


    return (
        <div className="bg-base-200 h-full p-10">
            <h3 className="mb-6 font-extrabold text-3xl text-center text-orange-500">Selected Classes</h3>
            <div className="bg-white p-10 mb-16">
                <h3 className="text-2xl font-bold mb-5">Total Class: {selectedClasses.length}</h3>
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
                                <th className="bg-red-200 text-lg">Action</th>
                                <th className="bg-red-200 text-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClasses.map((selectedClass, index) =>
                                    <tr key={selectedClass._id} className="hover">
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-14 h-14">
                                                    <img src={selectedClass.image} alt="Photo" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{selectedClass.className}</td>
                                        <td>{selectedClass.instructorName}</td>
                                        <td>${selectedClass.price}</td>
                                        <td>{selectedClass.payment}</td>
                                        <td>
                                            <Link to={`/dashboard/payment/${selectedClass._id}`}>
                                                <button
                                                    disabled={selectedClass.seats === 0}
                                                    className="btn w-full border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm">
                                                    Pay
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(selectedClass)}
                                                className="btn w-full border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClass;