import axios from 'axios';
import { $host } from "./index";


export const createGuide = async(guide, userId) => {
    console.log(userId)
    const {data} = await axios .post(`${$host}api/guide/createguide/${userId}`, guide, {
        headers: {
          "content-type": "mulpipart/form-data",
        },
    })

    return data
}

export const getAllGuid = async() => {
    const {data} = await axios .get(`${$host}api/guide/getguide`)
    return data
}


