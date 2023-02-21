import './styles/sidebar.scss'
import { NavLink } from "react-router-dom"
import logo from '../assets/icons/logo.svg'
import dashboard from '../assets/icons/dashboard.svg'
import cards from '../assets/icons/cards.svg'
import key from '../assets/icons/key.svg'
import logout from '../assets/icons/logout.svg'
import hamburger from '../assets/icons/hamburger.svg'
import Button from './Button'

import { useEffect, useState } from 'react'

interface ISidebarProps {
    isActive: boolean
}

const Sidebar = ({ isActive }: ISidebarProps) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState<any | null>(null);
    const [openMenu, setOpenMenu] = useState(false);

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
    ]);

    const handleClick = () => {}

    return (
        <div className={isActive ? 'sidebar__container--active' : 'sidebar__container'}>
        <div className='mobile-user-sidebar'>
            <nav>
                <button onClick={() => setActiveMenu(!activeMenu)}><img src={hamburger} alt='hamburger icon' /></button>
            </nav>
            {activeMenu && (
                <section className='admin-hamburger-navs'>
                    <header className="admin-sidebar-title">
                        <img src={logo} alt="logo" className="eform-logo"/>
                        <hr />
                    </header>
                    <NavLink to="/user" className="nav-links">
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
                    <NavLink to="change-password" className="nav-links">
                        <div className="icon-container">
                            <img src={key} alt='key icon'/>
                        </div>
                        <span>Change Password</span>
                    </NavLink>
                    <footer className="user-hamburger-logout">
                        <div className="mobile-user-profile">
                            <><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="profile-photo" /></>
                            <span>Emmanuel</span>
                        </div>
                        <div className="mobile-user-logout-button" style={{width: '200px',}}>
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
        <div className="desktop-user-sidebar">
            <header className="desktop-sidebar-title">
                <img src={logo} alt="logo" className="eform-logo"/>
                <hr />
            </header>
            <NavLink to="/user" className="nav-links">
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
            <NavLink to="change-password" className="nav-links">
                <div className="icon-container">
                    <img src={key} alt='key icon'/>
                </div>
                <span>Change Password</span>
            </NavLink>
            <footer className="desktop-sidebar-logout">
                <div className="desktop-user-profile">
                    <><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="profile-photo" /></>
                    <span>Emmanuel</span>
                </div>
                <div className="desktop-logout-button">
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
export default Sidebar