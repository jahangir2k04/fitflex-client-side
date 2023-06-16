import moment from "moment/moment";
import useEnrolledClass from "../../../hooks/useEnrolledClass";


const PaymentHistory = () => {

    const [enrolledClasses] = useEnrolledClass();

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
                                <th className="bg-red-200 text-lg">Class Name</th>
                                <th className="bg-red-200 text-lg">Price</th>
                                <th className="bg-red-200 text-lg">Payment</th>
                                <th className="bg-red-200 text-lg">Transaction Id</th>
                                <th className="bg-red-200 text-lg">Enroll Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enrolledClasses.map((enrolledClass, index) =>
                                    <tr key={enrolledClass._id} className="hover">
                                        <td>{index + 1}</td>
                                        <td>{enrolledClass.className}</td>
                                        <td>${enrolledClass.price}</td>
                                        <td>{enrolledClass.payment}</td>
                                        <td>{enrolledClass.transactionId}</td>
                                        <td>{moment(enrolledClass.date).format('LLL')}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;