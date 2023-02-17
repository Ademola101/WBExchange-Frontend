import './styles/transactionhistory.scss'
import Input from '../components/Input'
import Table from '../components/Table'
import { getTransactions } from "../services/transactions"
import { COLUMNS } from "../data/column"
import GlobalFilter from '../components/GlobalFilter'

import { useMemo, useState } from 'react'
import { useAsyncDebounce, useTable, useSortBy, useGlobalFilter } from 'react-table'
import { useQuery } from 'react-query'

const TransactionHistory = () => {
    const { data: mockData } = useQuery('transactions', () => getTransactions())
    console.log(mockData)
    const columns: any = useMemo(() => COLUMNS, [])
    const data = useMemo(() => [...mockData], [mockData])
    // @ts-ignore
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter, state: { globalFilter } } = useTable({
        columns,
        data,
    },
    useGlobalFilter,
    useSortBy
    )
    const [value, setValue] = useState(globalFilter)
    
    const handleChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <div className="transaction-history">
            <div className="mobile-transaction-history"></div>
            <div className="desktop-transaction-history">
                <header>
                    <span>Transaction History</span>
                    <div>
                        <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
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
                    <table {...getTableProps()}>
                        <thead>
                            {
                                headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((column) => (
                                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                rows.map((row) => {
                                    prepareRow(row)

                                    return (
                                        <tr {...row.getRowProps()}>
                                            {
                                                row.cells.map((cell) => {
                                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}
export default TransactionHistory