import React, { useContext } from 'react';
import UseSelectClasses from '../../../Hooks/UseSelectClasses';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const MyClasses = () => {
    const {user}=useContext(AuthContext)
    const [selectClasses, refetch] = UseSelectClasses();
    const total = selectClasses.reduce((sum, item) => item.available_seats + sum, 0);
    console.log(selectClasses)
    const handleDelete=(classes)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-and-ink-server-side.vercel.app/selectclasses/${classes._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {selectClasses.length}</h3>
                <h3 className="text-3xl">Total Student: {total}</h3>
            </div>
            <div className="text-center  my-10">
                <h1 className='text-4xl font-bold  mx-auto'> {user.displayName} Selected Classes</h1>
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
                                <th>Available Students</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl bg-stone-200 my-10">
                            {selectClasses.map((classes, index) =>
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
                                    <td className='text-center'>
                                        {classes.price}
                                    </td>

                                    <td>
                                        <button onClick={() => handleDelete(classes)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/payment/${classes._id}`}>
                                            <button className="btn btn-warning btn-sm">PAY</button>
                                        </Link>
                                    </td>


                                </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyClasses;