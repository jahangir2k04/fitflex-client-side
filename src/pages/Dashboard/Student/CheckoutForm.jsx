import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";



const CheckoutForm = ({ selectedClass }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const { user } = useContext(AuthContext);

    const price = parseFloat(selectedClass?.price);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, price]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
        } else {
            setCardError('');
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            const { image, className, instructorName, instructorEmail, classId, price, seats, enrolled } = selectedClass;
            const payment = {
                email: user?.email, image, className, instructorName, instructorEmail, classId, transactionId: paymentIntent.id, price, seats, enrolled, date: new Date(), payment: 'success'
            };

            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res?.data?.insertResult?.insertedId) {
                        Swal.fire(
                            'Good job!',
                            'Payment successfull!',
                            'success'
                        )
                    }
                })

        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center mt-16">
                    <button disabled={!stripe || !clientSecret || processing}
                        className="btn bg-orange-500 hover:bg-orange-500 text-white tracking-widest text-lg w-1/3" type="submit" >
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600 mt-6">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;