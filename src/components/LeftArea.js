import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftArea = () => {
    const activeStyle = {
        fontWeight: 'bold'
    };
    return (
      <div className = "left-area">
        <div className = "desin_system">
          Design
          System
          for ITRM
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
          UI Component
        </div>
        <div className = "ui_component_elements">
          Buttons
          Toggles
          Input Fields
          Dropdown Menus
          ToolTips & Markers
          Notifications
          Modals
          Empty States
          Date Pickers
          Grid List
          Data Tables
        </div>
      </div>
    );
  };

  export default LeftArea;