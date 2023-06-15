import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const MyClass = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [feedbackText, setFeedbackTex] = useState('');

    const { data: myClasses = [] } = useQuery({
        queryKey: ['my-class', user?.email ? user?.email : ''],
        enabled: !!user?.email && !!localStorage.getItem("fitflex-access-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/my-class?email=${user?.email}`)
            return res.data;
        }
    })


    return (
        <div className="bg-base-200 h-full px-4 py-10">
            <h3 className="mb-6 font-extrabold text-3xl text-center text-orange-500">My Classes</h3>
            <div className="bg-white px-4 py-10 mb-16">
                <h3 className="text-2xl font-bold mb-5">Total Class: {myClasses.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full text-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="bg-red-200 text-lg">#</th>
                                <th className="bg-red-200 text-lg">Image</th>
                                <th className="bg-red-200 text-lg">Name</th>
                                <th className="bg-red-200 text-lg">Price</th>
                                <th className="bg-red-200 text-lg">Status</th>
                                <th className="bg-red-200 text-lg">Available</th>
                                <th className="bg-red-200 text-lg">Enrolled</th>
                                <th className="bg-red-200 text-lg">Feedback</th>
                                <th className="bg-red-200 text-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map((myClass, index) =>
                                    <tr key={myClass._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td className="">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-14 h-14">
                                                    <img src={myClass.image} alt="Photo" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{myClass.className}</td>
                                        <td>${myClass.price}</td>
                                        <td>{myClass.status}</td>
                                        <td>{myClass.seats}</td>
                                        <td>{myClass.enrolled}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    setFeedbackTex(myClass.feedback);
                                                    window.my_modal_5.showModal()
                                                }}
                                                // disabled={myClass.status !== 'denied'}
                                                className="btn w-full border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm">
                                                See
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn w-full border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm">
                                                Update
                                            </button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Feedback!</h3>
                        <p className="py-4">{feedbackText || 'No Feedback yet'}</p>
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                className="btn border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm text-base">Close</button>
                        </div>
                    </form>
                </dialog>

            </div>
        </div>
    );
};

export default MyClass;