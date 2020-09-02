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
                    
                    <span>Default</span>
                    <button className = "D_Btn">Nomal</button>
                    
                    <span>Small</span>
                    <button className = "S_Btn">Nomal</button>
                    
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
                    </div>
                    <div className ="Radio_Style_R">
                        <label>
                        <input type="radio" value="option1" name="SmallRadio" />
                        Small Radio Button
                        </label>
                    </div>
                </div>
                <div className = "ChkBox_Style">
                     <div className ="ChkBox_Style_L">
                        <label>
                        <input type="checkbox" value="option1"  />
                        Nomal Radio Button
                        </label>
                    </div>
                    <div className ="ChkBox_Style_R">
                        <label>
                        <input type="checkbox" value="option1"  />
                        Small Radio Button
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
                    <div className = "test" >
                    <ReactSVG 
                    src="/icon/arrow-up.svg" 
                    beforeInjection={(svg) => {
                        svg.setAttribute("width", "14");
                        svg.setAttribute("height", "14");
                    }}
                    />
                    </div>
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
                        <li><ReactSVG src="/icon/arrow-left-circle.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/arrow-right-circle.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/excel.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/powerpoint.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                        <li><ReactSVG src="/icon/word.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </li>
                    </ul>
                </div>
                <div className = "Link_Btn">
                    <span>Text Link</span> <a>Text Link</a> 
                    <p>Our semiconductor <span>solutions</span> are the engines that power today’s devices.</p>
                    <p>Our semiconductor <a>solutions</a> are the engines that power today’s devices.</p>
                </div>
                <div className = "Function_Btn">
                    <div className ="Function_Btn_ViewList">
                        <span>View List</span>
                        <button>
                        <ReactSVG src="/icon/list.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </button>
                        <button>
                        <ReactSVG src="/icon/list.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </button>
                        <button>
                        <ReactSVG src="/icon/list.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </button>
                    </div>
                    <div className ="Function_Btn_Download">
                        <span>Download</span>
                        <button>
                        <ReactSVG src="/icon/download.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </button>
                        <button>
                        <ReactSVG src="/icon/download.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </button>
                        <button>
                        <ReactSVG src="/icon/download.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </button>
                        <button >
                        <ReactSVG src="/icon/download.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        Execl
                        </button>
                    </div>
                    <div className ="Function_Btn_Upload">
                        <span>Upload</span>
                        <CopyToClipboard 
                        text = {"<img src='/icon/upload.svg' width='300' height='300'>"}
                        >
                        <button>
                        <ReactSVG src="/icon/upload.svg"
                        onClick={() => {
                           
                        }}
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </button>
                        </CopyToClipboard>
                        <button>
                        <ReactSVG src="/icon/upload.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </button>
                        <button>
                        <ReactSVG src="/icon/upload.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "20");
                            svg.setAttribute("height", "20");
                        }}/>
                        </button>
                        <button >
                        <ReactSVG src="/icon/upload.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute("width", "16");
                            svg.setAttribute("height", "16");
                        }}/>
                        Excel
                        </button>
                    </div>
                </div>
                <div className = "Toggle">
                    <div>
                        <span>Bic</span>
                        <Toggle
                        icons={false}
                        className = "ToggleBic"
                        />
                        <Toggle
                        icons={false}
                        className = "ToggleBic"
                        defaultChecked={true}/>
                    </div>
                    <div>
                        <span>Defalut</span>
                        <Toggle
                        icons={false} />
                        <Toggle
                        icons={false}
                        defaultChecked={true}/>
                    </div>
                    <div>
                        <span>Small</span>
                        <Toggle
                        icons={false}
                        className = "ToggleSmall"
                        />
                        <Toggle
                        icons={false}
                        className = "ToggleSmall"
                        defaultChecked={true}/>
                        </div>
                    </div>
                <div className = "ListMore">
                    <div className = "ListMoreBox">
                    <span><b>More List</b></span> <span>50/18000</span>
                    </div>
                </div>
                <div className = "Loader">
                    <CircularProgress />
                </div>
                <div className = "Progress">
                    <LinearProgress />
                </div>
            </div>
        </div>
    )
}

export default Buttons;