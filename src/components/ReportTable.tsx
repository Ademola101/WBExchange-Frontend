import './styles/reporttable.scss'
import { useTable, Column, useFilters, TableOptions, Row, HeaderGroup } from 'react-table'

interface TransactionsTableProps {
    data: any[];
    columns: any;
    startDate: string;
    endDate: string;
}

export interface CustomHeaderGroup<D extends Record<string, unknown>> extends HeaderGroup<D> {
    canFilter?: boolean;
}


const ReportTable = ({ data, columns, filterInput }: any) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Object[] | any>(
      {
        columns,
        data,
      },
      useFilters
    );

  const { startDate, endDate } = filterInput;

  const dateFilter = (rows: any[], id: string | number, filterValue: { startDate: any; endDate: any; }) => {
    const { startDate, endDate } = filterValue;
    const startDateMs = new Date(startDate).getTime();
    const endDateMs = new Date(endDate).getTime();

    return rows.filter((row: { values: { [x: string]: string | number | Date; }; }) => {
      const rowDateMs = new Date(row.values[id]).getTime();

      if (startDateMs && endDateMs) {
        return rowDateMs >= startDateMs && rowDateMs <= endDateMs;
      } else if (startDateMs) {
        return rowDateMs >= startDateMs;
      } else if (endDateMs) {
        return rowDateMs <= endDateMs;
      }

      return true;
    });
  };

  
    return (
        <div className="report-table">
            <div className="mobile-report-table"></div>
            <div className="desktop-report-table">
            <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>
                    {columns.canFilter
                      ? columns.render("Filter")
                      : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {dateFilter(rows, "date", {
            startDate,
            endDate,
          }).map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
            </div>
        </div>
    )
}
export default ReportTable