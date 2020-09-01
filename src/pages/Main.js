import React from 'react';
import { ReactSVG } from 'react-svg';


const Main = () => {
  return (
      <div className = "Container-main">
        <ReactSVG src="/icon/visual.svg" width="362" height="241" />
        <span className = "main-title">
          Welcome to use design system of ITRM
        </span>
        <p className = "main-description">
          Design System is a set of interconnected patterns and shared practicescoherently organized to aid in digital product designand development of products such as apps or websites.
        </p>
      </div>
  );
};
export default Main;