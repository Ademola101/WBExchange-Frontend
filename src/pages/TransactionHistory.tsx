import './styles/transactionhistory.scss'
import Table from '../components/Table'

const TransactionHistory = () => {

    return (
        <div className="transaction-history">
            <div className="mobile-transaction-history"></div>
            <div className="desktop-transaction-history">
                <header>
                    <span>Transaction History</span>
                    <div></div>
                </header>
                <main>
                    <Table />
                </main>
            </div>
        </div>
    )
}
export default TransactionHistory