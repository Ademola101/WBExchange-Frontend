import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const adminToken = localStorage.getItem('wb-admin-token')
        const userToken = localStorage.getItem('wb-user-token')
        // if(token) {
        //     setIsLoggedIn(true)
        //     return
        // }
        // setIsLoggedIn(false)
        if(!adminToken || adminToken === undefined) {
            setIsLoggedIn(false)
            return navigate('/')
        }
        else if(!userToken || userToken === undefined) {
            setIsLoggedIn(false)
            return navigate('/')
        }
        setIsLoggedIn(true)
    }, [isLoggedIn])

    return {
        isLoggedIn,
        setIsLoggedIn
    }
}
