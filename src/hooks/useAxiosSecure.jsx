import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'https://b7a12-summer-camp-server-side-jahangir2k04.vercel.app',
});

const useAxiosSecure = () => {

    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('fitflex-access-token');
            if (token) {
              config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
          });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/');
                }
                return Promise.reject(error);
            }
        );

    }, [logOut, navigate]);

    return [axiosSecure];

};

export default useAxiosSecure;