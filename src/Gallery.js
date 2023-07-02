import image1 from './gallery1.jpeg'
import image2 from './gallery2.jpeg'
import image from './home_image_2.jpg'
import {Link} from 'react-router-dom';
import {FaArrowAltCircleRight} from "react-icons/fa"
import {FaArrowAltCircleLeft} from "react-icons/fa"

const Gallery = () => {
    return (  
        <div className="gallery">
            <h1>Gallery</h1>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="rowGallery" id="gallery">
                            <div id="image">
                                <img class="d-block w-100" src={image1} alt="First slide"></img>
                            </div>
                            
                            <div>
                                <h3 id="text">Student Name: Josephine</h3>
                                <h3 id="text">Class Name: Watercolours for beginners</h3>
                                <p id="text">Description: I was able to create this watercolour painting of a bird during my first set of lessons at Imagine Art Studio.</p>
                                <Link class="btn btn-secondary border-0" id="link" to="/classes">Send a Comment to the Artist</Link>
                            </div>
                        </div>
                        
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={image2} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={image} alt="Third slide"></img>
                    </div>
                </div>
                <a id="gallery_arrow"  class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <div><FaArrowAltCircleLeft size={35}/></div>
                </a>
                <a id="gallery_arrow" class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <div><FaArrowAltCircleRight size={35}/></div>
                </a>
            </div>
        </div>
    );
}

export default Gallery;