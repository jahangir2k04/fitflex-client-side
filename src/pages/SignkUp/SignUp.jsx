import { Player } from '@lottiefiles/react-lottie-player';
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../../public/bgImg.png'
import SocialLogin from '../../components/SocialLogin';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useContext } from 'react';


const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const navigate = useNavigate();

    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('image', data.photo[0]);
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse) {
                    const imgURL = imgResponse.data.display_url;
                    createUser(data.email, data.password)
                        .then(() => {
                            updateUserProfile(data.name, imgURL)
                                .then(() => {
                                    const saveUser = { name: data.name, email: data.email, role: 'student' }
                                    fetch('http://localhost:5000/users', {
                                        method: 'POST',
                                        headers: {
                                            "content-type": "application/json"
                                        },
                                        body: JSON.stringify(saveUser)
                                    })
                                        .then(res => res.json())
                                        .then(() => {
                                            Swal.fire(
                                                'Good job!',
                                                'Account created successfully!',
                                                'success'
                                            )
                                            reset();
                                            navigate('/');
                                        })
                                })
                                .catch(() => { })
                        })
                        .catch(() => { })
                }
            })

    }

    const password = watch('password');

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${bgImg}")` }}>
            <div className="hero-content min-h-full flex-col lg:flex-row-reverse md:gap-12 shadow-2xl max-w-7xl my-6">
                <div className="w-full md:w-1/2 text-center lg:text-left">
                    <Player
                        autoplay
                        loop
                        src="https://assets7.lottiefiles.com/packages/lf20_Advb2R.json"
                        style={{ height: '100%' }}
                    >
                    </Player>
                </div>
                <div className="card w-full md:w-1/2 md:max-w-sm">
                    <h3 className='text-5xl font-bold text-center text-orange-500'>Please Sign Up</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body px-0 pb-2">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="type name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600 mt-1'>* Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="type email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600 mt-1'>* Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Password</span>
                            </label>
                            <div className='input-group'>
                                <input {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/
                                    })}
                                    type="password" placeholder="type password" className="input input-bordered w-full" />
                            </div>

                            {errors.password?.type === 'required' && <span className='text-red-600'>* Password is required</span>}

                            {errors.password?.type === 'minLength' && <span className='text-red-600'>* Password must be 6 characters</span>}

                            {errors.password?.type === 'pattern' && <span className='text-red-600'>* Password must have one uppercase letter and one special character</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Confirm Password</span>
                            </label>
                            <div className='input-group'>
                                <input {...register("confirm", {
                                    required: true,
                                    validate: (value) => value === password || "Password do not match"
                                })}
                                    type="password"
                                    placeholder="type confirm password" className="input input-bordered w-full" />
                            </div>
                            {errors.confirm && <span className='text-red-600'>* Password do not match</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Photo URL</span>
                            </label>
                            <input  {...register("photo", { required: true })}
                                type="file" className="file-input file-input-bordered w-full max-w-sm" />
                            {errors.photo && <span className='text-red-600 mt-1'>* Photo is required</span>}
                        </div>

                        <div className="form-control mt-8">
                            <input className="btn w-full bg-orange-500 hover:bg-orange-500 text-white tracking-wider text-xl normal-case" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center'><span>Already Have An Account? </span> <Link to="/login" className='font-extrabold text-xl text-orange-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;