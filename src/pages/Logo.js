import React from 'react';
import '../css/Logo.css'

const Logo = () => {
    return (
        <div className = "Container">
            <div className = "Tag">
                <div className = "Title_Tag" >
                Logo
                </div>
                <div className = "Style_guide_Tag">
                STYLE GUIDE
                </div>
            </div>
            <div className = "itrm-logo">
                ITRM Logo
            </div>
            <div className = "logo-box">
                <img src = "../../img/ITRM_logo.png"></img>
            </div>
            <div className = "logo-box-blue">
                <img src = "../../img/ITRM_logo_w.png"></img>
            </div>
        </div>
    )
}

export default Logo;