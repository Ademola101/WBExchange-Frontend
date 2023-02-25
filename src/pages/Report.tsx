import './styles/report.scss'
import { mockData, Person } from '../services/mockData'
import { COLUMNS, IColumns } from '../data/column'

import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { SetStateAction, useMemo, useState } from 'react'
import { useTable, usePagination, Row } from 'react-table'

const Report = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const columns: any = useMemo(() => COLUMNS, []);
    const [data, setData] = useState(() => mockData(5000));
    const refreshData = () => setData(() => mockData(5000));

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
        usePagination,
        )

    const handleSelect = (date: any) => {
        let filtered = data.filter((item) => {
            let transactionDate = new Date(item["date"])
            return (transactionDate >= date.selection.startDate && transactionDate <= date.selection.endDate)
        })
        setStartDate(date.selection.startDate)
        setEndDate(date.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    return (
        <div className="report">
            <div className="mobile-report"></div>
            <div className="desktop-report">
                <header>
                    <h3>Report</h3>
                </header>
                <section>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                    />
                </section>
                <main>
                    <table>
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
                                page.map((row: Row<Person>) => {
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
                        {/* <tfoot>
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
                        </tfoot> */}
                    </table>
                </main>
            </div>
        </div>
    )
}
export default Report