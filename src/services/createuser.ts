import axios from 'axios'
import { BASE_URL } from '../constant'

type newUser = {
    name: string
    email: string
    password: string
    password_confirmation: string
    role: string
}

export const createUser = async (data: newUser) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/login`, data)
        return response.data
    }
    catch(error) {
        //@ts-expect-error
        return error.response.data
    }
}