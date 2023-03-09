import './styles/usertransactionhistory.scss'
import UserTable from "../components/UserTable"

const UserTransactionHistory = () => {
    return (
        <div className="user-transaction-history">
            <div className="mobile-user-transaction-history">
                <UserTable />
            </div>
            <div className="desktop-user-transaction-history">
                <header>
                    <span>Transaction History</span>
                    <div></div>
                </header>
                <main>
                    <UserTable />
                </main>
            </div>
        </div>
    )
}
export default UserTransactionHistory