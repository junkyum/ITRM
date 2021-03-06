import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Color,Typography,Main,Buttons,Icon,Logo,Inputs,Tooltips  } from 'pages';
import LeftArea from 'components/LeftArea';
import { Container, Header, List } from "semantic-ui-react";
import "../css/App.css";


  function Contents(){
      return ( 
      <div className = "content-area">
          <Route exact path="/" component={Main}/>
          <Switch>
          <Route path="/Color" component={Color}/>
          <Route path="/Typography" component={Typography}/>
          <Route path="/Icon" component={Icon}/>
          <Route path="/Logo" component={Logo}/>
          <Route path="/Buttons" component={Buttons}/>
          <Route path="/Inputs" component={Inputs}/>
          <Route path="/Tooltips" component={Tooltips}/>
          </Switch>
      </div>
      )
  }
  
  
  class App extends Component {
    render() {
      return(
          <div >
            <LeftArea />
            <Contents />
          </div>
        );
      }
  }

export default App;