import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDashboardRoutes from './pages/AdminDashboardRoutes'
import Login from './pages/Login'
import UserDashboardRoutes from './pages/UserDashboardRoutes'

const AppRoutes = () => {
    const [dashboard, setDashboard] = useState()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Login />} />
                <Route path='user/*' element={<UserDashboardRoutes />} />
                <Route path='admin/*' element={<AdminDashboardRoutes />} />
                <Route path='*' element={<p>not found</p>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes