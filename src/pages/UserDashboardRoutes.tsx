import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import UserChangePassword from "./UserChangePassword"
import UserTransactionHistory from "./UserTransactionHistory"
import UserDashboard from "./UserDashboard"

const UserDashboardRoutes = () => {
    const [isActive, setIsActive] = useState(true)
    return (
        <div className="user-routes">
            <Sidebar isActive={isActive} />
            <Routes>
                <Route path="" element={<UserDashboard />} />
                <Route path="my-transaction-history" element={<UserTransactionHistory />} />
                <Route path="change-my-password" element={<UserChangePassword />} />
            </Routes>
        </div>
    )
}
export default UserDashboardRoutes