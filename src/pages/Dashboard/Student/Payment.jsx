import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { useParams } from "react-router-dom";


// TODO : provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

    const [selectedClasses] = useSelectedClass();
    const { id } = useParams();
    const selectedClass = selectedClasses.find(cls => cls._id === id);

    return (
        <div className="bg-base-200 h-full px-20 py-10">
            <h3 className="mb-10 font-extrabold text-3xl text-center text-orange-500">Please process payment!</h3>
            <div className="bg-white p-10 mb-16">

                <Elements stripe={stripePromise}>
                    <CheckoutForm selectedClass={selectedClass}></CheckoutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;