import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import Swal from 'sweetalert2';
const imageHosting=import.meta.env.VITE_image_upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiousSecure();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const image_hosting_url=`https://api.imgbb.com/1/upload?key=${imageHosting}`
    const {user}=useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {class_name, instructor_name,email, price,available_seats } = data;
                const newClass={class_name,instructor_name,available_seats:parseInt(available_seats),price:parseFloat(price),status:"pending",image:imgURL,email}
                axiosSecure.post('/allclasses',newClass)
                .then(data => {
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class have been added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

                
            }
        })
    }
    return (
        <div>
            <div className="text-center my-5">
                <h1 className='text-4xl font-bold  mx-auto'> Add a New Class</h1>
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
                                            <input type="text" placeholder="Class Name" className="input input-bordered lg:w-[500px] rounded-2xl" {...register("class_name", { required: true,maxLength: 120  })}
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
                                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })}/>
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
                                            <input type="number" placeholder="Available Seats" className="input input-bordered rounded-2xl" {...register("available_seats", { required: true })}
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price($)</span>
                                            </label>
                                            <input type="number" placeholder="Price" className="input input-bordered rounded-2xl" {...register("price", { required: true })}
                                            />
                                        </div>
                                    </div>

                                    <div className="text-center pt-6">
                                        <input className="py-4 px-6 rounded-2xl bg-sky-800 text-white text-xl font-bold" type="submit" value={'Add'} />
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

export default AddClass;