import axios from "axios";
import { BASE_URL } from "../constant";

interface IToken {
    token: string | null
}

const token: IToken = JSON.parse(localStorage.getItem('wb-token') as string)

console.log(token)
export const getTransactions = async () => {
    const response = await axios.get(`${BASE_URL}/api/alltransaction`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    return response.data
}