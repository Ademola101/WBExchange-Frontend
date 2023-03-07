import axios from "axios"
import { BASE_URL } from "../constant"

type user = {
    email: string
    password: string
}

export const userlogin = async(data: user) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/login`, data)
        return response.data
    }
    catch(err) {
        //@ts-expect-error
        return err.response.data
    }
}