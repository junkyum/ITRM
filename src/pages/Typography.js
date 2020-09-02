import React from 'react';
import '../css/Typography.css'

const Typography = () => {
    return (
        <div>
            <div className = "Tag">
              <div className = "Title_Tag" >
              Typography
              </div>
              <div className = "Style_guide_Tag">
              style guide
              </div>
           </div>
            <div className = "Font_group">
                <div className = "Font_family">
                <p>SamsungOneFont</p>
                <p>맑은 고딕</p>
                </div>
                <div className = "Font_weight">
                    <div>
                    <p>One 400</p>
                    <p>Weight - Regular</p>
                    <p>Regular</p>
                    <p>Weight - Regular</p>
                    </div>
                    <div>
                    <strong>One 700</strong>
                    <p>Weight - Bold</p>
                    <strong>Bold</strong>
                    <p>Weight - Regular</p>
                    </div>
                </div>
            </div>
            <div className = "Font_style">
                <div className = "Font_style_Tag">
                Font Style
                </div>
             <div className = "H_style">
                 <h1>h1. ITRM Heading</h1>
                 <p>H1 bold / size 36px / line 48px / spacing -1.5px</p>
                 <h2>h2. ITRM Heading</h2>
                 <p>H2 bold / size 28px / line 40px / spacing -1px</p>
                 <h3>h3. ITRM Heading</h3>
                 <p>H3 bold / size 24px / line 34px / spacing -0.5px</p>
                 <h4>h4. ITRM Heading</h4>
                 <p>H1 bold / size 18px / line 26px / spacing -0.5px</p>
                 <h5>h5. ITRM Heading</h5>
                 <p>H1 bold / size 14px / line 18px / spacing 0px</p>
                 <h6>h6. ITRM Heading</h6>
                 <p>H1 bold / size 12px / line 16px / spacing 0px</p>

             </div>
             <div className ="Text_style">
                 <div className = "Text_style_left">
                    <strong>
                    Body Text
                    </strong>
                    <strong>
                    Caption Text   
                    </strong>
                    <strong>
                    Table Text    
                    </strong>
                    <strong>
                    Information items 
                    </strong>

                 </div>
                 <div className = "Text_style_right">
                 <p>Our semiconductor solutions are the engines that power today’s devices.</p>
                 <p>Body     size 14px  /  line 22px / spacing 0px</p>
                 <p>State: Normal</p>
                 <p>size 11px  /  line 16px / spacing 0px</p>
                 <p>Network Device</p>
                 <p>size 12px  /  line 18px / spacing 0px</p>
                 <p>Title: <strong>Information</strong></p>
                 <p>Font Size : <strong>14px</strong></p>
                 <p>Font Line Spacing: <strong>28px</strong></p>
                 <p>페이지 타이틀, 섹션 타이틀, 모듈 타이틀 등 모든 타이틀에는 Samsung One Font를 사용합니다.</p>
                <p>본문과 테이블에 포함되는 텍스트는 맑은 고딕 Font를사용합니다.</p>
                 </div>
             </div>    
            </div>
        </div>
    );
};

export default Typography;