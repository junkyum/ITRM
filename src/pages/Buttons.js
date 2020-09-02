import React from 'react';
import '../css/Buttons.css'

const Buttons = () => {
    return (
        <div className = "Container">
            <div className = "Tag">
                <div className = "Title_Tag" >
                Buttons
                </div>
                <div className = "Style_guide_Tag">
                UI COMPONENT
                </div>
            </div>
            <div className = "BasicButton_Style">
                <div className = "BasicButton_Style_Tag">
                    Basic Button Style
                </div>
                <div className ="BasicBtns">
                    <span>Big</span>
                    <button className = "B_Btn">Nomal</button>
                    <button className = "B_Btn_H">Hover</button>
                    <button className = "B_Btn_P">Pressed</button>
                    <button className = "B_Btn">Disabled</button>
                    <span>Default</span>
                    <button className = "D_Btn">Nomal</button>
                    <button className = "D_Btn_H">Hover</button>
                    <button className = "D_Btn_P">Pressed</button>
                    <button className = "D_Btn">Disabled</button>
                    <span>Small</span>
                    <button className = "S_Btn">Nomal</button>
                    <button className = "S_Btn_H">Hover</button>
                    <button className = "S_Btn_P">Pressed</button>
                    <button className = "S_Btn">Disabled</button>
                </div>
                <div className ="BasicBtn_StyleGuide">
                    <div className="BasicBtn_StyleGuide_L">
                        <p>Minimal Width(big)     : 130px</p>
                        <p>Minimal Width(defalut) : 100px</p>
                        <p>Minimal Width(small)   : 70px</p>
                    </div>
                    <div className="BasicBtn_StyleGuide_R">
                        <p>Minimal left, right(big)     : 16px</p>
                        <p>Minimal left, right(defalut) : 13px</p>
                        <p>Minimal left, right(small)   : 10px</p>
                    </div>
                </div>
            </div>
            <div className = "RadioBtn_ChkBox_Style">
                <div className = "Radio_Style">
                    <div className ="Radio_Style_L">
                        <label>
                        <input type="radio" value="option1" checked={true} />
                        Nomal Radio Button
                        </label>
                        <label>
                        <input type="radio" value="option1" checked={true} />
                        Hover Radio Button
                        </label>
                        <label>
                        <input type="radio" value="option1" checked={true} />
                        Active Radio Button
                        </label>
                    </div>
                    <div className ="Radio_Style_R">
                        <label>
                        <input type="radio" value="option1" checked={true} />
                        Small Radio Button
                        </label>
                        <label>
                        <input type="radio" value="option1" checked={true} />
                        Hover Radio Button
                        </label>
                        <label>
                        <input type="radio" value="option1" checked={true} />
                        Active Radio Button
                        </label>
                    </div>
                </div>
                <div className = "ChkBox_Style">
                     <div className ="ChkBox_Style_L">
                        <label>
                        <input type="checkbox" value="option1" checked={true} />
                        Nomal Radio Button
                        </label>
                        <label>
                        <input type="checkbox" value="option1" checked={true} />
                        Hover Radio Button
                        </label>
                        <label>
                        <input type="checkbox" value="option1" checked={true} />
                        Active Radio Button
                        </label>
                    </div>
                    <div className ="ChkBox_Style_R">
                        <label>
                        <input type="checkbox" value="option1" checked={true} />
                        Small Radio Button
                        </label>
                        <label>
                        <input type="checkbox" value="option1" checked={true} />
                        Hover Radio Button
                        </label>
                        <label>
                        <input type="checkbox" value="option1" checked={true} />
                        Active Radio Button
                        </label>
                    </div>
                </div>
            </div>
            <div className = "FunctionBtn">

            </div>
        </div>
    )
}

export default Buttons;