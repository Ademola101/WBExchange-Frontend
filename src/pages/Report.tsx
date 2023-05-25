import './styles/report.scss'
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import ReportTable, { CustomHeaderGroup } from '../components/ReportTable';
import { IColumns, REPORTCOLUMNS } from '../data/reportcolumn';
import { getTransactions } from '../services/transactions';
import { useTable, useFilters, useSortBy } from "react-table";
import { format, parse, parseISO } from "date-fns";
import moment from 'moment';




const Report = () => {
    const [filterInput, setFilterInput] = useState({
        startDate: "",
        endDate: "",
      });

    const { data: result, isLoading, error, isSuccess } = useQuery(['transactions'], getTransactions, {initialData: []})
    // const data = [] ?? res
    console.log(result)
    const columns = [
        {
            Header: "Transaction ID",
            accessor: "transId",
            // disableFilters: false,
            canFilter: true,
        },
        {
            Header: "Amount",
            accessor: "amount",
            canFilter: true,
        },
        {
            Header: "Coin Amount",
            accessor: "amountCoin",
            canFilter: true,
            // disableFilters: false,
        },
        {
            Header: "Date",
            accessor: "updated_at",
            canFilter: true,
            Cell: ({ value }: any) => {
                return format(parseISO(value), "dd/MM/yyyy HH:mm:ss")
            },
            Filter: ({ column }: any) => (
                <input
                  type="date"
                  value={filterInput.startDate}
                  onChange={(event) =>
                    setFilterInput({
                      ...filterInput,
                      startDate: event.target.value,
                    })
                  }
                  style={{ width: "100%" }}
                />
              ),
        },
        {
            Header: "Time",
            accessor: "time",
            id: "time",
            Cell: ({ value}: any) => {
                return moment(value).fromNow()
            },
            canFilter: true,
        },
    ]
    const data = useMemo(() => [...result], [result])

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFilterInput({ ...filterInput, [name]: value });
    };



  return (
    <div className='report'>
        <div className='mobile-report'></div>
        <div className='desktop-report'>
            <header>
                <h3>Report</h3>
            </header>

            
            <section>

            <div>
            <input 
       type="date"
       id="startDate"
       name="startDate"
       value={filterInput.startDate}
       onChange={handleInputChange}
     />
</div>
<div>
<label htmlFor="endDate">End Date:</label>
<input
       type="date"
       id="endDate"
       name="endDate"
       value={filterInput.endDate}
       onChange={handleInputChange}
     />
    </div>
            </section>

            <ReportTable data={data} columns={columns} filterInput={filterInput} />

        </div>
    </div>
  );
};
export default Report