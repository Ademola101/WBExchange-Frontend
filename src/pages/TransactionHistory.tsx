import './styles/transactionhistory.scss'
import Input from '../components/Input'
import Table from '../components/Table'

import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import GlobalFilter from '../components/GlobalFilter'

const TransactionHistory = () => {
    // const [value, setValue] = useState(globalFilter)
    
    // const handleChange = useAsyncDebounce((value) => {
    //     setGlobalFilter(value || undefined)
    // }, 200)

    return (
        <div className="transaction-history">
            <div className="mobile-transaction-history"></div>
            <div className="desktop-transaction-history">
                <header>
                    <span>Transaction History</span>
                    <div>
                        <GlobalFilter />
                    </div>
                    {/* <div>
                        <div><p>Recent Transactions</p></div>
                        <div style={{width: '300px'}}>
                            <Input
                                type="search"
                                placeholder="Search..."
                                id="password"
                                name="password"
                                value={value || ""}
                                onChange={(event: any) => {
                                    setValue(event?.target)
                                    handleChange(event.target.value)
                                }}
                                variant='search'
                            />
                        </div>
                    </div> */}
                </header>
                <main>
                    <Table />
                </main>
            </div>
        </div>
    )
}
export default TransactionHistory