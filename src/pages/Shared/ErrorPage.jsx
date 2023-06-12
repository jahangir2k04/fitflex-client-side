import { Link, useRouteError } from "react-router-dom";
import Button from "../../components/Button";


const ErrorPage = () => {

    const { error } = useRouteError();

    return (
        <div className="h-screen grid justify-center items-center">
            <div className="text-center ">
                <img className="h-60 md:h-80 mx-auto" src="/public/error-img.gif" alt="" />
                <p className="text-xl md:3xl mb-5">{error?.message}</p>
                <Link to="/">
                    <Button text="Back to Home" style="text-2xl px-10"></Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;