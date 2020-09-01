import React from 'react';



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

                 <h2>h2. ITRM Heading</h2>
                 <h3>h3. ITRM Heading</h3>
                 <h4>h4. ITRM Heading</h4>
                 <h5>h5. ITRM Heading</h5>
                 <h6>h6. ITRM Heading</h6>
             </div>
             <div className ="Text_style">
                 
             </div>    
            </div>
        </div>
    );
};

export default Typography;