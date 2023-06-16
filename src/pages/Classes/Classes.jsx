import Swal from "sweetalert2";
import Loader from "../../components/Loader";
import useAdmin from "../../hooks/useAdmin";
import useClass from "../../hooks/useClass";
import useInstructor from "../../hooks/useInstructor";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSelectedClass from "../../hooks/useSelectedClass";


const Classes = () => {

    const { user } = useContext(AuthContext);
    const { allClasses, isLoading } = useClass();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [ , refetch] = useSelectedClass();

    const approvedClasses = allClasses.filter(eachClass => eachClass.status === 'approved');


    const handleSelectClass = (item) => {
        if (!user) {
            Swal.fire(
                "Select this?",
                'You have to login first!',
                'question'
            )
            navigate('/login')
        }

        if (user && user?.email) {
            const { _id, email, className, image, instructorName, price, seats, enrolled } = item;
            const selectedClass = { classId: _id, email: user.email, instructorEmail: email, className, image, instructorName, price, seats, enrolled, payment: 'pending' }
            axiosSecure.post('/selected-class', selectedClass)
                .then(data => {
                    if (data.data.insertedId) {
                        refetch();
                        setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, _id]);
                        toast.success('Class selected successfully')
                    }
                })

        }

    }


    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h3 className="my-6">
                <span className="text-4xl font-bold">Our Classes</span>
                <span className="ms-1 text-xl">{`(all)`}</span>
            </h3>
            <div className="my-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    approvedClasses.map(item =>

                        <div key={item._id} className="mx-auto w-[330px] bg-base-100 shadow-xl">
                            <figure><img className="h-52 w-full" src={item.image} alt="Photo" /></figure>
                            <div className={item.seats === 0 ? "card-body bg-red-200" : "card-body"}>
                                <h2 className="card-title">{item.className}</h2>
                                <h2>Instructor: {item.instructorName}</h2>
                                <p>Price : <span className="text-orange-500 font-bold">${item.price}</span></p>
                                <p>Available Seats : {item.seats}</p>
                                <button
                                    onClick={() => handleSelectClass(item)}
                                    disabled={isAdmin || isInstructor || item.seats === 0 || disabledButtons.includes(item._id)}
                                    className="btn mt-4 border-none rounded-none hover:bg-orange-500 normal-case text-white bg-orange-500 text-lg tracking-wider"
                                >{disabledButtons.includes(item._id) ? "Selected" : "Select Now"}</button>
                            </div>
                        </div>)
                }
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default Classes;




