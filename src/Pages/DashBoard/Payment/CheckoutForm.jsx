import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import './CheckoutForm.css'


const CheckoutForm = ({ singleClassPrice,enrollclass,refetch}) => {
    const stripe = useStripe();
    const { user } = useContext(AuthContext);
    const elements = useElements();
    const [axiosSecure] = useAxiousSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    console.log(enrollclass)
    useEffect(() => {
        if (singleClassPrice> 0) {
            axiosSecure.post('/create-payment-intent', { singleClassPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [singleClassPrice, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error ,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                name: user?.displayName,
                transactionId:paymentIntent.id,
                price:singleClassPrice,
                quantity:enrollclass.length,
                className:enrollclass.class_name,
                classId:enrollclass._id
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        fetch(`https://art-and-ink-server-side.vercel.app/allclasses/${enrollclass.classId}`,{
                            method:'PUT',
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if(data.result.modifiedCount){
                                refetch()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: `Display Confirm`,
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }
                        })
                    }
                })
        }


    }
    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
                <div className='text-center mt-5'>
                <button className="btn bg-red-500" type="submit" disabled={!stripe || !clientSecret || processing} >
                    Pay
                </button>
                </div>
            </form>
            {cardError && <p className="text-red-900 ml-8  font-extralight">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;