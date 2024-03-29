import './styles/allusers.scss'
import Input from "../components/Input"
import { getAllUsers } from '../services/listusers'
import { deleteUser } from '../services/deleteuser'
import { useAdmin } from '../hooks/admin'
import Spinner from '../components/Spinner'

import { useMutation, useQuery, useQueryClient } from 'react-query'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createBrowserHistory } from "history";
import { useAuth } from '../hooks/auth'
import { useState } from 'react'
import { suspendUser } from '../services/suspenduser'


const browserHistory = createBrowserHistory()
const MySwal = withReactContent(Swal)

type userIdType = {
    id: string
}

const AllUsers = () => {
    // const { name, email } = useAdmin()
    const [userId, setUserId] = useState(null)
    const [buttonText, setButtonText] = useState('Suspend')
    const [backgroundColor, setBackgroundColor] = useState('linear-gradient(285.57deg, #696969 78.87%, rgba(105, 105, 105, 0) 118.32%)')
    const token = localStorage.getItem('wb-admin-token')
    const queryClient = useQueryClient()
    const { isLoggedIn } = useAuth('admin')
    const { data, isLoading, error, isSuccess } = useQuery('allusers', getAllUsers, {
        enabled: !!token,
        initialData: [],
        staleTime: 0,
    })
    console.log(data)

    // const userId: any = isSuccess && data?.map((results: any, index: number) => {
    //     return results?.id
    // })
    // console.log(userId)


    const { mutate } = useMutation(deleteUser, {
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
                    title: 'User successfully deleted'
                })

                setTimeout(() => {
                    window.location.reload()
                }, 3000)


                // queryClient.invalidateQueries(data)
            //     queryClient.setQueryData('items', (oldData: any) =>
            //     oldData?.filter((item: { id: any }) => item.id !== res.id)
            //   )
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

    const { mutate: suspendMutation } = useMutation(suspendUser, {
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
                    title: (res.result.status == 1) ? 'user suspended' : 'User Activated'
                })

                setTimeout(() => {
                    window.location.reload()
                }, 3000)


                // queryClient.invalidateQueries(data)
            //     queryClient.setQueryData('items', (oldData: any) =>
            //     oldData?.filter((item: { id: any }) => item.id !== res.id)
            //   )
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
    if (isLoading) {
        return <Spinner />
    }
    if (error) {
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
    }
    // if (isSuccess && data) {
    //     const mapdata = Object.values(data.result)?.map((results: any, index: number) => (
    //         console.log(results.t_trans)
    //     ))
    // }

    const handleSuspendButton = (id: any, status: any) => {
       status= status==0 ? 1 : 0; 
        suspendMutation({id: id, status: status})
      
        
    }


    const handleDeleteButton = (id: any) => {
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            confirmButtonColor: 'red',
            // cancelButtonColor: '#',          
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                setUserId(id)
                mutate(id)
            //   swalWithBootstrapButtons.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
        })
    }

    return (
        <div className="all-users">
            <div className="mobile-all-users">
                <header>
                    <Input
                        type="search"
                        placeholder="Search..."
                        id="password"
                        name="password"
                        onChange={() => {}}
                        variant='search'
                    />
                </header>
                <main>
                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Username</th>
                                <th>Email</th>
                                {/* <th>Transaction Statistics</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        {isSuccess ? data?.map((results: any, index: number) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{results.name}</td>
                                    <td>{results.email}</td>
                                    {/* <td>
                                        <p>Total Transactions: {results.t_trans}</p>
                                        <p>Total Amount: {results.t_amount}</p>
                                        <p>Total Coins: {results.t_coin}</p>
                                    </td> */}
                                    <td>
                                        <button 
                                            type="submit" 
                                            onClick={() => handleDeleteButton(results.id)}
                                            style={{
                                                width: '74px', 
                                                height: '31px', 
                                                color: 'var(--white-text)',
                                                background: 'linear-gradient(285.57deg, #A81414 78.87%, rgba(168, 20, 20, 0) 118.32%)',
                                                borderRadius: '8px',
                                                border: 'none',
                                                outline: 'none',
                                                margin: '10px',
                                                cursor: 'pointer,'
                                            }}
                                        >
                                            Delete
                                        </button>
                                        <button 
                                            type="submit" 
                                            onClick={event =>handleSuspendButton(results.id, results.status)}
                                            style={{
                                                width: '74px', 
                                                height: '31px', 
                                                color: 'var(--white-text)',
                                                // background: 'linear-gradient(285.57deg, #696969 78.87%, rgba(105, 105, 105, 0) 118.32%)',
                                                background: backgroundColor,
                                                borderRadius: '8px',
                                                border: 'none',
                                                outline: 'none',
                                                margin: '10px',
                                                cursor: 'pointer,'
                                            }}
                                        >
                                           {buttonText}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        )): null}
                    </table>
                </main>
            </div>
            <div className="desktop-all-users">
                <header>
                    <div>
                        <h3>All Users</h3>
                    </div>
                    <div style={{width: '300px'}}>
                    <Input
                        type="search"
                        placeholder="Search..."
                        id="password"
                        name="password"
                        onChange={() => {}}
                        variant='search'
                    />
                </div>
                </header>
                <main>
                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Username</th>
                                <th>Email</th>
                                {/* <th>Transaction Statistics</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        {isSuccess ? data?.map((results: any, index: number) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{results?.name}</td>
                                    <td>{results?.email}</td>
                                    {/* <td>
                                        <p>Total Transactions: {results.t_trans}</p>
                                        <p>Total Amount: {results.t_amount}</p>
                                        <p>Total Coins: {results.t_coin}</p>
                                    </td> */}
                                    <td>
                                        <button 
                                            type="submit" 
                                            onClick={() => handleDeleteButton(results.id)}
                                            style={{
                                                width: '74px', 
                                                height: '31px', 
                                                color: 'var(--white-text)',
                                                background: 'linear-gradient(285.57deg, #A81414 78.87%, rgba(168, 20, 20, 0) 118.32%)',
                                                borderRadius: '8px',
                                                border: 'none',
                                                outline: 'none',
                                                margin: '10px',
                                                cursor: 'pointer,'
                                            }}
                                        >
                                            Delete
                                        </button>
                                        <button 
                                            type="submit" 
                                            onClick={event => handleSuspendButton(results.id, results.status)}
                                            style={{
                                                width: '74px', 
                                                height: '31px', 
                                                color: 'var(--white-text)',
                                                // background: 'linear-gradient(285.57deg, #696969 78.87%, rgba(105, 105, 105, 0) 118.32%)',
                                                background: (results.status == 0) ? backgroundColor : 'green',
                                                borderRadius: '8px',
                                                border: 'none',
                                                outline: 'none',
                                                margin: '10px',
                                                cursor: 'pointer,'
                                            }}
                                        >
                                            {`${(results.status == 0) ? buttonText : 'Activate'}`}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        )): null}
                    </table>
                </main>
            </div>
        </div>
    )
}
export default AllUsers