import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import ChangePassword from "./ChangePassword"
import TransactionHistory from "./TransactionHistory"
import UserDashboard from "./UserDashboard"

const UserDashboardRoutes = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="user-routes">
            <Sidebar isActive={isActive} />
            <Routes>
                <Route path="" element={<UserDashboard />} />
                <Route path="transaction-history" element={<TransactionHistory />} />
                <Route path="change-password" element={<ChangePassword />} />
            </Routes>
        </div>
    )
}
export default UserDashboardRoutes