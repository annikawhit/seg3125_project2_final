import {Link} from 'react-router-dom';

const NavBar = () => {
    
    return (  

        

        <nav className="navbar">
            <h1>Imagine Art Studio</h1>
            <div className="links">
                <Link id="link" to="/seg3125_project2_final">Home</Link>
                <Link id="link" to="/seg3125_project2_final/classes">Classes</Link>
                <Link id="link" to="/seg3125_project2_final/gallery">Gallery</Link>
                <Link id="link" to="/seg3125_project2_final/contactus">Contact Us</Link>
            </div>
        </nav>

    );
}

export default NavBar;