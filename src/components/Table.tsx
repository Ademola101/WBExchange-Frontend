import './styles/table.scss'
import { getTransactions } from "../services/transactions"
import { COLUMNS } from "../data/column"

import { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import { useQuery } from 'react-query'

const Table = () => {
    const { data: mockData } = useQuery('transactions', () => getTransactions())
    console.log(mockData)
    const columns: any = useMemo(() => COLUMNS, [])
    const data = useMemo(() => [...mockData], [mockData])
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    },
    useSortBy
    )

    return (
        <div className='table'>
            <div className='mobile-table'></div>
            <div className="desktop-table">
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
        </div>
        </div>
    )
}
export default Table