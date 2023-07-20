import React from 'react'
import './gallery_popup.css'
import {useTranslation} from "react-i18next";

function gallery_popup(props) {

    return(props.trigger) ? (
        
        <div class="popup">
            <div className='popup_inner'>
                {props.children}

                <button id="popup_btn_cancel" onClick={() => props.setTrigger(false)} class="btn btn-secondary border-0">{props.cancel}</button>
                <button id="popup_btn_send" onClick={() => props.validateFeedback()} class="btn btn-secondary border-0">{props.send}</button>
            </div>
        </div>
    ) : "";
}

export default gallery_popup