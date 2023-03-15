import './styles/inputfilter.scss'
import Input from "./Input"
import Button from "./Button"

import { useState } from "react"
import { useAsyncDebounce } from "react-table"

const InputFilter = ({ globalFilter, setGlobalFilter}: any) => {
    const [value, setValue] = useState(globalFilter)
    const [coinValue, setCoinValue] = useState(globalFilter)


    const handleChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 200)


    const handleClick = () => {}

    const disabled = !value || !coinValue
    return (
        <div className="input-filter">
            <section className="mobile-input-filter">
                <form>
                    <Input 
                        type='number'
                        placeholder='USD'
                        id='USD-Amount'
                        label='Enter Amount in USD'
                        name='USD-Amount'
                        value={value || ""}
                        onChange={(event: any) => {
                            setValue(event?.target?.value)
                            handleChange(event?.target?.value)
                        }}
                    />
                    <Input 
                        type='number'
                        step="0.0001"
                        placeholder='Coin'
                        id='Coin-Amount'
                        label='Enter Amount in Coin'
                        name='Coin-Amount'
                        value={coinValue || ""}
                        onChange={(event: any) => {
                            setCoinValue(event?.target?.value)
                            handleChange(event?.target?.value)
                        }}
                    />
                    <Button type='submit' onClick={handleClick} variant='gold' disabled={disabled}>Submit</Button>
                </form>
            </section>
            <section className="desktop-input-filter">
                <form>
                    <Input 
                        type='number'
                        placeholder='USD'
                        id='USD-Amount'
                        label='Enter Amount in USD'
                        name='USD-Amount'
                        value={value || ""}
                        onChange={(event: any) => {
                            setValue(event?.target?.value)
                            handleChange(event?.target?.value)
                        }}
                    />
                    <Input 
                        type='number'
                        step="0.0001"
                        placeholder='Coin'
                        id='Coin-Amount'
                        label='Enter Amount in Coin'
                        name='Coin-Amount'
                        value={coinValue || ""}
                        onChange={(event: any) => {
                            setCoinValue(event?.target?.value)
                            handleChange(event?.target?.value)
                        }}
                    />
                    <Button type='submit' onClick={handleClick} variant='gold' disabled={disabled}>Submit</Button>
                </form>
            </section>
        </div>
    )
}
export default InputFilter