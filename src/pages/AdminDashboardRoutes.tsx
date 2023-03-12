import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import AdminSidebar from "../components/AdminSidebar"
import AdminDashboard from "./AdminDashboard"
import AllUsers from "./AllUsers"
import ChangePassword from "./ChangePassword"
import CreateUser from "./CreateUser"
import Report from "./Report"
import Reports from "./Reports"
import TransactionHistory from "./TransactionHistory"

const AdminDashboardRoutes = () => {
    const [isActive, setIsActive] = useState(true)

    return (
        <div className="admin-routes">
            <AdminSidebar isActive={isActive} />
            <Routes>
                <Route path="" element={<AdminDashboard />} />
                <Route path="transaction-history" element={<TransactionHistory />}/>
                <Route path="create-user" element={<CreateUser />} />
                <Route path="all-users" element={<AllUsers />} />
                <Route path="change-password" element={<ChangePassword />} />
                {/* <Route path="report" element={<Report />} /> */}
                <Route path="reports" element={<Reports /> } />
            </Routes>
        </div>
    )
}
export default AdminDashboardRoutes