import React from 'react';
import { ReactSVG } from 'react-svg'
import '../css/Icon.css'

const Icon = () => {
    return (
        <div className = "Container">
            <div className = "Tag">
                <div className = "Title_Tag" >
                Icon
                </div>
                <div className = "Style_guide_Tag">
                style guide
                </div>
            </div>
            <div className = "Tag">
            Basic Icon
            </div>
            <div className = "Icon">
                <ul>
                <li><ReactSVG src="/icon/activity.svg" /></li>
                <li><ReactSVG src="/icon/airplay.svg" /></li>
                <li><ReactSVG src="/icon/alert-circle.svg" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Icon;
