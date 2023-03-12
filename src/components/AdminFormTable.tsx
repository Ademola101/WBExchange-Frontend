import './styles/adminformtable.scss'
import Button from "./Button"
import Input from "./Input"
import { getTransactions } from "../services/transactions"
import { COLUMNS } from "../data/column"
import GlobalFilter from "./GlobalFilter"
import backArrow from '../assets/icons/backArrow.svg'
import forwardArrow from '../assets/icons/forwardArrow.svg'

import { useQuery } from "react-query"
import { useMemo } from "react"
import { Row, useAsyncDebounce, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table"
import InputFilter from "./InputFilter"

const AdminFormTable = () => {
    const { data: result, isLoading, error, isSuccess } = useQuery(['admintransactions'], getTransactions, { initialData: []})
    const columns: any = useMemo(() => COLUMNS, [])
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
        <div className="admin-form-table">
            <div className="mobile-admin-form-table">
                <section>
                    <InputFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                </section>
                <section className="mobile-table">
                    { isSuccess ?
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
                        </>
                     : null
                    }
                </section>
            </div>
            <div className="desktop-admin-form-table">
                <section>
                    <InputFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                </section>
                <section className="desktop-table">
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
                        </> 
                    : null
                }
                </section>
            </div>
        </div>
    )
}

export default AdminFormTable
