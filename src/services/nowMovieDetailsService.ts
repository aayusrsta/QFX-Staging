import axios from "axios";
import { BASE_URL } from "../constants/baseURL";
const movieDetails = (eventID:string) => {
    const response:any = axios.get(`${BASE_URL}api/public/Event?eventId=${eventID}`)
    return response
}

export default movieDetails;