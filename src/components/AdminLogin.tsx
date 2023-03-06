import './styles/adminlogin.scss'
import Input from './Input'
import Button from './Button'
import Welcome from './Welcome'
import AdminWelcome from './AdminWelcome'
import login from '../assets/icons/login.svg'
import { adminlogin } from '../services/adminlogin'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMutation } from 'react-query'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory()
const MySwal = withReactContent(Swal)

const AdminLogin = () => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const { mutate, isLoading } = useMutation(adminlogin, {
        onError: () => {
            console.log("email or password incorrect")
        },
        onSuccess: (res) => {
            if(res.success && res.result.user.role === "admin") {
                // navigate('/')
                setTimeout(() => {
                    navigate('/user')
                }, 4000)
                const { user, token } = res

                localStorage.setItem('edu-earn-token', token)
                localStorage.setItem('edu-earn-user', JSON.stringify(user.name)) 
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
                // MySwal.fire({
                //     html: (
                //     //   <HistoryRouter history={browserHistory}>
                //         <Link to='user' onClick={() => Swal.close()}>
                //           Welcome
                //         </Link>
                //     //   </HistoryRouter>
                //     ),
                //   })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'email or password incorrect',
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
        event.preventDefault()
        // setIsModalOpen(!isModalOpen)
        mutate(data)
    }

    if(isModalOpen) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div className='admin-login'>
            <div className="mobile-admin-login">
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
        {isModalOpen && <AdminWelcome />}
        </div>
    )
}
export default AdminLogin

function admin(variables: void): Promise<unknown> {
    throw new Error('Function not implemented.')
}
