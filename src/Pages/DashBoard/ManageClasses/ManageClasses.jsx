import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Marquee from 'react-fast-marquee';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageClasses = () => {
    const [axiosSecure] = useAxiousSecure()
    const { data: allclasses = [], refetch } = useQuery({
        queryKey: ['allclasses'],
        queryFn: async () => {
            const res = await fetch('https://art-and-ink-server-side.vercel.app/allclasses')
            return res.json();
        }
    })
    

    const handleApprove=(classes)=>{
        fetch(`https://art-and-ink-server-side.vercel.app/allclasses/${classes._id}`,{
            method:'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:"approved"})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `This post approved!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDenied=(classes)=>{
        fetch(`https://art-and-ink-server-side.vercel.app/allclasses/${classes._id}`,{
            method:'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:"denied"})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `This post Denied!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <div>
                <div className="text-center  my-10">
                    <h1 className='text-4xl font-bold  mx-auto'>Manage Classes</h1>
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
                                    <th>Instructor name</th>
                                    <th>Instructor email</th>
                                    <th>Available seats</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-xl bg-stone-200 my-10">
                                {allclasses.map((classes, index) =>
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
                                            {classes.instructor_name}
                                        </td>
                                        <td>
                                            {classes.email}
                                        </td>
                                        <td className='text-center'>
                                            {classes.available_seats}
                                        </td>
                                        <td className='text-start'>
                                            ${classes.price}
                                        </td>
                                        <td className='text-start'>
                                            {classes.status==="approved"&&"approved"||classes.status==="denied"&&"denied"||"panding"}
                                        </td>
                                        <td >
                                            <div>
                                            <button onClick={()=>handleApprove(classes)} className='btn btn-sm bg-green-700 text-white w-[70px]'>Approve</button>
                                            <button onClick={()=>handleDenied(classes)} className='btn btn-sm w-[70px] bg-red-700 text-white'>Deny</button>
                                            <Link to={`/dashboard/feedback/${classes._id}`}><button className='btn btn-sm w-[70px] bg-yellow-700 text-white'>Feedback</button></Link>
                                            </div>
                                        </td>

                                    </tr>)}

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageClasses;