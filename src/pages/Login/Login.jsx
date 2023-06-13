import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import bgImg from '../../../public/bgImg.png'
import SocialLogin from '../../components/SocialLogin';
import { useForm } from 'react-hook-form';


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }

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
                    <h3 className='text-5xl font-bold text-center text-orange-500'>Please Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body px-0 pb-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-base">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" name="email" placeholder="enter your email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600 mt-1'>* Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" name="password" placeholder="enter your password" className="input input-bordered" />
                            {errors.password && <span className='text-red-600'>* Password is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-500 text-white tracking-wider text-xl normal-case" type="submit" value="Login" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center'><span>New Here? </span> <Link to="/signup" className='font-bold text-orange-500'>Create An Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;