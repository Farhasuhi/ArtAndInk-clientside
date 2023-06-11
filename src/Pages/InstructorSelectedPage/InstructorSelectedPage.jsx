import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useAxiousSecure from '../../Hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const InstructorSelectedPage = () => {
    const {user}=useContext(AuthContext);
    const [axiosSecure] = useAxiousSecure();
    const { data: instructorAddClass = [], refetch } = useQuery(['instructorAddClass'], async () => {
        const res = await axiosSecure.get(`allclasses?email=${user?.email}`)
        return res.data;
    })
    return (
        <div>
            <div className="text-center  my-10">
                <h1 className='text-4xl font-bold  mx-auto'> {user.displayName} Added Classes</h1>
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
                                <th>Status</th>
                                <th>Update</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl bg-stone-200 my-10">
                            {instructorAddClass.map((classes, index) =>
                                <tr key={user._id}>
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
                                    <td>
                                        {classes.status}
                                    </td>
                                    <td>
                                        {classes.status}
                                    </td>
                                    <td>
                                        {classes.status}
                                    </td>
                                   
                            
                                </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InstructorSelectedPage;