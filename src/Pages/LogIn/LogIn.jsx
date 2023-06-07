import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";


const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-0 ">
                    <div className="card w-full lg:w-[350px] lg:h-[433px]  rounded-none bg-gradient-to-r from-red-500 to-rose-600 text-white flex flex-col justify-center items-center space-y-4 shadow-2xl p-10 lg:p-0">
                        <h2 className="card-title text-3xl font-bold">Welcome To Login!</h2>
                        <p>Do not have an account?</p>
                        <Link to={'/registration/signup'}><button className="btn border-t-stone-400 rounded-2xl">Sign Up</button></Link>
                    </div>
                    <div className="card w-full lg:w-[350px] lg:h-[433px] max-w-sm bg-base-100 rounded-none space-y-4 shadow-2xl">
                        <div className="card-body">
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-bold">Login now!</h1>
                                <div className="flex justify-around gap-2 items-center">
                                    <p><FaGoogle></FaGoogle></p>
                                    <p><FaGithub></FaGithub></p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Email" className="input input-bordered rounded-2xl" {...register("email", { required: true })}
                                            aria-invalid={errors.email ? "true" : "false"} />
                                        {errors.email?.type === 'required' && <p role="alert" className="mt-3 text-red-800 font-bold">Email is required</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="flex justify-between items-center gap-3 relative">
                                            <div>
                                                <input type={passwordType} onChange={handlePasswordChange} defaultValue={passwordInput} placeholder="Password" className="input input-bordered rounded-2xl w-[290px]" {...register("password", { required: true })}
                                                    aria-invalid={errors.password ? "true" : "false"} />
                                                {errors.password?.type === 'required' && <p role="alert" className="mt-3 mb-3 text-red-800 font-bold">Password is required</p>}
                                            </div>
                                            <button className="btn btn-xs absolute right-4 lg:right-1 top-3" onClick={togglePassword}>{passwordType === "password" ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                                        </div>
                                    </div>
                                    <div className="text-center pt-6">
                                        <input className="w-[300px] bg-gradient-to-r from-red-500 to-rose-600 py-3 px-5 rounded-2xl text-white text-xl" type="submit" value={'LogIn'} />
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

export default LogIn;