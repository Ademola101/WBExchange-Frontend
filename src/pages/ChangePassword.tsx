import './styles/changepassword.scss'
import Input from '../components/Input'
import Button from '../components/Button'

const ChangePassword = ({ isActive } : any) => {
    const handleChange = () => {}
    const handleClick = () => {}

    return (
        <div className="change-password">
            <div className="mobile-change-password">
                {/* <header>
                    <h3>Password Reset</h3>
                </header> */}
                <section className="mobile-form">
                    <form autoComplete='off'>
                        <Input
                            type="password"
                            placeholder="********"
                            id="old-password"
                            label="Old Password"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="new-password"
                            label="New Password"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="confirm-password"
                            label="Confirm New Password"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                        <Button 
                            type='submit' 
                            onClick={handleClick} 
                            variant="gold"
                        >
                            Modify
                        </Button>
                    </form>
                </section>
            </div>
            <div className="desktop-change-password">
                <header>
                    <h3>Password Reset</h3>
                </header>
                <section className="desktop-form">
                    <form autoComplete='off'>
                        <Input
                            type="password"
                            placeholder="********"
                            id="old-password"
                            label="Old Password"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="new-password"
                            label="New Password"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="confirm-password"
                            label="Confirm New Password"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                        <Button 
                            type='submit' 
                            onClick={handleClick} 
                            variant="gold"
                        >
                            Modify
                        </Button>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default ChangePassword