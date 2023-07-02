import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import image from './home_image_2.jpg'

const Home = () => {
    return (  
        <div id="landing_page">
            <img src={image} alt="home_image"></img>
            <div id="text-block">
                <h1>Imagine Art Studio</h1>
                <p class="my-1">Explore the world of art with us.</p>
                <Link class="btn btn-secondary" id="home_btn" to="/classes">View our available classes!</Link>
            </div>
            
        </div>
    );
}

export default Home;