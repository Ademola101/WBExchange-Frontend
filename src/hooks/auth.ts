// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useQueryClient } from "react-query";
// import { getTransactions } from "../services/transactions";
// import { getUserTransactions } from "../services/usertransaction";

// type DashboardType = 'admin' | 'user'

// type AuthHookReturn = {
//     isLoggedIn: boolean,
//     setIsLoggedIn: (isLoggedIn: boolean) => void
// }

// export const useAuth = (dashboardType: DashboardType): AuthHookReturn => {
//     const navigate = useNavigate()
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const queryClient = useQueryClient()

//     async function login() {
//         let token: string | null = null
//         if (dashboardType === 'admin') {
//             token = localStorage.getItem('wb-admin-token')
//         } else if (dashboardType === 'user') {
//             token = localStorage.getItem('wb-user-token')
//         }
//         if(!token) {
//             setIsLoggedIn(false)
//             navigate('/')
//         } else {
//             setIsLoggedIn(true)
//             const fetchData = dashboardType === 'admin' ? getTransactions : getUserTransactions;
//             await queryClient.prefetchQuery('dashboardData', fetchData)
//         }
//     }

//     return {
//         isLoggedIn,
//         setIsLoggedIn: (isLoggedIn: boolean) => {
//             setIsLoggedIn(isLoggedIn)
//             if (isLoggedIn) {
//                 login()
//             }
//         },
//     }
// }














































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


































// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

// type DashboardType = 'admin' | 'user'

// type AuthHookReturn = {
//     isLoggedIn: boolean,
//     setIsLoggedIn: (isLoggedIn: boolean) => void,
//     isSignedOut: boolean,
//     signOut: () => void
// }

// export const useAuth = (dashboardType: DashboardType): AuthHookReturn => {
//     const navigate = useNavigate()
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const [isSignedOut, setIsSignedOut] = useState(false)

//     const signOut = () => {
//         setIsSignedOut(true)
//         setIsLoggedIn(false)
//         // Clear the token from local storage
//         localStorage.removeItem(`wb-${dashboardType}-token`)
//         // Redirect to the login page
//         navigate('/')
//       }

//     useEffect(() => {
//         const token = localStorage.getItem(`wb-${dashboardType}-token`)
//         if(!token && !isSignedOut) {
//             setIsLoggedIn(false)
//             navigate('/')
//         } else {
//             setIsLoggedIn(true)
//         }
//     }, [dashboardType, navigate, isSignedOut])

//     return {
//         isLoggedIn,
//         setIsLoggedIn,
//         isSignedOut,
//         signOut
//     }
// }



































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
