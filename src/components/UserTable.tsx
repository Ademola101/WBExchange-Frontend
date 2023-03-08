const UserTable = () => {
    return (
        <div className="user-table">
            {isSuccess ?
                <>
                <div className='user-mobile-table'>
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
            <div className="user-desktop-table">
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