import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import { AiFillHome } from 'react-icons/ai'
import { FaUsers, FaCheckCircle, FaPlusCircle, FaBookReader, FaBook } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";


const Dashboard = () => {

    const isAdmin = true;
    const isInstructor = false;

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer lg:drawer-open max-w-7xl mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 h-full bg-red-100 text-xl ">
                        {/* Sidebar content here */}

                        {isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/admin-home"><AiFillHome />Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/manage-user"><FaUsers />Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/manage-class"><FiMenu />Manage Classes</NavLink></li>
                            </> :

                            isInstructor ?
                                <>
                                    <li><NavLink to="/dashboard/instructor-home"><AiFillHome />Instructor Home</NavLink></li>
                                    <li><NavLink to="/dashboard/my-class"><FaBookReader />My Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/add-class"><FaPlusCircle />Add Class</NavLink></li>
                                </> :
                                <>
                                    <li><NavLink to="/dashboard/student-home"><AiFillHome />Student Home</NavLink></li>
                                    <li><NavLink to="/dashboard/selected-class"><FaBook />Selected Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolled-class"><FaCheckCircle />Enrolled Classes</NavLink></li>
                                </>

                        }

                    </ul>

                </div>
            </div>

        </div >
    );
};

export default Dashboard;