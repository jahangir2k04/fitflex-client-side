import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSocialLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { image: loggedUser?.photoURL, name: loggedUser?.displayName, email: loggedUser.email, role: 'student' }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, {replace: true})
                    })
            })
    }

    return (
        <div>
            <div className="divider w-4/5 mx-auto text-lg">Or sign in with</div>
            <div className="max-w-sm card-body text-center px-0 pt-2">
                <button onClick={handleSocialLogin} className="text-xl font-bold py-2 rounded-lg bg-orange-500 text-white"> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;