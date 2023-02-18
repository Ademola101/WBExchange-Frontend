import './styles/table.scss'
import { getTransactions } from "../services/transactions"
import { COLUMNS } from "../data/column"
import GlobalFilter from './GlobalFilter'
import Button from './Button'
import backArrow from '../assets/icons/backArrow.svg'
import forwardArrow from '../assets/icons/forwardArrow.svg'

import { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination, Row } from 'react-table'
import { useQuery } from 'react-query'
import Spinner from './Spinner'


const Table = () => {
    const { data: mockData, isLoading, error } = useQuery('transactions', () => getTransactions())
    console.log(mockData)
    const columns: any = useMemo(() => COLUMNS, [])
    const data = useMemo(() => [...mockData], [mockData])
    // @ts-ignore
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

    const handleClick = () => {}

    if(isLoading) {
        return <Spinner />
    }


    return (
        <div className='table'>
            <div className='mobile-table'></div>
            <div className="desktop-table">
                <header>
                    <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
                </header>
                <menu>
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
                                page.map((row: Row<object>, i: number) => {
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
                                <td>
                                    <span>© 2023 N-Tech System</span>
                                    <div>
                                        <Button type='submit' onClick={() => previousPage()} disabled={!canPreviousPage}>
                                            <img src={backArrow} alt='backward pagination arrow' />
                                        </Button>
                                        <div>
                                            <strong>{pageIndex + 1} of {pageOptions.length}</strong>
                                        </div>
                                        <Button type='submit' onClick={() => nextPage()} disabled={!canNextPage}>
                                            <img src={forwardArrow} alt='forward pagination arrow' />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </menu>
            </div>
        </div>
    )
}
export default Table