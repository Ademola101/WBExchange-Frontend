import './styles/input.scss'

interface InputProps {
    type: string
    placeholder?: string
    id: string
    name: string
    value?: any
    onChange: (event: React.ChangeEvent) => void
    label?: string
    variant?: string
    required?: boolean
    error?: any
}
const Input: React.FC<InputProps> = ({type, placeholder, id, name, value, onChange, label, variant, required, error}) => {
    return (
        <div className={`custom-input`}>
            <label htmlFor={id} className={variant}>{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                id={id} 
                name={name} 
                value={value} 
                onChange={onChange} 
                className={variant} 
                required={required}
            />
            {error && <span>{error}</span>}
        </div>
    )
}
export default Input