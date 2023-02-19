import './styles/createuser.scss'
import Button from "../components/Button"
import Input from "../components/Input"

const CreateUser = () => {
    const handleChange = () => {}
    const handleClick = () => {}
    return (
        <div className="create-user">
            <div className="mobile-create-user">
                {/* <header>
                    <h3>Create New User</h3>
                </header> */}
                <section className="desktop-form">
                    <form>
                        <Input
                            type="email"
                            placeholder="johndoe@mail.com"
                            id="email"
                            label="Email address"
                            name="email"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="text"
                            placeholder="johndoe"
                            id="username"
                            label="Username"
                            name="username"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="password"
                            label="Password"
                            name="password"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <section
                                style={{width: '136px'}}>
                            <Button 
                                type='submit' 
                                onClick={handleClick} 
                                variant="gold"
                            >
                                Create User
                            </Button>
                        </section>
                    </form>
                </section>
            </div>
            <div className="desktop-create-user">
                <header>
                    <h3>Create New User</h3>
                </header>
                <section className="desktop-form">
                    <form>
                        <Input
                            type="email"
                            placeholder="johndoe@mail.com"
                            id="email"
                            label="Email address"
                            name="email"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="text"
                            placeholder="johndoe"
                            id="username"
                            label="Username"
                            name="username"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <Input
                            type="password"
                            placeholder="********"
                            id="password"
                            label="Password"
                            name="password"
                            onChange={handleChange}
                            required
                            variant='black'
                        />
                        <section
                                style={{width: '136px'}}>
                            <Button 
                                type='submit' 
                                onClick={handleClick} 
                                variant="gold"
                            >
                                Create User
                            </Button>
                        </section>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default CreateUser