import React from 'react';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useContext } from 'react';
import Swal from 'sweetalert2';
const imageHosting = import.meta.env.VITE_image_upload_token;

const UpdateClass = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiousSecure();
    const { user } = useContext(AuthContext)
    const { data: instructorupdateclasses = [], refetch } = useQuery(['instructorupdateclasses'], async () => {
        const res = await axiosSecure.get(`allclasses/${id}`)
        return res.data;
    })


    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const { available_seats, price, class_name, image } = data;
        const updatedData = {
            available_seats, price, class_name, image
        }
        fetch(`https://art-and-ink-server-side.vercel.app/instructorclasses/${instructorupdateclasses._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Update the class!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div>
            <div className="text-center my-5">
                <h1 className='text-4xl font-bold  mx-auto'> Update Class</h1>
                <hr className='w-56 bg-blue-950 h-1 mx-auto' />
            </div>
            <div className="h-screen bg-base-200">
                <div className="w-[90%] mx-auto ">
                    <div className="card w-full h-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-3">
                                    <div className='lg:flex items-center justify-center space-x-2'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Class Name</span>
                                            </label>
                                            <input type="text" placeholder="Class Name" defaultValue={instructorupdateclasses.class_name} className="input input-bordered lg:w-[500px] rounded-2xl" {...register("class_name", { required: true, maxLength: 120 })}
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Instructor Name</span>
                                            </label>
                                            <input type="text" value={user.displayName} className="input input-bordered rounded-2xl lg:w-[500px]" {...register("instructor_name", { required: true })}
                                            />
                                        </div>
                                    </div>
                                    <div className="lg:flex space-x-4  lg:ml-20 items-center">
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Add class Image</span>
                                            </label>
                                            <input type="text" 
                                            placeholder='PhotoUrl'
                                             className="input input-bordered rounded-2xl lg:w-[500px]" {...register("image ", { required: true })}

                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="Class Name" value={user.email} className="input input-bordered rounded-2xl" {...register("email", { required: true })}
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Available Seats</span>
                                            </label>
                                            <input type="number" placeholder="Available Seats" defaultValue={instructorupdateclasses.available_seats} className="input input-bordered rounded-2xl" {...register("available_seats", { required: true })}
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price($)</span>
                                            </label>
                                            <input type="number"placeholder="Price" defaultValue={instructorupdateclasses.price} className="input input-bordered rounded-2xl" {...register("price", { required: true })}
                                            />
                                        </div>
                                    </div>

                                    <div className="text-center pt-6">
                                        <input className="py-4 px-6 rounded-2xl bg-sky-800 text-white text-xl font-bold" type="submit" value={'Update'} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateClass;