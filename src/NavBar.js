import {Link} from 'react-router-dom';

const NavBar = () => {
    
    return (  

        

        <nav className="navbar">
            <h1>Imagine Art Studio</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/classes">Classes</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contactus">Contact Us</Link>
            </div>
        </nav>

    );
}

export default NavBar;