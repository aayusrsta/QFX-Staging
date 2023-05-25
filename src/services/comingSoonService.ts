import axios from "axios";
import { BASE_URL } from "../constants/baseURL";
const comingSoonApi = () => {
    const response:any = axios.get(`${BASE_URL}api/public/ComingSoon`)
    return response
}

export default comingSoonApi;