import axios from "axios"
import { BASE_URL } from "../constant"

interface IToken {
    token: string | null
}

const token: IToken = JSON.parse(localStorage.getItem('wb-admin-token') as string)


export const getQuery = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/api/getQuery`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data
    }
    catch(err) {
        //@ts-expect-error
        return err.response.data
    }
}