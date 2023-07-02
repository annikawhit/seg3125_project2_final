import {Link} from 'react-router-dom';

const NavBar = () => {
    
    return (  

        

        <nav className="navbar">
            <h1>Imagine Art Studio</h1>
            <div className="links">
                <Link id="link" to="/">Home</Link>
                <Link id="link" to="/classes">Classes</Link>
                <Link id="link" to="/gallery">Gallery</Link>
                <Link id="link" to="/contactus">Contact Us</Link>
            </div>
        </nav>

    );
}

export default NavBar;