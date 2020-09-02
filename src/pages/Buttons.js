import React from 'react';
import { ReactSVG } from 'react-svg'
import Toggle from 'react-toggle'
import {CircularProgress,LinearProgress} from '@material-ui/core';
import {Alert} from '@material-ui/lab'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../css/Buttons.css'
import '../css/react-toggle.css'

const Buttons = () => {
    return (
        <div className = "Container">
            <div className = "Tag">
                <div className = "Title_Tag" >
                Buttons
                </div>
                <div className = "Ui_Component_Tag">
                UI COMPONENT
                </div>
            </div>
            <div className = "background-img">
                <div className = "button-b">
                    <button className = "B_Btn">Nomal</button>
                </div>
                <div className = "button-d">
                    <button className = "D_Btn">Nomal</button>
                </div>
                <div className = "button-s">
                    <button className = "S_Btn">Nomal</button>
                </div>
                <div className = "radio-d">
                    <input type="radio" value="option1" name ="NomalRadio" className = "D_Radio" />
                </div>
            </div>
        </div>
    )
}

export default Buttons;