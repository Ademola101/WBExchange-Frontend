import './styles/globalfilter.scss'
import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

import Input from '../components/Input'

const GlobalFilter = ({ globalFilter, setGlobalFilter }: any) => {
    const [value, setValue] = useState(globalFilter)
    
    const handleChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <div className="global-filter">
            <div className="mobile-global-filter"></div>
            <div className="desktop-global-filter">
                <div>
                    <p>Recent Transactions</p>
                </div>
                <div style={{width: '300px'}}>
                    <Input
                        type="search"
                        placeholder="Search..."
                        id="password"
                        name="password"
                        value={value || ""}
                        onChange={(event: any) => {
                            setValue(event?.target.value)
                            handleChange(event.target.value)
                        }}
                        variant='search'
                    />
                </div>
            </div>
        </div>
    )
}
export default GlobalFilter