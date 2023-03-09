import './styles/table.scss'
import { mockData, Person } from '../services/mockData'
import { getTransactions } from "../services/transactions"
import { COLUMNS } from "../data/column"
import GlobalFilter from './GlobalFilter'
import Button from './Button'
import backArrow from '../assets/icons/backArrow.svg'
import forwardArrow from '../assets/icons/forwardArrow.svg'
import Spinner from './Spinner'

import { useEffect, useMemo, useState } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination, Row } from 'react-table'
import { useQuery } from 'react-query'


const Table = () => {
    // const [tableData, setTableData] = useState(null)
    const { data, isLoading, error, isSuccess } = useQuery(['transactions'], getTransactions)
    // console.log(res)
    // const newTableData = isSuccess && res?.result
    // useEffect(() => {
    //     setTableData(newTableData)
    // }, [tableData])
    // const data = useMemo(() => [...tableData], [tableData])
    // useEffect(() => {
    //     setTableData(newTableData)
    // }, [tableData])
    const columns: any = useMemo(() => COLUMNS, [])
    // const data = res?.result
    // const data = res?.result
    // const data = isSuccess && res?.result
    // console.log(results)
    // const data = useMemo(() => [...results], [results])
    

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

    // if(isLoading || !tableData) {
    //     return <Spinner />
    // }
    // if (error) {
    //     return <div>error</div>
    // }


    return (
        <div className='table'>
            {isSuccess ?
                <>
                                <div className='mobile-table'>
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
            <div className="desktop-table">
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
export default Table


// row: Row<object>, i: number