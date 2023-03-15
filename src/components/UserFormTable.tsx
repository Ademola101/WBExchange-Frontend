import './styles/userformtable.scss'
import Button from "./Button"
import Input from "./Input"
import InputFilter from "./InputFilter"
import { getUserTransactions } from '../services/usertransaction'
import { USERCOLUMNS } from "../data/usercolumn"
import GlobalFilter from "./GlobalFilter"
import backArrow from '../assets/icons/backArrow.svg'
import forwardArrow from '../assets/icons/forwardArrow.svg'

import { useQuery } from "react-query"
import { useMemo } from "react"
import { Row, useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table"
import UserInputFilter from './UserInputFilter'
import { useAuth } from '../hooks/auth'

const UserFormTable = () => {
    const token = localStorage.getItem('wb-user-token')
    const { isLoggedIn } = useAuth('user')
    const { data: result, isLoading, error, isSuccess } = useQuery(['userformtransactions', token], getUserTransactions, {
        initialData: [],
        enabled: !!token,
        staleTime: 0,
    })
    const columns: any = useMemo(() => USERCOLUMNS, [])
    const data = useMemo(() => [...result], [result])

    const { 
            getTableProps, 
            getTableBodyProps, 
            headerGroups, 
            rows, 
            prepareRow, 
            // @ts-ignore
            setGlobalFilter, page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize,
            // @ts-ignore
            state: { pageIndex, pageSize, globalFilter } } = useTable<Object[] | any>({
        columns,
        data
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    )
    const handleClick = () => {}
    return (
        <div className="user-form-table">
            <div className="mobile-user-form-table">
                <section>
                    <UserInputFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                </section>
                <section className='mobile-user-table'>
                    {isSuccess ? 
                        <>
                            <header>
                                <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
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
                                            page.map((row: Row<Object>) => {
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
                                    <tfoot>
                                        <tr>
                                            <td colSpan={4}>© 2023 N-TECH System</td>
                                            <td>
                                                <button  
                                                    type='submit' 
                                                    onClick={() => previousPage()} 
                                                    disabled={!canPreviousPage}
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <img src={backArrow} alt='backward pagination arrow' />
                                                </button>
                                                    <span>{pageIndex + 1}</span> of <span>{pageOptions.length}</span>
                                                <button  
                                                    type='submit' 
                                                    onClick={() => nextPage()} 
                                                    disabled={!canNextPage}
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <img src={forwardArrow} alt='forward pagination arrow' />
                                                </button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </main>
                        </>
                    : null
                    }
                </section>
            </div>
            <div className="desktop-user-form-table">
                <section>
                    <UserInputFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                </section>
                <section className='desktop-user-table'>
                    {isSuccess ? 
                        <>
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
                                            page.map((row: Row<Object>) => {
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
                                    <tfoot>
                                        <tr>
                                            <td colSpan={4}>© 2023 N-TECH System</td>
                                            <td>
                                                <button  
                                                    type='submit' 
                                                    onClick={() => previousPage()} 
                                                    disabled={!canPreviousPage}
                                                >
                                                    <img src={backArrow} alt='backward pagination arrow' />
                                                </button>
                                                    <span>{pageIndex + 1}</span> of <span>{pageOptions.length}</span>
                                                <button  
                                                    type='submit' 
                                                    onClick={() => nextPage()} 
                                                    disabled={!canNextPage}
                                                >
                                                    <img src={forwardArrow} alt='forward pagination arrow' />
                                                </button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </main>
                        </>
                    : null
                    }
                </section>
            </div>
        </div>
    )
}
export default UserFormTable