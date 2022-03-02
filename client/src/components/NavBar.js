import { useRef } from "react";
import { FaBars, FaTimes, FaHome, FaCalculator, FaUsers, FaInfoCircle } from "react-icons/fa";
import "../stylesheets/nav.css";

function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3 className='logo'><span id='e'>E.</span>mission</h3>
            <nav ref={navRef}>
                <a href="/home"><FaHome/> Home</a>
                <a href="/emissionsform"><FaCalculator/> Calculator</a>
                <a href="/userlist"><FaUsers/> Users</a>
                <a href="/learnmore"><FaInfoCircle/> Learn More</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default NavBar;