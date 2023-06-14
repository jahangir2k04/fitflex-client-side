

const ClassCard = ({ item, handleStatus }) => {



    return (
        <div>
            <div className="w-80 bg-base-100 shadow-xl">
                <figure><img className="h-48 w-full" src={item.image} alt="Shoes" /></figure>
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
                            disabled={item.status === 'approved' || item.status === 'denied'}
                            className="btn btn-sm border bg-white border-orange-500 normal-case">Approve</button>
                    </div>
                    <div className="flex justify-between mt-2">
                        <button
                            onClick={() => handleStatus(item, 'denied')}
                            disabled={item.status === 'approved' || item.status === 'denied'}
                            className="btn w-32 border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm">Deny</button>

                        <button className="btn w-32 border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm text-base"
                            onClick={() => window.my_modal_5.showModal()}>Feedback</button>

                    </div>
                </div>
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base">Write your feedback about the class</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button

                            className="btn border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm text-base">Send Feedback</button>
                    </div>
                </form>
            </dialog>

        </div>
    );
};

export default ClassCard;