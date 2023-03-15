import axios from 'axios'
import { BASE_URL } from '../constant'

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

type admin = {
    email: string
    password: string
}

export const adminlogin = async(data: admin) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/login`, data)
        return response.data
    }
    catch(err) {
        //@ts-expect-error
        return err.response.data
    }
}