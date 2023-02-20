import { format } from "date-fns";

export interface IColumns {
    Header: string
    accessor: string
    disableFilters?: boolean
    Cell?: any
}

export const COLUMNS: IColumns[] = [
    {
        Header: "Transaction ID",
        accessor: "id",
        disableFilters: true
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Coin Amount",
        accessor: "coin",
        disableFilters: true
    },
    {
        Header: "User",
        accessor: "lastName",
    },
    {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }: any) => {
            return format(new Date(value), "dd/MM/yyyy");
          },
    },
    {
        Header: "Time",
        accessor: "time",
    },
    // {
    //     Header: "User",
    //     accessor: "user",
    // },
    // {
    //     Header: "Time/Date",
    //     accessor: "2023-02-01 09:51:05",
    // },
    // {
    //     Header: "Time",
    //     accessor: "1 minute ago",
    // },
]