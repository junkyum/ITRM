import React from 'react';
import { ReactSVG } from 'react-svg'
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
                <div className = "RadioBtn_ChkBox_Style_Tag">
                    Radio Button & Check Box
                </div>
                <div className = "Radio_Style">
                    <div className ="Radio_Style_L">
                        <label>
                        <input type="radio" value="option1" name ="NomalRadio" />
                        Nomal Radio Button
                        </label>
                        <label>
                        <input type="radio" value="option1" name ="NomalRadio" />
                        Hover Radio Button
                        </label>
                        <label>
                        <input type="radio" value="option1" name ="NomalRadio" />
                        Active Radio Button
                        </label>
                    </div>
                    <div className ="Radio_Style_R">
                        <label>
                        <input type="radio" value="option1" name="SmallRadio" />
                        Small Radio Button
                        </label>
                        <label>
                        <input type="radio" value="option1" name="SmallRadio" />
                        Hover Radio Button
                        </label>
                        <label>
                        <input type="radio" value="option1" name="SmallRadio" />
                        Active Radio Button
                        </label>
                    </div>
                </div>
                <div className = "ChkBox_Style">
                     <div className ="ChkBox_Style_L">
                        <label>
                        <input type="checkbox" value="option1"  />
                        Nomal Radio Button
                        </label>
                        <label>
                        <input type="checkbox" value="option1"  />
                        Hover Radio Button
                        </label>
                        <label>
                        <input type="checkbox" value="option1"  />
                        Active Radio Button
                        </label>
                    </div>
                    <div className ="ChkBox_Style_R">
                        <label>
                        <input type="checkbox" value="option1"  />
                        Small Radio Button
                        </label>
                        <label>
                        <input type="checkbox" value="option1"  />
                        Hover Radio Button
                        </label>
                        <label>
                        <input type="checkbox" value="option1"  />
                        Active Radio Button
                        </label>
                    </div>
                </div>
            </div>
            <div className = "FunctionBtn">
                <div className = "Sort_Btn">
                    <button >
                    <ReactSVG 
                    src="/icon/arrow-up.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    <ReactSVG 
                    src="/icon/arrow-up.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    <ReactSVG 
                    src="/icon/arrow-up.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    <ReactSVG 
                    src="/icon/arrow-up.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    A
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    A
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    A
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    A
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    Z
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    Z
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    Z
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>
                    <button >
                    Z
                    <ReactSVG 
                    src="/icon/arrow-down.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </button>

                </div>

                <div className = "Icon_Btn">
                    <ul>
                        <li><ReactSVG src="/icon/settings.svg" 
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/plus.svg" 
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/minus.svg" 
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/x.svg" 
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/log-out.svg" 
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/search.svg" 
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/info.svg" 
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/chevron-left.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/chevron-right.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/chevron-right.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                    </ul>
                </div>
                <div className = "Link_Btn">

                </div>
                <div className = "Function_Btn">
                    
                </div>
                <div className = "Toggle">
                    
                </div>
                <div className = "ListMore">
                    
                </div>
                <div className = "Loader">
                    
                </div>
                <div className = "Progress">
                    
                </div>
            </div>
        </div>
    )
}

export default Buttons;