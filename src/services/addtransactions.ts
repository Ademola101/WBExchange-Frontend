import axios from 'axios'
import { BASE_URL } from '../constant'

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

type newTransactions = {
    amount: string
    amountCoin: string
}

interface IToken {
    token: string | null
}

const token = JSON.parse(localStorage.getItem('wb-user-token') as string)

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