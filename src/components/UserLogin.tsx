import './styles/userlogin.scss'
import Input from './Input'
import Button from './Button'
import Welcome from './Welcome'
import login from '../assets/icons/login.svg'
import { userlogin } from '../services/userlogin'
import { useAuth } from '../hooks/auth'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMutation } from 'react-query'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory()
const MySwal = withReactContent(Swal)

const UserLogin = () => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const { setIsLoggedIn } = useAuth()
    const { mutate, isLoading } = useMutation(userlogin, {
        onError: () => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
              
            Toast.fire({
                icon: 'error',
                title: 'An error occured'
            })
        },
        onSuccess: (res) => {
            if(res.success === true && res.result.user.role === "Staff") {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                  
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
                const { result } = res
                const { token, user } = result
                console.log(result)
                localStorage.setItem('wb-user-token', JSON.stringify(token))
                localStorage.setItem('wb-staff-user', JSON.stringify(user))
                setIsLoggedIn(true)
                setTimeout(() => {
                    navigate('/user')
                }, 4000)
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email or password incorrect',
                    // footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }
    })
    
    const handleChange = (event: any) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = (event: any) => {
        // setIsModalOpen(!isModalOpen)
        event.preventDefault()
        mutate(data)
        setData({
            email: '',
            password: '',
        })
    }

    if(isModalOpen) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
    }

    const disabled = !data.email || !data.password || isLoading

    return (
        <div className="user-login">
            <div className="mobile-user-login">
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
                        isLoading={isLoading}
                        disabled={disabled}
                    >
                       <img src={login} alt='sign in icon' /> Sign in
                    </Button>
                </form>
            </div>
            <div className="desktop-user-login">
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
                        isLoading={isLoading}
                        disabled={disabled}
                    >
                       <img src={login} alt='sign in icon' /> Sign in
                    </Button>
                </form>
            </div>
            {/* {isModalOpen && <Welcome />} */}
        </div>
    )
}
export default UserLogin