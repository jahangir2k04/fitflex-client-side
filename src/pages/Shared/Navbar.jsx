import { Link, NavLink } from "react-router-dom";
import Button from "../../components/Button";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const isAdmin = true;
    const isInstructor = false;
    

    const menuItems = <>
        <NavLink className={({ isActive }) => (isActive ? 'my-active' : 'px-4 py-1')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'my-active' : 'px-4 py-1')} to="/instructors">Instructors</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'my-active' : 'px-4 py-1')} to="/classes">Classes</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'my-active' : 'px-4 py-1')} to={`/dashboard/${isAdmin ? 'admin-home' : isInstructor? 'instructor-home' : 'student-home'}`}>Dashboard</NavLink>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div className="">
            <div className="navbar max-w-7xl mx-auto md:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center gap-0.5 text-3xl font-bold">
                        <img className="w-11 h-11" src="/logo.png" alt="" />
                        <span>FitFlex</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg font-semibold">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div onClick={handleLogOut}>
                            <Button text="Logout" style="font-semibold px-6  text-2xl"></Button>
                        </div>
                        :
                        <Link to="/login">
                            <Button text="Login" style="font-semibold px-6  text-2xl"></Button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;