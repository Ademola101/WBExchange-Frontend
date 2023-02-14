import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import UserDashboardRoutes from './pages/UserDashboardRoutes'
import Welcome from './components/Welcome'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Login />} />
                <Route path='user/*' element={<UserDashboardRoutes />} />
                <Route path='*' element={<p>not found</p>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes