import React from 'react';
import '../css/Typography.css'

const Typography = () => {
    return (
        <div className = "Container">
            <div className = "Tag">
              <div className = "Title_Tag" >
              Typography
              </div>
              <div className = "Style_guide_Tag">
              STYLE GUIDE
              </div>
            </div>
            <div className = "Primary-typo">
                <span className = "l">
                    Font Family
                </span>
                <span>
                    Font Weight
                </span>
            </div>
            <div className = "Font-group">
                <div className = "Font-family">
                    <span className = "l">SamsungOneFont</span>
                    <span className = "r">맑은 고딕</span>
                </div>
                <div className = "Font-weight">
                    <ul>
                        <li>
                            <span className = "one400">One 400</span>
                            <p>Weight - Regular</p>
                        </li>
                        <li>
                            <span className = "one700">One 700</span>
                            <p>Weight - Regular</p>
                        </li>
                        <li>
                            <span className = "r">Regular</span>
                            <p>Weight - Regular</p>
                        </li>
                        <li>
                            <span className = "b">Bold</span>
                            <p>Weight - Bold</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className = "Font-style">
                <div className = "Font-style-Tag">
                    Font Style
                </div>
                <div className = "H-style">
                    <h1>h1. ITRM Heading</h1>
                    <p>H1 bold / size 36px / line 48px / spacing -1px</p>
                    <h2>h2. ITRM Heading</h2>
                    <p>H2 bold / size 28px / line 40px / spacing -0.5px</p>
                    <h3>h3. ITRM Heading</h3>
                    <p>H3 bold / size 24px / line 34px / spacing -0.5px</p>
                    <h4>h4. ITRM Heading</h4>
                    <p>H1 bold / size 18px / line 26px / spacing 0px</p>
                    <h5>h5. ITRM Heading</h5>
                    <p>H1 bold / size 14px / line 18px / spacing 0px</p>
                    <h6>h6. ITRM Heading</h6>
                    <p>H1 bold / size 12px / line 16px / spacing 0px</p>
                </div>
                <div className ="Text-style">
                    <div>
                        <span>
                            Body Text
                        </span>
                        <p className = "body">
                            Our semiconductor solutions are the engines that power today’s devices.
                        </p>
                        <p className = "b">
                            Body size 14px / line 22px / spacing 0px
                        </p>
                    </div>
                    <div>
                        <span className = "caption">
                            Caption Text
                        </span>
                        <p className = "caption">
                            State: Normal
                        </p>
                        <p className = "b">
                            size 11px  /  line 16px / spacing 0px
                        </p>
                    </div>
                    <div>
                        <span className = "table">
                            Table Text
                        </span>
                        <p className = "table">
                            Network Device
                        </p>
                        <p className = "b">
                            size 12px  /  line 18px / spacing 0px
                        </p>
                    </div>
                    <div>
                        <span className = "item">
                            Information items
                        </span>
                        <p className = "item">
                            Title: &nbsp;<span className = "b">Information</span><br />Font Size: &nbsp;<span className = "b">14px</span><br />Font Line Spacing: &nbsp;<span className = "b">28px</span>
                        </p>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Typography;