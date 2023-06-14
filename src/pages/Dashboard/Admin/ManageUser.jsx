import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageUser = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    })

    const handleMakeAdmin = (user, role) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({role: role})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is made an ${role}!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="bg-base-200 h-full px-10 py-10">
            <h3 className="mb-6 font-extrabold text-3xl text-center text-orange-500">Manage Users</h3>
            <div className="bg-white p-10 mb-16">
                <h3 className="text-2xl font-bold mb-5">Total Users: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full text-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="bg-orange-200 text-lg">#</th>
                                <th className="bg-orange-200 text-lg">Name</th>
                                <th className="bg-orange-200 text-lg">Email</th>
                                <th className="bg-orange-200 text-lg">Role</th>
                                <th className="bg-orange-200 text-lg">Action</th>
                                <th className="bg-orange-200 text-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button onClick={() => handleMakeAdmin(user, "admin")}
                                            disabled={user?.role === 'admin'}
                                            className="btn border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm">
                                                Make Admin
                                            </button>
                                        </td>
                                        <td>
                                            <button 
                                            onClick={() => handleMakeAdmin(user, "instructor")}
                                            disabled={user?.role === 'instructor'}
                                            className="btn border-none hover:bg-orange-500 normal-case text-white bg-orange-500 btn-sm">
                                                Make Instructor
                                            </button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;