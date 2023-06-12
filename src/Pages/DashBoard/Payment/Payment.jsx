import React, { useContext } from 'react';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiousSecure();
    const { user } = useContext(AuthContext)
    const { data: enrollclass = [], refetch } = useQuery(['enrollclass'], async () => {
        const res = await axiosSecure.get(`selectclasses/${id}`)
        return res.data;
    })
    const singleClassPrice=enrollclass.price;
    

    return (
        <div className='h-screen'>
            <h2 className='text-4xl font-semibold text-center mt-5'>Payment</h2>
            <div className='flex flex-col justify-between items-center bg-gray-500 mt-12 mx-20 pt-20 bg-opacity-10 h-[300px]'>
                <Elements stripe={stripePromise} >
                    <CheckoutForm enrollclass={enrollclass}  singleClassPrice={ singleClassPrice} refetch={refetch}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;