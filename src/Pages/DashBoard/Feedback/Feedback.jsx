import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Feedback = () => {
    const {id}=useParams()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const{feedback}=data;
        fetch(`https://art-and-ink-server-side.vercel.app/allclasses/${id}`,{
            method:'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({feedback})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
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
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-3">
                    <div className='lg:flex items-center justify-center space-x-2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Feedback</span>
                            </label>
                            <input type="text" placeholder=" Feedback" className="input input-bordered lg:w-[800px] lg:h-[300px] rounded-2xl" {...register("feedback", { required: true, maxLength: 300 })}
                            />
                        </div>
                        
                    </div>

                    <div className="text-center pt-6">
                        <input className="py-4 px-6 rounded-2xl bg-sky-800 text-white text-xl font-bold" type="submit" value={'Feedback'} />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Feedback;