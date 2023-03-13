import './styles/adminsidebar.scss'
import logo from '../assets/icons/logo.svg'
import dashboard from '../assets/icons/dashboard.svg'
import cards from '../assets/icons/cards.svg'
import createUser from '../assets/icons/createUser.svg'
import allUser from '../assets/icons/allUser.svg'
import key from '../assets/icons/key.svg'
import logout from '../assets/icons/logout.svg'
import report from '../assets/icons/report.svg'
import hamburger from '../assets/icons/hamburger.svg'
import Button from './Button'
import { useUser } from '../hooks/user'
import { useAuth } from '../hooks/auth'
import { signout } from '../services/signout'

import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory()
const MySwal = withReactContent(Swal)

interface IAdminSidebarProps {
    isActive: boolean
}

const AdminSidebar = ({isActive}: IAdminSidebarProps) => {
    const navigate = useNavigate()
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState<any | null>(null)
    const [openMenu, setOpenMenu] = useState(false)
    const { name } = useUser()
    const { setIsLoggedIn } = useAuth('admin')

    const handleClick = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        localStorage.removeItem('wb-admin-token')
        localStorage.removeItem('wb-admin-user')
        setIsLoggedIn(false)
        navigate('/')
    }


    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
    
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
      }, [
        useEffect(() => {
          if (screenSize <= 768) {
            setActiveMenu(false);
          } else {
            setActiveMenu(true);
          }
        }, [screenSize]),
    ])


    return (
        <div className={isActive ? 'sidebar__container--active' : 'sidebar__container'}>
        <div className='mobile-admin-sidebar'>
            <nav>
                <button onClick={() => setActiveMenu(!activeMenu)}><img src={hamburger} alt='hamburger icon' /></button>
            </nav>
            {activeMenu && (
                <section className='admin-hamburger-navs'>
                    <header className="admin-sidebar-title">
                        <img src={logo} alt="logo" className="eform-logo"/>
                        <hr />
                    </header>
                    <NavLink to="/admin" className="nav-links" style={({ isActive }) => ({ color: isActive ? "white" : ""})}>
                        <div className="icon-container">
                            <img src={dashboard} alt='dashboard icon'/>
                        </div>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="transaction-history" className="nav-links">
                        <div className="icon-container">
                            <img src={cards} alt='payment icon'/>
                        </div>
                        <span>Transaction History</span>
                    </NavLink>
                    <NavLink to="create-user" className="nav-links">
                        <div className="icon-container">
                            <img src={createUser} alt='payment icon'/>
                        </div>
                        <span>Create User</span>
                    </NavLink>
                    <NavLink to="all-users" className="nav-links">
                        <div className="icon-container">
                            <img src={allUser} alt='payment icon'/>
                        </div>
                        <span>All Users</span>
                    </NavLink>
                    <NavLink to="change-password" className="nav-links">
                        <div className="icon-container">
                            <img src={key} alt='key icon'/>
                        </div>
                        <span>Change Password</span>
                    </NavLink>
                    <NavLink to="report" className="nav-links">
                        <div className="icon-container">
                            <img src={report} alt='key icon'/>
                        </div>
                        <span>Report</span>
                    </NavLink>
                    <footer className="admin-hamburger-logout">
                        <div className="desktop-admin-user-profile">
                            <><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="profile-photo" /></>
                            <span>{name}</span>
                        </div>
                        <div className="mobile-admin-logout-button" style={{width: '200px',}}>
                            <Button 
                                type='submit' 
                                onClick={handleClick} 
                                variant="gold"
                            >
                                <img src={logout} alt='logout icon' />Logout
                            </Button>
                        </div>
                    </footer>
                </section>
            )}
        </div>
        <div className="desktop-admin-sidebar">
            <header className="admin-sidebar-title">
                <img src={logo} alt="logo" className="eform-logo"/>
                <hr />
            </header>
            <NavLink to="/admin" className="nav-links" style={({ isActive }) => {return { color: isActive ? 'red' : '' }}}>
                <div className="icon-container">
                    <img src={dashboard} alt='dashboard icon'/>
                </div>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="transaction-history" className="nav-links" style={({ isActive }) => {return { color: isActive ? 'red' : '' }}}>
                <div className="icon-container">
                    <img src={cards} alt='payment icon'/>
                </div>
                <span>Transaction History</span>
            </NavLink>
            <NavLink to="create-user" className="nav-links" style={({ isActive }) => {return { color: isActive ? 'red' : '' }}}>
                <div className="icon-container">
                    <img src={createUser} alt='payment icon'/>
                </div>
                <span>Create User</span>
            </NavLink>
            <NavLink to="all-users" className="nav-links">
                <div className="icon-container">
                    <img src={allUser} alt='payment icon'/>
                </div>
                <span>All Users</span>
            </NavLink>
            <NavLink to="change-password" className="nav-links">
                <div className="icon-container">
                    <img src={key} alt='key icon'/>
                </div>
                <span>Change Password</span>
            </NavLink>
            <NavLink to="report" className="nav-links">
                <div className="icon-container">
                    <img src={report} alt='key icon'/>
                </div>
                <span>Report</span>
            </NavLink>
            <footer className="desktop-admin-sidebar-logout">
                <div className="desktop-admin-user-profile">
                    <><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="profile-photo" /></>
                    <span>{name}</span>
                </div>
                <div className="desktop-admin-logout-button">
                    <Button 
                        type='submit' 
                        onClick={handleClick} 
                        variant="gold"
                    >
                        <img src={logout} alt='logout icon' />Logout
                    </Button>
                </div>
            </footer>
        </div>
    </div>
    )
}
export default AdminSidebar