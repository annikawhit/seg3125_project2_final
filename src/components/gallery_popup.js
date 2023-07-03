import React from 'react'
import './gallery_popup.css'

function gallery_popup(props) {
    return(props.trigger) ? (
        <div class="popup">
            <div className='popup_inner'>
                
                {props.children}
                <button id="popup_btn_cancel" onClick={() => props.setTrigger(false)} class="btn btn-secondary border-0">Cancel</button>
                <button id="popup_btn_send" onClick={() => props.setTrigger(false)} class="btn btn-secondary border-0">Send</button>
            </div>
        </div>
    ) : "";
}

export default gallery_popup