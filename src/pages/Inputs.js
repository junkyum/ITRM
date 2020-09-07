import React from 'react';
import '../css/Inputs.css';

function List () {

    return <div>리스트지롱</div>
}

function Handling (IsOpend){
    return  (
        <List />
    )
}

const IsOpend ={
    IsOpend : false
}

const Inputs = () => {
    return (
        <div className = "Container">
            <div className = "Tag">
                <div className = "Title_Tag" >
                Inputs & Drop Downs
                </div>
                <div className = "Style_guide_Tag">
                STYLE GUIDE
                </div>
            </div>
            <div className = "background-input">
                <div className = "input-text-b">
                    <input type="text" className = "input-b" placeholder="Place holder" />
                </div>
                <div className = "input-text-d">
                    <input type="text" className = "input-d" placeholder="Place holder" />
                </div>
                <div className = "input-text-s">
                    <input type="text" className = "input-s" placeholder="Place holder" />
                </div>
                <div className = "dropdown-b">
                    <div className="dropdown">
                    <button onClick = {Handling}>Mouse over me</button>
                    
                    </div>
                </div>
                <div className = "dropdown-d">
                
                </div>
                <div className = "dropdown-s">

                </div>
                
            </div>
        </div>
    )
}

export default Inputs;