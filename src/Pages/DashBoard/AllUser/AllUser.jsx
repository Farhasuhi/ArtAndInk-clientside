import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';

const AllUser = () => {
    const [axiosSecure] = useAxiousSecure();
    const { data: allusers = [], refetch } = useQuery(['allusers'], async () => {
        const res = await axiosSecure.get('/allusers')
        return res.data;
    })
    const handleMakeAdmin=(user)=>{
        fetch(`https://art-and-ink-server-side.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor=(user)=>{
        fetch(`https://art-and-ink-server-side.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <div className="text-center  my-10">
                <h1 className='text-4xl font-bold  mx-auto'> All Users of Art & Inks</h1>
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl bg-stone-200 my-10">
                            {allusers.map((user, index) =>
                                <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td >
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photoURL
                                                    } alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td ><p className="bg-slate-400 text-center text-zinc-950 font-semibold">{user.role ==='admin'&&'Admin'||user.role ==='instructor'&&'Instructor'||'Student'}</p></td>
                                    <th>
                                        <div className='flex justify-start items-center'>
                                            <button className="btn bg-blue-500 
                                            text-white
                                             btn-xs" onClick={()=>handleMakeAdmin(user)} disabled={user.role==='admin'}>Admin</button>
                                            <button className="btn bg-yellow-500 text-white btn-xs" onClick={()=>handleMakeInstructor(user)} disabled={user.role==='instructor'}>Instructor</button>
                                        </div>
                                    </th>
                                </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;