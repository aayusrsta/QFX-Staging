import axios from "axios";
import { BASE_URL } from "../constants/baseURL";
export const GET = async(url:any) => {
    const BaseUrl=`${BASE_URL}${url}`

    const response= await axios.get(BaseUrl)
    return response
}
