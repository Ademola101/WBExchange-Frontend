import './styles/usertable.scss'
import { mockData, Person } from '../services/mockData'
import { USERCOLUMNS } from "../data/usercolumn"
import GlobalFilter from './GlobalFilter'
import Button from './Button'
import backArrow from '../assets/icons/backArrow.svg'
import forwardArrow from '../assets/icons/forwardArrow.svg'
import Spinner from './Spinner'
import { getUserTransactions } from '../services/usertransaction'
import axios from 'axios'
import { BASE_URL } from '../constant'

import { useEffect, useMemo, useState } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination, Row } from 'react-table'
import { useQuery } from 'react-query'

interface IToken {
    token: string | null
}

const token: IToken = JSON.parse(localStorage.getItem('wb-user-token') as string)

const UserTable = () => {
    const { data: results, isLoading, error, isSuccess } = useQuery('usertransactions', () => getUserTransactions())
    console.log(results)
  
    // console.log(results)
    const columns: any = useMemo(() => USERCOLUMNS, [])
    const result = results?.result
    const data = useMemo(() => [...result], [result])
    //@ts-ignore
    const { 
            getTableProps, 
            getTableBodyProps, 
            headerGroups, 
            rows, 
            prepareRow, 
            // @ts-ignore
            setGlobalFilter, page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize,
            // @ts-ignore
            state: { pageIndex, pageSize, globalFilter } } = useTable({
        columns,
        data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    )

    if(isLoading) {
        return <Spinner />
    }
    if (error) {
        return <div>error</div>
    }


    const handleClick = () => {}

    return (
        <div className="user-table">
            {isSuccess ?
                <>
                <div className='mobile-user-table'>
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
                                <td colSpan={5}>© 2023 N-Tech System</td>
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
            </div>
            <div className="desktop-user-table">
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
                                <td colSpan={5}>© 2023 N-Tech System</td>
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
            </div>
                </>
             : null}
        </div>
    )
}
export default UserTable