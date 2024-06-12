import axios from "axios";
import {useRouter} from 'vue-router';

export default function useAuthentication() {
    const API_BASE_URL = "http://localhost:8000";

    const router = useRouter();

    const loginUser = async (data) => {
        try {
            const response = await axios.post(API_BASE_URL + "/api/public/auth/login", data);
            return response;
        } catch (error) {
            return error.response
        }
    }

    const registerUser = async (data) => {
        try {
            const response = await axios.post(API_BASE_URL + "/api/public/auth/register", data);
            router.push({name:"login.view"});
            return response;
        } catch (error) {
            return error.response
        }
    }

    return {
        loginUser,
        registerUser
    }
}