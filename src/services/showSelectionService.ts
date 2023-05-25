import axios from "axios";
import { BASE_URL } from "../constants/baseURL";
const showSelectionApi = () => {
    const response:any = axios.get(`${BASE_URL}api/public/ShowInformation`)
    return response
}

export default showSelectionApi;