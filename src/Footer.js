import {Link} from 'react-router-dom';

const Footer = () => {
    
    return (  

        

        <div class="container" id="footer">
            <footer class=" my-4">
                <div className="links">
                    <Link id="link" to="/seg3125_project2_final">Home</Link>
                    <Link id="link" to="/seg3125_project2_final/classes">Classes</Link>
                    <Link id="link" to="/seg3125_project2_final/gallery">Gallery</Link>
                    <Link id="link" to="/seg3125_project2_final/contactus">Contact Us</Link>
                </div>
                <p className="footer_text">&copy; 2023 Imagine Art Studio, Inc</p>
            </footer>
        </div>
    );

}

export default Footer;