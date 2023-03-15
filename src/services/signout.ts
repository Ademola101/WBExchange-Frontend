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

export const signout = async() => {
    try{
        const response = await axios.post(`${BASE_URL}/api/logout`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data
    }
    catch(error) {
        //@ts-expect-error
        return error.response.data
    }
}