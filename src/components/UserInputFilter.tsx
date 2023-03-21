import './styles/userinputfilter.scss'
import Input from "./Input"
import Button from "./Button"
import { addNewTransactions } from '../services/addtransactions'

import { useState } from "react"
import { useAsyncDebounce } from "react-table"
import { useMutation, useQuery } from 'react-query'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory()
const MySwal = withReactContent(Swal)

const InputFilter = ({ globalFilter, setGlobalFilter}: any) => {
    const [value, setValue] = useState(globalFilter)
    const [coinValue, setCoinValue] = useState(globalFilter)
    const [transactionData, setTransactionData] = useState({
        amount: '',
        amountCoin: '',
    })
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

                setTimeout(() => {
                    window.location.reload()
                }, 3000)
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


    const handleChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 200)
    const handleClick = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        mutate(transactionData)
        setTransactionData({
            amount: '',
            amountCoin: ''
        })
        // setValue('')
        // setCoinValue('')
    }

    const disabled = !transactionData.amount || !transactionData.amountCoin || isLoading


    return (
        <div className="user-input-filter">
            <section className="mobile-input-filter">
                <form>
                    <Input 
                        type='number'
                        placeholder='USD'
                        id='USD-Amount'
                        label='Enter Amount in USD'
                        name='amount'
                        onChange={(event: any) => {
                            setValue(event?.target?.value)
                            setTransactionData({ ...transactionData, amount: event.target.value})
                            handleChange(event?.target?.value)
                        }}
                    />
                    <Input 
                        type='number'
                        step="0.0001"
                        placeholder='Coin'
                        id='Coin-Amount'
                        label='Enter Amount in Coin'
                        name='amountCoin'
                        onChange={(event: any) => {
                            setCoinValue(event?.target?.value)
                            setTransactionData({ ...transactionData, amountCoin: event.target.value})
                            handleChange(event?.target?.value)
                        }}
                    />
                    <Button 
                        type='submit' 
                        onClick={handleClick} 
                        variant='gold' 
                        isLoading={isLoading} 
                        disabled={disabled}
                    >
                        Submit
                    </Button>
                </form>
            </section>
            <section className="desktop-input-filter">
                <form>
                    <Input 
                        type='number'
                        placeholder='USD'
                        id='USD-Amount'
                        label='Enter Amount in USD'
                        name='amount'
                        value={value || ""}
                        onChange={(event: any) => {
                            setValue(event?.target?.value)
                            setTransactionData({ ...transactionData, amount: event.target.value})
                            handleChange(event?.target?.value)
                        }}
                    />
                    <Input 
                        type='number'
                        step="0.0001"
                        placeholder='Coin'
                        id='Coin-Amount'
                        label='Enter Amount in Coin'
                        name='amountCoin'
                        // value={value || ""}
                        onChange={(event: any) => {
                            setCoinValue(event?.target?.value)
                            setTransactionData({ ...transactionData, amountCoin: event.target.value})
                            handleChange(event?.target?.value)
                        }}
                    />
                    <Button 
                        type='submit' 
                        onClick={handleClick} 
                        variant='gold' 
                        isLoading={isLoading} 
                        disabled={disabled}
                    >
                        Submit
                    </Button>
                </form>
            </section>
        </div>
    )
}
export default InputFilter