import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles/login.scss'
import Button from '../components/Button'
import UserLogin from '../components/UserLogin'
import AdminLogin from '../components/AdminLogin'

import logo from '../assets/icons/logo.svg'
import user from '../assets/icons/user.svg'
import admin from '../assets/icons/admin.svg'

const Login = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('user')


    const handleUserLoginClick = () => {
        setActiveTab('user')
        navigate('')
    }
    const handleAdminLoginClick = () => {
        setActiveTab('admin')
    }

    return (
        <div className="login">
            <div className="mobile-login"></div>
            <div className="desktop-login">
                <header>
                    <>
                       <img src={logo} alt="WbExchange Logo" />
                    </>
                    <span>
                        <p>Welcome Back!</p>
                    </span>
                </header>
                <section className='desktop-login-form'>
                    <span>
                        <button
                            className={activeTab === 'user' ? 'active' : ''}
                            onClick={handleUserLoginClick}
                            type="submit"
                        >
                            <img src={user} alt="User sign in icon" />
                            User Sign in
                        </button>
                        <button 
                            className={activeTab === 'admin' ? 'active' : ''}
                            onClick={handleAdminLoginClick}
                            type="submit"
                        >
                            <img src={admin} alt="Admin sign in icon" />
                            Admin Sign in
                        </button>
                    </span>
                    <div>
                        {activeTab === 'user' ? <UserLogin /> : <AdminLogin />}
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Login