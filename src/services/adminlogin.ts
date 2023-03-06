import axios from 'axios'

type admin = {
    email: string
    password: string
}

const BASE_URL = process.env.REACT_APP_BASE_URL
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