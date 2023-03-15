import axios from 'axios'
import { BASE_URL } from '../constant'

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

type newUser = {
    name: string
    email: string
    password: string
    password_confirmation: string
    role: string
}

interface IToken {
    token: string | null
}

const token = JSON.parse(localStorage.getItem('wb-admin-token') as string)

export const createUser = async (data: newUser) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/register`, data, {
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