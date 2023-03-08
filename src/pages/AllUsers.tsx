import './styles/allusers.scss'
import Input from "../components/Input"
import { getUserData } from '../services/userdata'
import { useUser } from '../hooks/user'

import { useQuery } from 'react-query'

const AllUsers = () => {
    const { name, email } = useUser()
    const { data, isLoading, error, isSuccess } = useQuery('userdata', getUserData, {
        keepPreviousData: true,
        staleTime: Infinity,
    })

    if (isLoading) {
        console.log('loading')
    }
    if (error) {
        return <div>error</div>
    }
    if (isSuccess && data) {
        const mapdata = Object.values(data.result)?.map((results: any, index: number) => (
            console.log(results.t_trans)
        ))
    }
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
                        {isSuccess ? Object?.keys(data?.result)?.map((results: any, index: number) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>
                                        <p>Total Transactions: {results.t_trans}</p>
                                        <p>Total Amount: {results.t_amount}</p>
                                        <p>Total Coins: {results.t_coin}</p>
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
                        )): null}
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
                        {isSuccess ? Object?.keys(data?.result)?.map((results: any, index: number) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>
                                        <p>Total Transactions: {results.t_trans}</p>
                                        <p>Total Amount: {results.t_amount}</p>
                                        <p>Total Coins: {results.t_coin}</p>
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
                        )): null}
                    </table>
                </main>
            </div>
        </div>
    )
}
export default AllUsers