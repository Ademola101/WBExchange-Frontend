import axios from "axios";
import { BASE_URL } from "../constant";

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

interface IToken {
    token: string | null
}

const token: IToken = JSON.parse(localStorage.getItem('wb-admin-token') as string)

// console.log(token)
export const getTransactions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/alltransaction`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data.result
    }
    catch(err) {
        //@ts-expect-error
        return err.response.data
    }
}