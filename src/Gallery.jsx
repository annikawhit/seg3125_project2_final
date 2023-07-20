import image1 from './images/gallery1.jpeg'
import image2 from './images/gallery2.jpeg'
import image3 from './images/gallery3.jpeg'
import {Link} from 'react-router-dom';
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import Popup from './components/gallery_popup';
import {useState} from 'react';
import {useTranslation} from "react-i18next";


const Gallery = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const {t,i18n} = useTranslation();

    const handleLangClick = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (  
        <div className="gallery">
            <div className="row" id="langRow">
                <button onClick={()=>handleLangClick('en')} className="btn border-0" id="language">EN</button>
                <button onClick={()=>handleLangClick('fr')} className="btn border-0" id="language">FR</button>
            </div>
            
            <h1>{t('gallery')}</h1>

            <CCarousel controls>
                    <CCarouselItem>
                        <div className="rowGallery" id="gallery">
                                <div id="image">
                                    <img class="d-block w-200" src={image1} alt="Watercolour painting of a bird"></img>
                                </div>
                                
                                <div>
                                    <h3 id="text">{t('studentName1')}</h3>
                                    <h3 id="text">{t('className1')}</h3>
                                    <p id="text">{t('description1')}</p>
                                    <button onClick={() => setButtonPopup(true)} alt="Send Feedback" role="button" class="btn btn-secondary border-0" id="link" to="/classes">{t('sendFeedback')}</button>
                                    
                                </div>
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className="rowGallery" id="gallery">
                                <div id="image">
                                    <img class="d-block w-100" src={image2} alt="Green and orange pottery cup"></img>
                                </div>
                                
                                <div>
                                    <h3 id="text">{t('studentName2')}</h3>
                                    <h3 id="text">{t('className2')}</h3>
                                    <p id="text">{t('description2')}</p>
                                    <button onClick={() => setButtonPopup(true)} alt="Send Feedback" role="button" class="btn btn-secondary border-0" id="link" to="/classes">{t('sendFeedback')}</button>
                                </div>
                            </div>
                    </CCarouselItem>
                    <CCarouselItem>
                    <div className="rowGallery" id="gallery">
                            <div id="image">
                                <img class="d-block w-100" src={image3} alt="Pencil drawing of a bird"></img>
                            </div>
                            
                            <div>
                                <h3 id="text">{t('studentName3')}</h3>
                                <h3 id="text">{t('className3')}</h3>
                                <p id="text">{t('description3')}</p>
                                <button onClick={() => setButtonPopup(true)} alt="Send Feedback" role="button" class="btn btn-secondary border-0" id="link" to="/classes">{t('sendFeedback')}</button>
                            </div>
                        </div>
                    </CCarouselItem>
            </CCarousel> 

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} cancel={t('cancel')} send={t('send')}>
                
                    
                        <h3>{t('sendFeedback')}</h3>
                        <input type="text" class="form-control"  role="input field" placeholder={t('feedback')}></input>
            </Popup>

        </div>
    );
}

export default Gallery;