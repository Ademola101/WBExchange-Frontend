import './styles/userdashboard.scss'
import Input from '../components/Input'
import Button from '../components/Button'
import transactions from '../assets/icons/transactions.svg'
import amount from '../assets/icons/amount.svg'
import coins from '../assets/icons/coins.svg'
import session from '../assets/icons/session.svg'
import Table from '../components/Table'
import { getUserData } from '../services/userdata'
import UserTable from '../components/UserTable'
import { addNewTransactions } from '../services/addtransactions'

import { useMutation, useQuery } from 'react-query'
import { useAsyncDebounce } from 'react-table'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createBrowserHistory } from "history";
import { useState } from 'react'
import UserFormTable from '../components/UserFormTable'
import { useAuth } from '../hooks/auth'

const browserHistory = createBrowserHistory()
const MySwal = withReactContent(Swal)


const UserDashboard = () => {
    const token = localStorage.getItem('wb-user-token')
    const { isLoggedIn } = useAuth('user')
    const [transactionData, setTransactionData] = useState({
        amount: '',
        amountCoin: '',
    })
    const { data, isSuccess } = useQuery(['userquery', token], getUserData, {
        initialData: {},
        enabled: !!token,
        staleTime: 0,
    })
    console.log(data)
    const { mutate, isLoading, error } = useMutation(addNewTransactions, {
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
                    title: 'Data added sucessfully'
                })
            } 
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email or password incorrect',
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
        setTransactionData({
            ...transactionData,
            [event.target.name]: event.target.value
        })
    }
    const handleClick = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        mutate(transactionData)
        setTransactionData({
            amount: '',
            amountCoin: ''
        })
    }

    const disabled = !transactionData.amount || !transactionData.amountCoin || isLoading

    return (
        <div className="user-dashboard">
            <div className="mobile-user-dashboard">
                {/* <header>
                    <h3>User Dashboard</h3>
                </header> */}
                <section className='mobile-overview'>
                    <p>Overview</p>
                    <div className='overview-card-top'>
                        <div className='overview-card'>
                            <>
                                <img src={transactions} alt='transaction icon' />
                            </>
                            <div>
                                <span>Total Transactions</span>
                                <span>{data?.result?.t_trans}</span>
                            </div>
                        </div>
                        <div className='overview-card'>
                            <>
                                <img src={amount} alt='amount icon' />
                            </>
                            <div>
                                <span>Total Amount</span>
                                <span>{data?.result?.t_amount}</span>
                            </div>
                        </div>
                    </div>
                    <div className='overview-card-bottom'>
                        <div className='overview-card'>
                            <>
                                <img src={coins} alt='coin icon' />
                            </>
                            <div>
                                <span>Total Coins</span>
                                <span>{data?.result?.t_coin}</span>
                            </div>
                        </div>
                        <div className='overview-card'>
                            <>
                                <img src={session} alt='clock icon' />
                            </>
                            <div>
                                <span>Total Session</span>
                                <span>{data?.result?.t_session}</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <UserFormTable />
                </section>
            </div>
            <div className="desktop-user-dashboard">
                <header>
                    <h3>User Dashboard</h3>
                </header>
                <section className='desktop-overview'>
                    <p>Overview</p>
                    <div className='overview-card'>
                        <>
                            <img src={transactions} alt='transaction icon' />
                        </>
                        <div>
                            <span>Total Transactions</span>
                            <span>{data?.result?.t_trans}</span>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <>
                            <img src={amount} alt='amount icon' />
                        </>
                        <div>
                            <span>Total Amount</span>
                            <span>{data?.result?.t_amount}</span>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <>
                            <img src={coins} alt='coin icon' />
                        </>
                        <div>
                            <span>Total Coins</span>
                            <span>{data?.result?.t_coin}</span>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <>
                            <img src={session} alt='clock icon' />
                        </>
                        <div>
                            <span>Total Session</span>
                            <span>{data?.result?.t_session}</span>
                        </div>
                    </div>
                </section>
                <section>
                    <UserFormTable />
                </section>
            </div>
        </div>
    )
}
export default UserDashboard