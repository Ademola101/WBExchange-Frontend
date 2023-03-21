import axios from "axios"
import { BASE_URL } from "../constant"

type blockUserType = {
    id: string,
    status: string,
}

interface IToken {
    token: string | null
}

const token = JSON.parse(localStorage.getItem('wb-admin-token') as string)


export const suspendUser = async (data: blockUserType) => {
    
    try {
        const response = await axios.post(`${BASE_URL}/api/blockuser`, data, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data
    }
    catch (err) {
        //@ts-expect-error
        return err.response.data
    }
}