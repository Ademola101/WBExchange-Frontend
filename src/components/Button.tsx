import { ReactNode } from "react"
import './styles/button.scss'

interface ButtonProps {
    children: string | ReactNode
    // className?: string
    variant?: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    isLoading?: boolean
    type?: "submit" | "reset"
    value?: string
    disabled?: boolean
    style?: any

}
const Button: React.FC<ButtonProps> = ({children, variant, onClick, isLoading=false, type="submit", value, disabled=false}) => {
    return (
        <div className={`custom-button`}>
                    <button className={variant} onClick={onClick} type={type} disabled={disabled} value={value}>
            {children}
        </button>
        </div>
    )
}
export default Button