import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import useClass from "../../../hooks/useClass";
import Loader from "../../../components/Loader";


const ManageClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const [classItem, setClassItem] = useState({});

    // const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    //     const res = await axiosSecure.get('/classes');
    //     return res.data;
    // })

    const [classes, refetch, isLoading] = useClass();

    const handleStatus = (item, status) => {
        axiosSecure.patch(`/classes/status/${item._id}`, { status })
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Class approved ${status}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleFeedback = event => {
        const feedbackText = event.target.feedback.value;

        axiosSecure.patch(`/classes/feedback/${classItem._id}`, { feedbackText })
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Feedback sent successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        event.target.reset();
    }

    if(isLoading){
        return <Loader></Loader>
    }


    return (
        <div className=" h-full px-6 py-10">
            <h3 className="mb-6 font-extrabold text-3xl text-center text-orange-500">Manage Class</h3>
            <div className="mb-16">
                <h3 className="text-2xl font-bold ms-4 mb-5">Total Class: {classes.length}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        classes.map(item =>

                            <div key={item._id} className="w-80 bg-base-100 shadow-xl">
                                <figure><img className="h-48 w-full" src={item.image} alt="Photo" /></figure>
                                <div className="card-body p-6">
                                    <h2 className="card-title">{item.className}</h2>
                                    <h2>Instructor: {item.instructorName}</h2>
                                    <p>Email: {item.email}</p>
                                    <p>Price : ${item.price}</p>
                                    <p>Seats : {item.seats}</p>
                                    <div className="flex justify-between">
                                        <p>Status : <span className="font-bold">{item.status}</span></p>
                                        <button
                                            onClick={() => handleStatus(item, 'approved')}
                                            disabled={item.status !== 'pending'}
                                            className="btn btn-sm border bg-white border-orange-500 normal-case">Approve</button>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <button
                                            onClick={() => handleStatus(item, 'denied')}
                                            disabled={item.status !== 'pending'}
                                            className="btn w-32 rounded-none border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm">Deny</button>

                                        <button
                                            disabled={item.status !== 'denied'}
                                            className="btn rounded-none w-32 border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm text-base"
                                            onClick={() => {
                                                window.my_modal_5.showModal()
                                                setClassItem(item)
                                            }}>Feedback</button>

                                    </div>
                                </div>
                            </div> )
                    }
                </div>

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <form onSubmit={handleFeedback} method="dialog" className="modal-box">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Write your feedback about the class</span>
                            </label>
                            <textarea name="feedback" className="textarea textarea-bordered h-24" placeholder="Write feedback"></textarea>
                        </div>
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button type="submit"
                                className="btn border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm text-base">Send Feedback</button>
                        </div>
                    </form>
                </dialog>

            </div>
        </div>
    );
};

export default ManageClass;