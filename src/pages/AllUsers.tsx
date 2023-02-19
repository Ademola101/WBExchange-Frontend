import './styles/allusers.scss'
import Input from "../components/Input"

const AllUsers = () => {
    return (
        <div className="all-users">
            <div className="mobile-all-users">
                <header>
                    <Input
                        type="search"
                        placeholder="Search..."
                        id="password"
                        name="password"
                        onChange={() => {}}
                        variant='search'
                    />
                </header>
                <main>
                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Transaction Statistics</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>None</td>
                                <td>none@gmail.com</td>
                                <td>
                                    <p>Total Transactions: 50</p>
                                    <p>Total Amount: 5000</p>
                                    <p>Total Coins: 12</p>
                                </td>
                                <td>
                                    <button 
                                        type="submit" 
                                        onClick={() => {}}
                                        style={{
                                            width: '74px', 
                                            height: '31px', 
                                            color: 'var(--white-text)',
                                            background: 'linear-gradient(285.57deg, #A81414 78.87%, rgba(168, 20, 20, 0) 118.32%)',
                                            borderRadius: '8px',
                                            border: 'none',
                                            outline: 'none',
                                            margin: '10px',
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <button 
                                        type="submit" 
                                        onClick={() => {}}
                                        style={{
                                            width: '74px', 
                                            height: '31px', 
                                            color: 'var(--white-text)',
                                            background: 'linear-gradient(285.57deg, #696969 78.87%, rgba(105, 105, 105, 0) 118.32%)',
                                            borderRadius: '8px',
                                            border: 'none',
                                            outline: 'none',
                                            margin: '10px',
                                        }}
                                    >
                                        Suspend
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Joe</td>
                                <td>joe@gmail.com</td>
                                <td>
                                    <p>Total Transactions: 50</p>
                                    <p>Total Amount: 5000</p>
                                    <p>Total Coins: 12</p>
                                </td>
                                <td>
                                    <button 
                                        type="submit" 
                                        onClick={() => {}}
                                        style={{
                                            width: '74px', 
                                            height: '31px', 
                                            color: 'var(--white-text)',
                                            background: 'linear-gradient(285.57deg, #A81414 78.87%, rgba(168, 20, 20, 0) 118.32%)',
                                            borderRadius: '8px',
                                            border: 'none',
                                            outline: 'none',
                                            margin: '10px',
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <button 
                                        type="submit" 
                                        onClick={() => {}}
                                        style={{
                                            width: '74px', 
                                            height: '31px', 
                                            color: 'var(--white-text)',
                                            background: 'linear-gradient(285.57deg, #696969 78.87%, rgba(105, 105, 105, 0) 118.32%)',
                                            borderRadius: '8px',
                                            border: 'none',
                                            outline: 'none',
                                            margin: '10px',
                                        }}
                                    >
                                        Suspend
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
            <div className="desktop-all-users">
                <header>
                    <div>
                        <h3>All Users</h3>
                    </div>
                    <div style={{width: '300px'}}>
                    <Input
                        type="search"
                        placeholder="Search..."
                        id="password"
                        name="password"
                        onChange={() => {}}
                        variant='search'
                    />
                </div>
                </header>
                <main>
                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Transaction Statistics</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>None</td>
                                <td>none@gmail.com</td>
                                <td>
                                    <p>Total Transactions: 50</p>
                                    <p>Total Amount: 5000</p>
                                    <p>Total Coins: 12</p>
                                </td>
                                <td>
                                    <button 
                                        type="submit" 
                                        onClick={() => {}}
                                        style={{
                                            width: '74px', 
                                            height: '31px', 
                                            color: 'var(--white-text)',
                                            background: 'linear-gradient(285.57deg, #A81414 78.87%, rgba(168, 20, 20, 0) 118.32%)',
                                            borderRadius: '8px',
                                            border: 'none',
                                            outline: 'none',
                                            margin: '10px',
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <button 
                                        type="submit" 
                                        onClick={() => {}}
                                        style={{
                                            width: '74px', 
                                            height: '31px', 
                                            color: 'var(--white-text)',
                                            background: 'linear-gradient(285.57deg, #696969 78.87%, rgba(105, 105, 105, 0) 118.32%)',
                                            borderRadius: '8px',
                                            border: 'none',
                                            outline: 'none',
                                            margin: '10px',
                                        }}
                                    >
                                        Suspend
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Joe</td>
                                <td>joe@gmail.com</td>
                                <td>
                                    <p>Total Transactions: 50</p>
                                    <p>Total Amount: 5000</p>
                                    <p>Total Coins: 12</p>
                                </td>
                                <td>
                                    <button 
                                        type="submit" 
                                        onClick={() => {}}
                                        style={{
                                            width: '74px', 
                                            height: '31px', 
                                            color: 'var(--white-text)',
                                            background: 'linear-gradient(285.57deg, #A81414 78.87%, rgba(168, 20, 20, 0) 118.32%)',
                                            borderRadius: '8px',
                                            border: 'none',
                                            outline: 'none',
                                            margin: '10px',
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <button 
                                        type="submit" 
                                        onClick={() => {}}
                                        style={{
                                            width: '74px', 
                                            height: '31px', 
                                            color: 'var(--white-text)',
                                            background: 'linear-gradient(285.57deg, #696969 78.87%, rgba(105, 105, 105, 0) 118.32%)',
                                            borderRadius: '8px',
                                            border: 'none',
                                            outline: 'none',
                                            margin: '10px',
                                        }}
                                    >
                                        Suspend
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}
export default AllUsers