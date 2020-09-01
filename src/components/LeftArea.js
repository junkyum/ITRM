import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftArea = () => {
    const activeStyle = {
        fontWeight: 'bold'
    };
    return (
      <div className = "left-area">
        <div className = "design-system">
          <a href="/">
          Design
          System
          for ITRM
          </a>
        </div>
        <div className = "style_guide">
          STYLE GUIDE
        </div>
        <ul className = "style_guide_elements">
        <li><NavLink exact to="/Color" activeStyle={activeStyle}>Color</NavLink></li>
        <li><NavLink exact to="/Typography" activeStyle={activeStyle}>Typography</NavLink></li>
        <li><NavLink exact to="/Icon" activeStyle={activeStyle}>Icon</NavLink></li>
        <li><NavLink exact to="/Logo" activeStyle={activeStyle}>Logo</NavLink></li>
        </ul>
        <div className = "ui_component">
          UI COMPONENT
        </div>
        <ul className = "ui_component_elements">
        <li><NavLink exact to="/Buttons" activeStyle={activeStyle}>Buttons</NavLink></li>
        <li><NavLink exact to="/Inputs" activeStyle={activeStyle}>Inputs & Drop Downs</NavLink></li>
        <li><NavLink exact to="/Tooltips" activeStyle={activeStyle}>Tooltips & Makers</NavLink></li>
        <li><NavLink exact to="/Notifications" activeStyle={activeStyle}>Notifications</NavLink></li>
        <li><NavLink exact to="/Modals" activeStyle={activeStyle}>Modals</NavLink></li>
        <li><NavLink exact to="/Grid List" activeStyle={activeStyle}>Grid List</NavLink></li>
        <li><NavLink exact to="/Data Table" activeStyle={activeStyle}>Data Table</NavLink></li>
        </ul>
      </div>
    );
  };

  export default LeftArea;