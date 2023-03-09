import axios from 'axios'
import { BASE_URL } from '../constant'

type newTransactions = {
    amount: string
    amountCoin: string
}

interface IToken {
    token: string | null
}

const token = JSON.parse(localStorage.getItem('wb-admin-token') as string)

export const addNewTransactions = async(data: newTransactions) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/transaction/add`, data, {
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