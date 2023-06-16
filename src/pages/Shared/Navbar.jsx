import { Link, NavLink } from "react-router-dom";
import Button from "../../components/Button";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { FaShoppingCart } from "react-icons/fa";
import useSelectedClass from "../../hooks/useSelectedClass";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [selectedClass] = useSelectedClass();

    const menuItems = <>
        <NavLink className={({ isActive }) => (isActive ? 'my-active' : 'px-4 py-1')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'my-active' : 'px-4 py-1')} to="/instructors">Instructors</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'my-active' : 'px-4 py-1')} to="/classes">Classes</NavLink>
        {user &&
            <NavLink className={({ isActive }) => (isActive ? 'my-active' : 'px-4 py-1')}
                to={isAdmin ?
                    "/dashboard/admin-home" :
                    isInstructor ?
                        "/dashboard/instructor-home" :
                        "/dashboard/student-home"
                }>Dashboard</NavLink>}
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
                    <label className="btn btn-ghost btn-circle me-3">
                        <div className="indicator">
                            <FaShoppingCart className="text-2xl" />
                            <span className="badge badge-sm indicator-item bg-orange-500 py-3 text-sm border-none text-white">+{selectedClass.length || 0}</span>
                        </div>
                    </label>
                    {user ?
                        <div onClick={handleLogOut}>
                            <Button text="Logout" style="font-semibold px-6  text-2xl"></Button>
                        </div>
                        :
                        <Link to="/login">
                            <Button text="Login" style="font-semibold px-6  text-2xl"></Button>
                        </Link>
                    }
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;