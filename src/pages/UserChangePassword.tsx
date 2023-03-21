import './styles/userchangepassword.scss'
import Input from '../components/Input'
import Button from '../components/Button'
import { changeUserPassword } from '../services/userchangepassword'


import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createBrowserHistory } from "history";

const UserChangePassword = ({ isActive } : any) => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        password: '',
        password_confirmation: '',
    })
    const { mutate, isLoading } = useMutation(changeUserPassword, {
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
                    title: 'Password changed successfully'
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
        if(data.password.length < 8) return toast.error("Password is too short",  {
            position: 'top-right',
        })
        if(data.password_confirmation !== data.password) return toast.error("Password do not match!",  {
            position: 'top-right',
          })
        if(data.password === data.password_confirmation){
          mutate(data)
        }
        setData({
            password: '',
            password_confirmation: '',
        })
    }

    const disabled = !data.password || !data.password_confirmation || isLoading

    return (
        <div className="user-change-password">
            <div className="mobile-user-change-password">
                {/* <header>
                    <h3>Password Reset</h3>
                </header> */}
                <section className="mobile-form">
                    <form autoComplete='off'>
                        {/* <Input
                            type="password"
                            placeholder="********"
                            id="old-password"
                            label="Old Password"
                            name="password"
                            onChange={handleChange}
                            required
                        /> */}
                        <Input
                            type="password"
                            placeholder="********"
                            id="new-password"
                            label="New Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="confirm-password"
                            label="Confirm New Password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={handleChange}
                            required
                        />
                        <Button 
                            type='submit' 
                            onClick={handleClick} 
                            variant="gold"
                            isLoading={isLoading}
                            disabled={disabled}
                        >
                            Modify
                        </Button>
                    </form>
                </section>
            </div>
            <div className="desktop-user-change-password">
                <header>
                    <h3>Password Reset</h3>
                </header>
                <section className="desktop-form">
                    <form autoComplete='off'>
                        {/* <Input
                            type="password"
                            placeholder="********"
                            id="old-password"
                            label="Old Password"
                            name="password"
                            onChange={handleChange}
                            required
                        /> */}
                        <Input
                            type="password"
                            placeholder="********"
                            id="new-password"
                            label="New Password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="confirm-password"
                            label="Confirm New Password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={handleChange}
                            required
                        />
                        <Button 
                            type='submit' 
                            onClick={handleClick} 
                            variant="gold"
                            isLoading={isLoading}
                            disabled={disabled}
                        >
                            Modify
                        </Button>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default UserChangePassword