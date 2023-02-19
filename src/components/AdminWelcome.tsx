import './styles/adminwelcome.scss'
import welcome from '../assets/icons/welcome.svg'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const AdminWelcome = () => {
    const naviate = useNavigate()


    const handleClick = () => {
        naviate('/admin')
    }

    return (
        <div className="welcome">
            <div className="mobile-welcome">
                <div className='mobile-welcome-overlay'></div>
                <div className='mobile-welcome-content'>
                    <>
                        <img src={welcome} alt=" welcome back icon" />
                    </>
                    <div>
                        <h3>Welcome back, Joe</h3>
                        <p>Successfully!</p>
                    </div>
                    <Button 
                        type='submit' 
                        // className='welcome-btn' 
                        variant='purple'
                        onClick={handleClick}>OK</Button>
                </div>
                </div>
            <div className="desktop-welcome">
                <div className='desktop-welcome-overlay'></div>
                <div className='desktop-welcome-content'>
                    <>
                        <img src={welcome} alt=" welcome back icon" />
                    </>
                    <div>
                        <h3>Welcome back, Joe</h3>
                        <p>Successfully!</p>
                    </div>
                    <Button 
                        type='submit' 
                        // className='welcome-btn' 
                        variant='purple'
                        onClick={handleClick}>OK</Button>
                </div>
            </div>
        </div>
    )
}
export default AdminWelcome