import { Link, NavLink } from "react-router-dom";
import Button from "../../components/Button";


const Navbar = () => {

    const menuItems = <>
        <NavLink className={({isActive}) => (isActive ? 'active' : 'px-4') } to="/">Home</NavLink>
        <NavLink className={({isActive}) => (isActive ? 'active' : 'px-4') } to="/instructors">Instructors</NavLink>
        <NavLink className={({isActive}) => (isActive ? 'active' : 'px-4') } to="/classes">Classes</NavLink>
        <NavLink className={({isActive}) => (isActive ? 'active' : 'px-4') } to="/dashboard">Dashboard</NavLink>
    </>

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
                    <Button text="Login"></Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;