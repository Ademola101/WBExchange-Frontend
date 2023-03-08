import { format } from "date-fns";

export interface IColumns {
    Header: string
    accessor: string
    disableFilters?: boolean
    Cell?: any
}

export const USERCOLUMNS: IColumns[] = [
    {
        Header: "Transaction ID",
        accessor: "transId",
        disableFilters: true
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Coin Amount",
        accessor: "amountCoin",
        disableFilters: true
    },
    {
        Header: "User",
        accessor: "user",
    },
    {
        Header: "Date",
        accessor: "updated_at",
        // Cell: ({ value }: any) => {
        //     return format(new Date(value), "dd/MM/yyyy");
        //   },
    },
    {
        Header: "Time",
        accessor: "time",
    },
]