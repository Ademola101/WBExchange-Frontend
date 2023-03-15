import './styles/admindashboard.scss'
import Input from '../components/Input'
import Button from '../components/Button'
import transactions from '../assets/icons/transactions.svg'
import amount from '../assets/icons/amount.svg'
import coins from '../assets/icons/coins.svg'
import session from '../assets/icons/session.svg'
import Table from '../components/Table'
import { useAuth } from '../hooks/auth'

import { getQuery } from '../services/adminquery'
import { useQuery, useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import AdminFormTable from '../components/AdminFormTable'
import Spinner from '../components/Spinner'

const AdminDashboard = () => {
    const token = localStorage.getItem('wb-admin-token')
    const [adminGlobalFilter, setAdminGlobalFilter] = useState<any>('')
    const [value, setValue] = useState(adminGlobalFilter)

    const handleChange = useAsyncDebounce((value) => {
        setAdminGlobalFilter(value || undefined)
    }, 200)
    const handleClick = () => {}
    const { data, isLoading, isSuccess, error} = useQuery(['adminquery', token], getQuery, {
        initialData: {},
        enabled: !!token,
        // staleTime: 86400000,
    })
    console.log(data)

    // useEffect(() => {
    //     if (isSuccess) {
    //       window.location.reload();
    //     }
    // }, [isSuccess]);

    if (isLoading) {
        return <Spinner />
    }

    if(error) {
        return <div>error</div>
    }

    return (
        <div className="admin-dashboard">
            <div className="mobile-admin-dashboard">
                {/* <header>
                    <h3>User Dashboard</h3>
                </header> */}
                <section className='mobile-overview'>
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
                    {/* <form>
                        <Input 
                            type='number'
                            placeholder='USD'
                            id='USD-Amount'
                            label='Enter Amount in USD'
                            name='USD-Amount'
                            onChange={() => {}}
                        />
                        <Input 
                            type='number'
                            placeholder='Coin'
                            id='Coin-Amount'
                            label='Enter Amount in Coin'
                            name='Coin-Amount'
                            onChange={() => {}}
                        />
                        <Button type='submit' onClick={handleClick} variant='gold'>Submit</Button>
                    </form>
                </section>
                <section className='mobile-admin-transactions'>
                    <Table /> */}
                    <AdminFormTable />
                </section>
            </div>
            <div className="desktop-admin-dashboard">
                <header>
                    <h3>Admin Dashboard</h3>
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
                    {/* <form>
                        <Input 
                            type='number'
                            placeholder='USD'
                            id='USD-Amount'
                            label='Enter Amount in USD'
                            name='USD-Amount'
                            value={value || ""}
                            onChange={(event: any) => {
                                setValue(event?.target?.value)
                                handleChange(event?.target?.value)
                            }}
                        />
                        <Input 
                            type='number'
                            placeholder='Coin'
                            id='Coin-Amount'
                            label='Enter Amount in Coin'
                            name='Coin-Amount'
                            // value={value || ""}
                            onChange={() => {}}
                        />
                        <Button type='submit' onClick={handleClick} variant='gold'>Submit</Button>
                    </form>
                </section>
                <section className='desktop-admin-transactions'>
                    <Table /> */}
                    <AdminFormTable />
                </section>
            </div>
        </div>
    )
}
export default AdminDashboard