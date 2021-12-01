
import React from "react";
/* import "./styles/header.scss"; */

function Header(props) {
  return (
  <header>
      <div id="logo">
      <div className="logo">
      <h1 className="title">
      FOO BAR
      <div className="firstfade">FOO BAR</div>
      <div className="lastfade">FOO BAR</div>
      </h1>
</div>
      </div>
      <div id="slogan">Everybody is kung foo drinking</div>
      <div id="data-time"><p>time:{props.timestamp}</p></div>
      <div id="data-current-revenue">REVENUE</div>
      <button id="report">REPORT</button>
      <button id="settings">SETTINGS</button>
    
  </header>
  )
}


 export default Header;


