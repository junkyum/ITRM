import React from 'react';
import '../css/Color.css'


function Color_content({name,hexa}){
    return (
            <div className = "Contents">
                <div className = "Round_Color" style = {{background : hexa}}>
                </div>
                <div className = "Contents_Tag">
                    <div className = "Contents_name">
                    {name}
                    </div>
                    <div className = "Contents_hexa">
                    HEX {hexa}
                    </div>
                </div>
            </div>
    )
}
const Color = () =>  {
    return (
        <div className = "Container">
           <div className = "Tag">
              <div className = "Title_Tag" >
              Color
              </div>
              <div className = "Style_guide_Tag">
              STYLE GUIDE
              </div>
           </div>

           <div className = "Primary" >
            <div className = "Primary-color">
             Primary color
            </div>
            <Color_content name = "Sub Marin" hexa = "#1428A0" />
            <Color_content name = "Sub Blue" hexa = "#1A6FC4" />  
            <Color_content name = "Red" hexa = "#FF4F65" />  
               
           </div>
           

           <div className = "Scondary">
            <div className = "Scondary-color">
            Scondary color
            </div>
            <Color_content name = "Sky" hexa = "#29C2FA" />
            <Color_content name = "Sea Foam" hexa = "#1AC7BE" />  
            <Color_content name = "Green" hexa = "#06DD67" />  
            <Color_content name = "Yellow" hexa = "#FFE433" />
            <Color_content name = "Orange" hexa = "#FF974D" />  
            <Color_content name = "Violet" hexa = "#9142FF" />  
           </div>
           
           <div className = "Gray" >
            <div className = "Gray-color">
            Gray color
            </div>
            <Color_content name = "Dark" hexa = "#29C2FA" />
            <Color_content name = "Cool Gray" hexa = "#586174" />  
            <Color_content name = "State Gray" hexa = "#7C92A9" />  
            <Color_content name = "Shark Gray" hexa = "#ABB9C6" />
            <Color_content name = "Silver Gray" hexa = "#C9D8E2" />  
            <Color_content name = "Ice Gray" hexa = "#E8EFF7" />
            <Color_content name = "Cloud Gray" hexa = "#FAFBFD" />  
            <Color_content name = "White" hexa = "#FFFFFF" />
           </div>
        </div>
    );
};

export default Color;