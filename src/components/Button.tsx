import { ReactNode } from "react"
import './styles/button.scss'
import { ThreeDots } from "react-loader-spinner"

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
                {isLoading ? 
                    <ThreeDots 
                        height="20" 
                        width="20" 
                        radius="9"
                        color="#4fa94d" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        // wrapperClassName=""
                        visible={true}
                     /> : null
                }
            </button>
        </div>
    )
}
export default Button