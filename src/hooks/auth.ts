import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

type DashboardType = 'admin' | 'user'

type AuthHookReturn = {
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
export const useAuth = (dashboardType: DashboardType): AuthHookReturn => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        let token: string | null = null
        if (dashboardType === 'admin') {
            token = localStorage.getItem('wb-admin-token')
        } else if (dashboardType === 'user') {
            token = localStorage.getItem('wb-user-token')
        }
        if(!token) {
            setIsLoggedIn(false)
            navigate('/')
        } else {
            setIsLoggedIn(true)
        }
    }, [dashboardType, navigate])

    return {
        isLoggedIn,
        setIsLoggedIn
    }
}



































// export const useAuth = () => {
//     const navigate = useNavigate()
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     useEffect(() => {
//         const adminToken = localStorage.getItem('wb-admin-token')
//         const userToken = localStorage.getItem('wb-user-token')
        
//         if(!adminToken || adminToken === undefined) {
//             setIsLoggedIn(false)
//             return navigate('/')
//         }
//         else if(!userToken || userToken === undefined) {
//             setIsLoggedIn(false)
//             return navigate('/')
//         }
//         setIsLoggedIn(true)
//     }, [isLoggedIn])

//     return {
//         isLoggedIn,
//         setIsLoggedIn
//     }
// }
