import './styles/welcome.scss'
import welcome from '../../assets/icons/welcome.svg'
// import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const naviate = useNavigate()


    const handleClick = () => {
        naviate('/user')
    }

    return (
        <div className="welcome">
            <div className="mobile-welcome"></div>
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
export default Welcome