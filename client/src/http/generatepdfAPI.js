import axios from 'axios';
import { $host } from "./index";

export const createPdf = async(id) => {
    const {data} = await axios .get(`${$host}api/pdf/generatepdf/${id}`)
    return data
}