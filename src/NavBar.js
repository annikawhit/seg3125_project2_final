import {Link} from 'react-router-dom';

const NavBar = () => {
    
    return (  

        

        <nav className="navbar">
            <h1>Imagine Art Studio</h1>
            <div className="links">
                <Link id="link" to="/seg3125_project2/">Home</Link>
                <Link id="link" to="/seg3125_project2/classes">Classes</Link>
                <Link id="link" to="/seg3125_project2/gallery">Gallery</Link>
                <Link id="link" to="/seg3125_project2/contactus">Contact Us</Link>
            </div>
        </nav>

    );
}

export default NavBar;