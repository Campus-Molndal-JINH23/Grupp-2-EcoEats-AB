import Links from "./links/Links"
import "./navbar.module.css"

const Navbar = () => {
    return (
        <div className="styles.container">
            <div> Logo </div>
            <div> 
                <Links /> 
            </div>
        </div>
    )
}

export default Navbar