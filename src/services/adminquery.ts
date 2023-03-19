import axios from "axios"
import { BASE_URL } from "../constant"

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