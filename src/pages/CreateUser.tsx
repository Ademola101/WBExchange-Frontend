import './styles/createuser.scss'
import Button from "../components/Button"
import Input from "../components/Input"
import { createUser } from '../services/createuser'


import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
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
        if(data.password_confirmation !== data.password) return toast.error("Password do not match!",  {
            position: 'top-right',
          })
        if(data.password.length < 8) return toast.error("Password is too short",  {
            position: 'top-right',
          })
        if(!data.email) return toast.error("Email is required!",  {
            position: 'top-right',
          })
        if(!data.name) return toast.error("Username is required",  {
            position: 'top-right',
          })
        if(!data.role) return toast.error("Please choose a role",  {
            position: 'top-right',
          })
        if(data.password === data.password_confirmation){
          mutate(data)
        }
        setData({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            role: '',
        })
    }
    return (
        <div className="create-user">
            <div className="mobile-create-user">
                {/* <header>
                    <h3>Create New User</h3>
                </header> */}
                <section className="mobile-form">
                    <form>
                        <Input
                            type="email"
                            placeholder="johndoe@mail.com"
                            id="email"
                            label="Email address"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="text"
                            placeholder="johndoe"
                            id="name"
                            label="Username"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <label htmlFor="role">
                            Select Role
                            <select 
                                name='role' 
                                id='role'
                                value={data.role}
                                onChange={handleChange}
                            >
                                <option value="select role" disabled>Select Role</option>
                                <option>Staff</option>
                                <option>Admin</option>
                            </select>
                        </label>
                        <Input
                            type="password"
                            placeholder="********"
                            id="password"
                            label="Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="password_confirmation"
                            label="Confirm Password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <section
                                style={{width: '236px'}}>
                            <Button 
                                type='submit' 
                                onClick={handleClick} 
                                variant="gold"
                                isLoading={isLoading}
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
                            value={data.email}
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="text"
                            placeholder="johndoe"
                            id="name"
                            label="Username"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <label htmlFor="role">
                            Select Role
                            <select name='role'
                                id='role'
                                value={data.role}
                                onChange={handleChange}
                            >
                                <option value="select role" disabled>Select Role</option>
                                <option>Staff</option>
                                <option>Admin</option>
                            </select>
                        </label>
                        <Input
                            type="password"
                            placeholder="********"
                            id="password"
                            label="Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="password_confirmation"
                            label="Confirm Password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <section
                                style={{width: '236px'}}>
                            <Button 
                                type='submit' 
                                onClick={handleClick} 
                                variant="gold"
                                isLoading={isLoading}
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