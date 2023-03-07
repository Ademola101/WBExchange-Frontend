import './styles/createuser.scss'
import Button from "../components/Button"
import Input from "../components/Input"
import { createUser } from '../services/createuser'


import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory()
const MySwal = withReactContent(Swal)


const CreateUser = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '',
    })
    const { mutate, isLoading } = useMutation(createUser, {
        onSuccess: (res) => {
            if(res.success === true) {
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
                    title: 'User registered successfully'
                })

                setTimeout(() => {
                    navigate('/admin')
                }, 4000)
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${res.message}`,
                    // footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
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
    })
    const handleChange = (event: any) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const handleClick = (event: any) => {
        event.preventDefault()
    }
    return (
        <div className="create-user">
            <div className="mobile-create-user">
                {/* <header>
                    <h3>Create New User</h3>
                </header> */}
                <section className="desktop-form">
                    <form>
                        <Input
                            type="email"
                            placeholder="johndoe@mail.com"
                            id="email"
                            label="Email address"
                            name="email"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="text"
                            placeholder="johndoe"
                            id="username"
                            label="Username"
                            name="username"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="password"
                            label="Password"
                            name="password"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <section
                                style={{width: '136px'}}>
                            <Button 
                                type='submit' 
                                onClick={handleClick} 
                                variant="gold"
                            >
                                Create User
                            </Button>
                        </section>
                    </form>
                </section>
            </div>
            <div className="desktop-create-user">
                <header>
                    <h3>Create New User</h3>
                </header>
                <section className="desktop-form">
                    <form>
                        <Input
                            type="email"
                            placeholder="johndoe@mail.com"
                            id="email"
                            label="Email address"
                            name="email"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="text"
                            placeholder="johndoe"
                            id="username"
                            label="Username"
                            name="username"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="password"
                            label="Password"
                            name="password"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <section
                                style={{width: '136px'}}>
                            <Button 
                                type='submit' 
                                onClick={handleClick} 
                                variant="gold"
                            >
                                Create User
                            </Button>
                        </section>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default CreateUser