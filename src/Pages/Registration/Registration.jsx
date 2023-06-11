import { FaGithub, FaGoogle, FaEye, FaEyeSlash, } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const Registration = () => {
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [error, setError] = useState('');
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photoURL: loggedInUser.photoURL }
                fetch('https://art-and-ink-server-side.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
    }
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
    const handleConfirmPasswordChange = (e) => {
        setConfirmPasswordInput(e.target.value);
    }
    const toggleConfirmPassword = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }
    const onSubmit = (data) => {
        console.log(data)
        if (data.password === data.confirmpassword) {
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUserProfile(loggedUser, data.name, data.photoURL
                        )
                        .then(() => {
                            const saveUser = {
                                name: data.name, email: data.email, photoURL: data.photourl
                            }
                            console.log(saveUser)
                            fetch('https://art-and-ink-server-side.vercel.app/users',{
                                method:'POST',
                                headers:{
                                    'content-type':'application/json'
                                },
                                body:JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        reset();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User created successfully.',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        navigate('/');
                                    }
                                })
                        })
                        .catch(error => console.log(error))
                })
                .catch(error => console.log(error))
        }
        else {
            setError('PassWord and Confirm Password are not matched')
            return
        }

    };


    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-0 ">
                    <div className="card w-full lg:w-[350px] lg:lg:h-[900px]  rounded-none bg-gradient-to-r from-red-500 to-rose-600 text-white flex flex-col justify-center items-center space-y-4 shadow-2xl p-10 lg:p-0">
                        <h2 className="card-title text-3xl font-bold">Welcome To SignUp!</h2>
                        <p>Do you have an account?</p>
                        <Link to={'/registration/login'}><button className="btn border-t-stone-400 rounded-2xl">LogIn</button></Link>
                    </div>
                    <div className="card w-full lg:w-[500px] lg:h-[900px] max-w-sm bg-base-100 rounded-none space-y-4 shadow-2xl">
                        <div className="card-body">
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-bold">SignUp now!</h1>
                                <div className="flex justify-around gap-2 items-center">
                                    <button onClick={handleGoogleSignIn} className="btn btn-outline">
                                        <FaGoogle></FaGoogle>
                                    </button>
                                    <p><FaGithub></FaGithub></p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" className="input input-bordered rounded-2xl" {...register("name", { required: true })}
                                            aria-invalid={errors.email ? "true" : "false"} />
                                        {errors.name?.type === 'required' && <p role="alert" className="mt-3 text-red-800 font-bold">Name is required</p>}
                                    </div>
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
                                                <input type={passwordType} onChange={handlePasswordChange} defaultValue={passwordInput} placeholder="Password" className="input input-bordered rounded-2xl w-[320px]" {...register("password", {
                                                    required: true, minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                })}
                                                    aria-invalid={errors.password ? "true" : "false"} />
                                                {errors.password?.type === 'required' && <p className="text-red-600 font-bold">Password is required</p>}
                                                {errors.password?.type === 'minLength' && <p className="text-red-600 font-bold">Password must be 6 characters</p>}
                                                {errors.password?.type === 'maxLength' && <p className="text-red-600 font-bold">Password must be less than 20 characters</p>}
                                                {errors.password?.type === 'pattern' && <p className="text-red-600 font-bold">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                            </div>
                                            <button className="btn btn-xs absolute right-4 lg:right-3 top-3" onClick={togglePassword}>{passwordType === "password" ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <div className="flex justify-between items-center gap-3 relative">
                                            <div>
                                                <input type={confirmPasswordType} onChange={handleConfirmPasswordChange} defaultValue={confirmPasswordInput} placeholder="Confirm password" className="input input-bordered rounded-2xl w-[320px]" {...register("confirmpassword", { required: true })}
                                                    aria-invalid={errors.password ? "true" : "false"} />
                                                {errors.confirmpassword?.type === 'required' && <p role="alert" className="mt-3 mb-3 text-red-800 font-bold">Confirm Password is required</p>}
                                            </div>
                                            <button className="btn btn-xs absolute right-4 lg:right-3 top-3" onClick={toggleConfirmPassword}>{confirmPasswordType === "password" ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">PhotoURL</span>
                                        </label>
                                        <input type="text" placeholder="PhotoURL" className="input input-bordered rounded-2xl" {...register("photourl", { required: true })}
                                            aria-invalid={errors.email ? "true" : "false"} />
                                        {errors.photourl?.type === 'required' && <p role="alert" className="mt-3 text-red-800 font-bold">PhotoURL is required</p>}
                                    </div>
                                    <div className="text-center pt-6">
                                        <input className="w-[300px] bg-gradient-to-r from-red-500 to-rose-600 py-3 px-5 rounded-2xl text-white text-xl" type="submit" value={'SignUp'} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-red-800 font-bold mt-2">{error}</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;