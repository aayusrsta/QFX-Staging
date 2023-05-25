import axios from "axios";
import { BASE_URL } from "../constants/baseURL";
const cinemasApi = () => {
    const response:any = axios.get(`${BASE_URL}api/public/Cinemas`)
    return response
}

export default cinemasApi;