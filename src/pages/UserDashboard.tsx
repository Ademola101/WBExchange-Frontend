import './styles/userdashboard.scss'
import Input from '../components/Input'
import Button from '../components/Button'
import transactions from '../assets/icons/transactions.svg'
import amount from '../assets/icons/amount.svg'
import coins from '../assets/icons/coins.svg'
import session from '../assets/icons/session.svg'
import Table from '../components/Table'

const UserDashboard = () => {
    const handleChange = () => {}
    const handleClick = () => {}

    return (
        <div className="user-dashboard">
            <div className="mobile-user-dashboard">
                {/* <header>
                    <h3>User Dashboard</h3>
                </header> */}
                <section className='mobile-overview'>
                    <p>Overview</p>
                    <div className='overview-card'>
                        <>
                            <img src={transactions} alt='transaction icon' />
                        </>
                        <div>
                            <span>Total Transactions</span>
                            <span>50</span>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <>
                            <img src={amount} alt='amount icon' />
                        </>
                        <div>
                            <span>Total Amount</span>
                            <span>5000</span>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <>
                            <img src={coins} alt='coin icon' />
                        </>
                        <div>
                            <span>Total Coins</span>
                            <span>12</span>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <>
                            <img src={session} alt='clock icon' />
                        </>
                        <div>
                            <span>Total Session</span>
                            <span>7</span>
                        </div>
                    </div>
                </section>
                <section className='mobile-amount-section'>
                    <form>
                        <Input 
                            type='number'
                            placeholder='USD'
                            id='USD-Amount'
                            label='Enter Amount in USD'
                            name='USD-Amount'
                            onChange={handleChange}
                        />
                        <Input 
                            type='number'
                            placeholder='Coin'
                            id='Coin-Amount'
                            label='Enter Amount in Coin'
                            name='Coin-Amount'
                            onChange={handleChange}
                        />
                        <Button type='submit' onClick={handleClick} variant='gold'>Submit</Button>
                    </form>
                </section>
                <section className='mobile-user-transactions'>
                    <Table />
                </section>
            </div>
            <div className="desktop-user-dashboard">
                <header>
                    <h3>User Dashboard</h3>
                </header>
                <section className='desktop-overview'>
                    <p>Overview</p>
                    <div className='overview-card'>
                        <>
                            <img src={transactions} alt='transaction icon' />
                        </>
                        <div>
                            <span>Total Transactions</span>
                            <span>50</span>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <>
                            <img src={amount} alt='amount icon' />
                        </>
                        <div>
                            <span>Total Amount</span>
                            <span>5000</span>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <>
                            <img src={coins} alt='coin icon' />
                        </>
                        <div>
                            <span>Total Coins</span>
                            <span>12</span>
                        </div>
                    </div>
                    <div className='overview-card'>
                        <>
                            <img src={session} alt='clock icon' />
                        </>
                        <div>
                            <span>Total Session</span>
                            <span>7</span>
                        </div>
                    </div>
                </section>
                <section className='desktop-amount-section'>
                    <form>
                        <Input 
                            type='number'
                            placeholder='USD'
                            id='USD-Amount'
                            label='Enter Amount in USD'
                            name='USD-Amount'
                            onChange={handleChange}
                        />
                        <Input 
                            type='number'
                            placeholder='Coin'
                            id='Coin-Amount'
                            label='Enter Amount in Coin'
                            name='Coin-Amount'
                            onChange={handleChange}
                        />
                        <Button type='submit' onClick={handleClick} variant='gold'>Submit</Button>
                    </form>
                </section>
                <section className='desktop-user-transactions'>
                    <Table />
                </section>
            </div>
        </div>
    )
}
export default UserDashboard