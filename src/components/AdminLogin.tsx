import './styles/adminlogin.scss'
import Input from './Input'
import Button from './Button'
import Welcome from './Welcome'
import login from '../assets/icons/login.svg'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AdminLogin = () => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const handleChange = () => {}

    const handleClick = () => {
        setIsModalOpen(!isModalOpen)
    }

    if(isModalOpen) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div className='admin-login'>
            <div className="mobile-admin-login"></div>
            <div className="desktop-admin-login">
                <form autoComplete='off'>
                    <label htmlFor="email">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            id="email"
                            name="email"
                            // value=""
                            // variant='white'
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="password">
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor='checkbox'>
                        <input type='checkbox' />
                        <b>Remember me</b>
                    </label>
                    <Button 
                        // className='signin-button'
                        variant='purple'
                        onClick={handleClick}
                        type="submit"
                    >
                       <img src={login} alt='sign in icon' /> Sign in
                    </Button>
                </form>
            </div>
            {isModalOpen && <Welcome />}
        </div>
    )
}
export default AdminLogin