import Button from "../components/Button"
import Input from "../components/Input"

const CreateUser = () => {
    const handleChange = () => {}
    const handleClick = () => {}
    return (
        <div className="create-user">
            <div className="mobile-create-user"></div>
            <div className="desktop-create-user">
                <header>
                    <h3>Create New User</h3>
                </header>
                <section className="desktop-form">
                    <form>
                        <Input
                            type="email"
                            placeholder="Enter email address"
                            id="email"
                            label="Email address"
                            name="email"
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="text"
                            placeholder="Enter username"
                            id="username"
                            label="Username"
                            name="username"
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="password"
                            label="Password"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                        <Button 
                            type='submit' 
                            onClick={handleClick} 
                            variant="gold"
                        >
                            Create User
                        </Button>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default CreateUser