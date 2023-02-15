export interface IColumns {
    Header: string
    accessor: string
    disableFilters?: boolean
}

export const COLUMNS: IColumns[] = [
    {
        Header: "Transaction ID",
        accessor: "id",
        disableFilters: true
    },
    {
        Header: "First Name",
        accessor: "first_name",
        disableFilters: true
    },
    {
        Header: "Last Name",
        accessor: "last_name",
    },
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "Amount",
        accessor: "age",
    },
    {
        Header: "Time",
        accessor: "date_of_birth",
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