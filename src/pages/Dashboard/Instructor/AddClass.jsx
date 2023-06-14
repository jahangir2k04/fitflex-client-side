import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";


const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse) {
                    const imgURL = imgResponse.data.display_url;
                    const { className, instructorName, seats, price } = data;
                    const newClass = { className, image: imgURL, instructorName, email: user?.email, seats, price: parseFloat(price), status: 'pending'};
                    console.log(newClass);
                }
            })

        console.log(data);

    }

    return (
        <div>
            <h3 className="my-6 font-extrabold text-3xl text-center text-orange-500">Add A Class</h3>
            <div className="bg-base-200 p-12 mx-16 mb-16">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input
                            {...register("className", { required: true })}
                            type="text" placeholder="Type class name"
                            className="input input-bordered w-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Name*</span>
                            </label>
                            <input
                                {...register("instructorName")}
                                type="text" readOnly
                                defaultValue={user?.displayName}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Email*</span>
                            </label>
                            <input
                                {...register("email")}
                                type="email" readOnly
                                defaultValue={user?.email}
                                className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Available Seat*</span>
                            </label>
                            <input
                                {...register("seats", { required: true })}
                                type="text" placeholder="type available seat"
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number" placeholder="type price"
                                className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="form-control w-full max-w-xs mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Class Image*</span>
                        </label>
                        <input type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="text-center">
                        <input className="btn bg-orange-500 hover:bg-orange-500 text-white py-2 rounded-lg normal-case text-xl font-bold w-60 border-none tracking-wider" type="submit" value="Add Class" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;