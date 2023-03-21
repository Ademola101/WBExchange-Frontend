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
)

type changeUserPasswordType = {
    password: string
    password_confirmation: string
}

interface IToken {
    token: string | null
}

interface IToken {
    token: string | null
}

const token: IToken = JSON.parse(localStorage.getItem('wb-user-token') as string)

export const changeUserPassword = async(data: changeUserPasswordType) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/changepassword`, data, {
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