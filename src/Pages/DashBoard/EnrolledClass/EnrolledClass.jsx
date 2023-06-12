import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';

const EnrolledClass = () => {
    const {user}=useContext(AuthContext);
    const [axiosSecure] = useAxiousSecure();
    const { data: enrollClasses = [], refetch } = useQuery(['enrollClasses'], async () => {
        const res = await axiosSecure.get(`payments?email=${user.email}`)
        return res.data;
    })
    return (
        <div>
            <div className="text-center  my-10">
                <h1 className='text-4xl font-bold  mx-auto'> {user.displayName} Enrolled Classes</h1>
                <hr className='w-56 bg-blue-950 h-1 mx-auto mt-5' />
            </div>
            <div className=''>
                <div className="overflow-x-auto ">
                    <table className="table w-[90%] mx-auto">
                        {/* head */}
                        <thead className=" text-black text-xl py-10 bg-gray-300">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Class Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-xl bg-stone-200 my-10">
                            {enrollClasses.map((classes, index) =>
                                <tr key={classes._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td >
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={classes.image
                                                    } alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{classes.class_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {classes.email}
                                    </td>
                                    <td className='text-center'>
                                        {classes.available_seats}
                                    </td>
                                    <td className='text-start'>
                                        {classes.price}
                                    </td>

                                </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default EnrolledClass;