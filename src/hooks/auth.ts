import { useEffect, useState } from "react"

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('wb-admin-token')
        if(token) {
            setIsLoggedIn(true)
            return
        }
        setIsLoggedIn(false)
    })

    return {
        isLoggedIn,
        setIsLoggedIn
    }
}
