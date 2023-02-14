import './styles/sidebar.scss'
import { NavLink } from "react-router-dom"
import logo from '../assets/icons/logo.svg'
import dashboard from '../assets/icons/dashboard.svg'
import cards from '../assets/icons/cards.svg'
import key from '../assets/icons/key.svg'
import logout from '../assets/icons/logout.svg'
import Button from './Button'

const Sidebar = ({ isActive }: any) => {

    const handleClick = () => {}

    return (
        <div className={isActive ? 'sidebar__container--active' : 'sidebar__container'}>
        <div className="mobile-user-sidebar"></div>
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