import './styles/reports.scss'
import { getTransactions } from '../services/transactions'
import { BASE_URL } from '../constant'
// @ts-ignore
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
// @ts-ignore
import Pdf from 'react-to-pdf'
import { format, parseISO } from 'date-fns'
import moment from 'moment'
import { useState, useEffect,} from 'react'
import { DateRangePicker, DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'
import axios from 'axios'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';


interface IToken {
    token: string | null
}

const token: IToken = JSON.parse(localStorage.getItem('wb-admin-token') as string)



const Reports = () => {


    
const [pageNumber, setPageNumber] = useState(0);
const usersPerPage = 10;
const pagesVisited = pageNumber * usersPerPage;

    
    const [startDate,setStartDate]= useState(new Date())
    const [endDate,setEndDate]= useState(new Date())
    const [transactions, setTransactions] = useState<any>()
    let { data: allTransactions, isLoading, error } = useQuery('transactions', getTransactions, {
        refetchInterval: 1000,
        


    })


    // useEffect(() => {
    //     axios.get(`${BASE_URL}/api/alltransaction`, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }).then((response) => {
    //         setTransactions(response.data.result)
    //         setAllTransactions(response.data.result)
    //     })
    // })

    const handleSelect = (date: any) =>{
        allTransactions= allTransactions.filter((transactions: any) => {
            let transactionDate = new Date(transactions["created_at"])
            return(transactionDate >= date.selection.startDate && transactionDate <= date.selection.endDate)
        })
        setStartDate(date.selection.startDate)
        setEndDate(date.selection.endDate) 
        
    }
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    const pageCount = Math.ceil(allTransactions?.length / usersPerPage);
    const changePage = ({ selected }: any) => {
        setPageNumber(selected);
    };

    const displayUsers = allTransactions?.slice( pagesVisited, pagesVisited + usersPerPage).map((result: any) => {
        // let date = format(parseISO(result?.created_at), "dd/MM/yyyy HH:mm:ss")
        let date = new Date(result["created_at"])
        let time = moment(result?.created_at).fromNow()

        return (
            <tr>

                <td>{result?.transId}</td>
                <td>{result?.amount}</td>
                <td>{result?.amountCoin}</td>
                <td>{result?.user}</td>

                <td>{date.toLocaleDateString()}</td>
                <td>{time}</td>
            </tr>
        )
    })

        
        

    const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
    const exportToExcel = (csvData: any, fileName: any) => {

        
        const formattedData = csvData.map((item: any) => {
            return {
                "Transaction ID": item.transId,
                "Amount": item.amount,
                "Coin Amount": item.amountCoin,
                "User": item.user,
                "Date": item.created_at,
                "Time": item.created_at
            }
        })
        const ws = XLSX.utils.json_to_sheet(formattedData);

        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);

    };

    const createPdf = async() => {
        const input = document.getElementById('pdf');
        const pdf = new jsPDF('p', 'pt', 'a4');
        const canvas = await html2canvas(input as HTMLElement);
        const imgData = canvas.toDataURL('image/png');
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
         pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
    }

    
    return (
        <div className="reports">
            

            <div className="mobile-reports">
                {/* <header>
                    <h3>Report</h3>
                </header> */}
                <section>
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                    />
                </section>

                <main>
                <div className="export">
                <button className='export-excel-button' onClick={() => exportToExcel(transactions, "transaction")}>Export as spreadsheet</button>

<button className='export-pdf-button' onClick={createPdf}>Export as PDF</button>

    
</div>
                    <table>
                        <thead>
                            <tr>
                                <td>Transaction ID</td>
                                <td>Amount</td>
                                <td>Coin Amount</td>
                                <td>User</td>
                                <td>Date</td>
                                <td>Time</td>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions?.map((result: any) => {
                                // let date = format(parseISO(result?.created_at), "dd/MM/yyyy HH:mm:ss")
                                let date = new Date(result["created_at"])
                                let time = moment(result?.created_at).fromNow()
                                return (
                                    <tr>
                                        <td>{result?.transId}</td>
                                        <td>{result?.amount}</td>
                                        <td>{result?.amountCoin}</td>
                                        <td>{result?.user}</td>
                                        <td>{date.toLocaleDateString()}</td>
                                        <td>{time}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </main>
            </div>
            <div className="desktop-reports">
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
                    <div className="export">
                        


                        </div>
<div className="export">
<button className='export-excel-button' onClick={() => exportToExcel(allTransactions, "transaction")}>Export as spreadsheet</button>
<button className='export-pdf-button' onClick={createPdf}>Export as PDF</button>

    
</div>
                    
                        <table id='pdf'  >
                            <thead>
                                <tr>
                                    <td>Transaction ID</td>
                                    <td>Amount</td>
                                    <td>Coin Amount</td>
                                    <td>User</td>
                                    <td>Date</td>
                                    <td>Time</td>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {transactions.map((result: any) => {
                                    // let date = format(parseISO(result?.created_at), "dd/MM/yyyy HH:mm:ss")
                                    let date = new Date(result["created_at"])
                                    let time = moment(result?.created_at).fromNow()
                                    return (
                                        <tr>
                                            <td>{result?.transId}</td>
                                            <td>{result?.amount}</td>
                                            <td>{result?.amountCoin}</td>
                                            <td>{result?.user}</td>
                                            <td>{date.toLocaleDateString()}</td>
                                            <td>{time}</td>
                                        </tr>
                                    )
                                })} */}

                                {displayUsers}
                               
                            </tbody>
                        </table>
                        <div>
                                <div className="showing">
                                <p>Showing {pageNumber + 1} to {pageNumber + 10} of {allTransactions?.length} entries</p>

                                <ReactPaginate  
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCount}

                                onPageChange={changePage}
                                containerClassName={"paginationContainer"}
                                previousLinkClassName={"previous-button"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}

                                activeClassName={"paginationActive"}
                                />
                                </div>

                                </div>


                    
                </main>
            </div>
        </div>
    )
}
export default Reports