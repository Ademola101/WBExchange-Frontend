import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from './pages/Login'
// import Welcome from './components/welcome/Welcome'
// import UserDashboardRoutes from './pages/UserDashboardRoutes'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='login' element={<Login />} /> */}
                {/* <Route path='user/*' element={<UserDashboardRoutes />} /> */}
                {/* <Route path='*' element={<p>not found</p>} /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes