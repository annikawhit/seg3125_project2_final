import image1 from './images/gallery1.jpeg'
import image2 from './images/gallery2.jpeg'
import image3 from './images/gallery3.jpeg'
import {Link} from 'react-router-dom';
import {FaArrowAltCircleRight} from "react-icons/fa"
import {FaArrowAltCircleLeft} from "react-icons/fa"
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import Popup from './components/gallery_popup';
import {useState} from 'react';


const Gallery = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (  
        <div className="gallery">
            <h1>Gallery</h1>

            <CCarousel controls>
                    <CCarouselItem>
                        <div className="rowGallery" id="gallery">
                                <div id="image">
                                    <img class="d-block w-100" src={image1} alt="First slide"></img>
                                </div>
                                
                                <div>
                                    <h3 id="text">Student Name: Josephine</h3>
                                    <h3 id="text">Class Name: Watercolours painting for beginners</h3>
                                    <p id="text">Description: I was able to create this watercolour painting of a bird during my first set of lessons at Imagine Art Studio. Thank you to my instructors for all their help.</p>
                                    <button onClick={() => setButtonPopup(true)} class="btn btn-secondary border-0" id="link" to="/classes">Send Feedback</button>
                                    
                                </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="rowGallery" id="gallery">
                                <div id="image">
                                    <img class="d-block w-100" src={image2} alt="First slide"></img>
                                </div>
                                
                                <div>
                                    <h3 id="text">Student Name: Helen</h3>
                                    <h3 id="text">Class Name: Pottery for advanced students</h3>
                                    <p id="text">Description: Last week, I took my first advanced class at Imagine Art Studio. During the class, the instructor helped me create this beautiful piece of pottery.</p>
                                    <button onClick={() => setButtonPopup(true)} class="btn btn-secondary border-0" id="link" to="/classes">Send Feedback</button>
                                </div>
                            </div>
                    </CCarouselItem>
                    <CCarouselItem>
                    <div className="rowGallery" id="gallery">
                            <div id="image">
                                <img class="d-block w-100" src={image3} alt="First slide"></img>
                            </div>
                            
                            <div>
                                <h3 id="text">Student Name: Leo</h3>
                                <h3 id="text">Class Name: Drawing for intermediate students</h3>
                                <p id="text">Description: So far I have taken a few different drawing classes at this art studio and I can already see much improvement in my drawing technique.</p>
                                <button onClick={() => setButtonPopup(true)} class="btn btn-secondary border-0" id="link" to="/classes">Send Feedback</button>
                            </div>
                        </div>
                    </CCarouselItem>
            </CCarousel> 

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Send Feedback</h3>
                <input type="text" class="form-control" placeholder="Add your feedback here"></input>
            </Popup>

        </div>
    );
}

export default Gallery;