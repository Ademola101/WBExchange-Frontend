import './styles/transactionhistory.scss'
import Input from '../components/Input'
import Table from '../components/Table'

const TransactionHistory = () => {
    const handleChange = () => {}
    return (
        <div className="transaction-history">
            <div className="mobile-transaction-history"></div>
            <div className="desktop-transaction-history">
                <header>
                    <span>Transaction History</span>
                    <div>
                        <div><p>Recent Transactions</p></div>
                        <div style={{width: '300px'}}>
                            <Input
                                type="search"
                                placeholder="Search..."
                                id="password"
                                name="password"
                                onChange={handleChange}
                                variant='search'
                                required
                            />
                        </div>
                    </div>
                </header>
                <main>
                    <Table />
                </main>
            </div>
        </div>
    )
}
export default TransactionHistory