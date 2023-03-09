import { format, parseISO } from "date-fns";
import moment from 'moment'

export interface IColumns {
    Header: string
    accessor: string
    disableFilters?: boolean
    Cell?: any
    id?: string
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
        Header: "Date",
        accessor: "updated_at",
        Cell: ({ value }: any) => {
            return format(parseISO(value), "dd/MM/yyyy HH:mm:ss")
        },
    },
    {
        Header: "Time",
        accessor: "time",
        id: "time",
        Cell: ({ value}: any) => {
            return moment(value).fromNow()
        },
    },
]