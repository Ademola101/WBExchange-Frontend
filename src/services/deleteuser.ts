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

type deleteType = {
    id: string
}

interface IToken {
    token: string | null
}

const token: IToken = JSON.parse(localStorage.getItem('wb-admin-token') as string)

export const deleteUser = async (data: deleteType) => {
    const id  = data
    var resdata = {id:id}
    try {
        const response = await axios.post(`${BASE_URL}/api/deleteuser`, resdata, {
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