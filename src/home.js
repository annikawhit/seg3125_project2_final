import image from './home_image_2.jpg'

const Home = () => {
    return (  
        <div id="landing_page">
            <img src={image} alt="home_image"></img>
            <div id="text-block">
                <h1>Imagine Art Studio</h1>
                <p class="my-1">Explore the world of art with us.</p>
                <a class="btn btn-secondary" id="home_btn" href="book1.html">View our available classes!</a>
            </div>
            
        </div>
    );
}

export default Home;