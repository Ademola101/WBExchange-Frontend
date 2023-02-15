import axios from "axios";

export const getTransactions = async () => {
    const response = await axios.get(`https://giftea.github.io/proj-data/mock.json`)
    return response.data
}