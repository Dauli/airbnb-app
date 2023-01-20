import Logo from "../images/airbnb-logo.png"

function Navbar() {
    return(
        <nav className="navbar">
            <img src={Logo} alt="airbnb-logo" className="App-logo" />
        </nav>
    )
}

export default Navbar