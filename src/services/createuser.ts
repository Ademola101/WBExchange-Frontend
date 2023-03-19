import axios from 'axios'
import { BASE_URL } from '../constant'

axios.interceptors.response.use(
    response => {
      // Do something with the response data
      return response;
    },
    error => {
      if (error.response.status === 401) {
        // Handle 401 error
        // Redirect the user to the login page
        window.location.reload()
      }
      return Promise.reject(error);
    }
 );

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