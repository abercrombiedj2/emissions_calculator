import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../stylesheets/nav.css";

function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>E.mission</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">You</a>
                <a href="/#">Compare</a>
                <a href="/#">Learn More</a>
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