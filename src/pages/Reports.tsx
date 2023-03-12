import { format, parseISO } from 'date-fns'
import moment from 'moment'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState, SetStateAction, useEffect } from 'react'
import { useQuery } from 'react-query'
import { getTransactions } from '../services/transactions'
import './styles/reports.scss'

import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'
import axios from 'axios'
import { BASE_URL } from '../constant'

interface IToken {
    token: string | null
}

const token: IToken = JSON.parse(localStorage.getItem('wb-admin-token') as string)


const Reports = () => {
    const [startDate,setStartDate]= useState(new Date())
    const [endDate,setEndDate]= useState(new Date())
    // const { data, isLoading, error, isSuccess } = useQuery(['transactionsreports'], getTransactions, {initialData: []})
    // // const data = [] ?? res
    // console.log(data)
    const [transactions, setTransactions] = useState([])
    const [allTransactions, setAllTransactions] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/api/alltransaction`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            setTransactions(response.data.result)
            setAllTransactions(response.data.result)
        })
    })

    const handleSelect = (date: any) =>{
        let filtered = allTransactions.filter((transactions) => {
            let transactionDate = new Date(transactions["created_at"])
            return(transactionDate >= date.selection.startDate && transactionDate <= date.selection.endDate)
        })
        setStartDate(date.selection.startDate)
        setEndDate(date.selection.endDate) 
        setTransactions(filtered)
    }
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    
    return (
        <div className="reports">
            <div className="mobile-reports"></div>
            <div className="desktop-reports">
                {/* <header>
                    <h3>Report</h3>
                </header> */}
                <DateRangePicker 
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                />
                <main>
                    <table>
                        <thead>
                            <tr>Transaction ID</tr>
                            <tr>Amount</tr>
                            <tr>Coin Amount</tr>
                            <tr>User</tr>
                            <tr>Date</tr>
                            <tr>Time</tr>
                        </thead>
                        <tbody>
                            {transactions.map((result: any) => {
                                // let date = format(parseISO(result?.created_at), "dd/MM/yyyy HH:mm:ss")
                                let date = new Date(result["created_at"])
                                let time = moment(result?.created_at).fromNow()
                                return (
                                    <tr>
                                        <td>{result?.transId}</td>
                                        <td>{result?.amount}</td>
                                        <td>{result?.amountCoin}</td>
                                        <td>{result?.user}</td>
                                        <td>{date.toLocaleDateString()}</td>
                                        <td>{time}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}
export default Reports