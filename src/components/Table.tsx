import './styles/table.scss'
import { mockData, Person } from '../services/mockData'
import { getTransactions } from "../services/transactions"
import { COLUMNS } from "../data/column"
import GlobalFilter from './GlobalFilter'
import Button from './Button'
import backArrow from '../assets/icons/backArrow.svg'
import forwardArrow from '../assets/icons/forwardArrow.svg'
import Spinner from './Spinner'
import { useAuth } from '../hooks/auth'

import { useEffect, useMemo, useState } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination, Row } from 'react-table'
import { useQuery } from 'react-query'
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf'
import * as autoTable from 'jspdf-autotable'
import { useExportData } from "react-table-plugins"


const Table = () => {
    const token = localStorage.getItem('wb-admin-token')
    const { data: result, isLoading, error, isSuccess } = useQuery(['transactions', token], getTransactions, {
        initialData: [],
        enabled: !!token,
        staleTime: 0,
    })
    // const data = [] ?? res
    console.log(result)
    const columns: any = useMemo(() => COLUMNS, [])
    const data = useMemo(() => [...result], [result])
    

    // const columns: any = useMemo(() => COLUMNS, [])
    // const [data, setData] = useState(() => mockData(5000))
    // const refreshData = () => setData(() => mockData(5000))
    // console.log(refreshData)
    //@ts-ignore
    const { 
            getTableProps, 
            getTableBodyProps, 
            headerGroups, 
            rows, 
            prepareRow, 
            // @ts-ignore
            setGlobalFilter, setAdminGlobalFilter, page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize,
            // @ts-ignore
            state: { pageIndex, pageSize, globalFilter, adminGlobalFilter } } = useTable<Object[] | any>({
        columns,
        data
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    )

    const handleClick = () => {}

    const exportToExcel = () => {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(result)
    
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    
        XLSX.writeFile(workbook, 'data.xlsx')
    }



    return (
        <div className='table'>
            {isSuccess ?
                <>
                <div className='mobile-table'>
                <header>
                    <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                </header>
                <main>
                    <Button type='submit' onClick={exportToExcel}>Export to Excel</Button>
                    <Button type='submit' onClick={handleClick}>Export to PDF</Button>
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
                                <td colSpan={5}>© 2023 N-TECH System</td>
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
            <div className="desktop-table">
                <header>
                    <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                </header>
                <main>
                    <Button type='submit' onClick={exportToExcel}>Export to Excel</Button>
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
                                <td colSpan={5}>© 2023 N-TECH System</td>
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
export default Table


// row: Row<object>, i: number