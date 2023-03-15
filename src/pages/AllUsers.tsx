import './styles/allusers.scss'
import Input from "../components/Input"
import { getAllUsers } from '../services/listusers'
import { useAdmin } from '../hooks/admin'
import Spinner from '../components/Spinner'

import { useQuery } from 'react-query'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createBrowserHistory } from "history";
import { useAuth } from '../hooks/auth'


const browserHistory = createBrowserHistory()
const MySwal = withReactContent(Swal)

const AllUsers = () => {
    // const { name, email } = useAdmin()
    const { isLoggedIn } = useAuth('admin')
    const { data, isLoading, error, isSuccess } = useQuery('allusers', getAllUsers, {
        keepPreviousData: true,
    })
    console.log(data)

    if (isLoading) {
        return <Spinner />
    }
    if (error) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        Toast.fire({
            icon: 'error',
            title: 'An error occured'
        })
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
                        {isSuccess ? Object?.values(data?.result)?.map((results: any, index: number) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{results.name}</td>
                                    <td>{results.email}</td>
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
                                                cursor: 'pointer,'
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
                                                cursor: 'pointer,'
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
                        {isSuccess ? Object?.values(data?.result)?.map((results: any, index: number) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{results?.name}</td>
                                    <td>{results?.email}</td>
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
                                                cursor: 'pointer,'
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
                                                cursor: 'pointer,'
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