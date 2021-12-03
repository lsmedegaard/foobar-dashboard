
import React from "react";
/* import "./styles/header.scss"; */

function Header(props) {
  return (
  <header>
      <div id="logo">
      <div className="logo">
      <h1 className="title">
      FOO BAR
{/*       <div className="firstfade">FOO BAR</div>
      <div className="lastfade">FOO BAR</div> */}
      </h1>
</div>
      </div>
      <div id="slogan">Everybody was kung foo drinking</div>
      <div id="data-time"><p>TIME:{props.time}</p></div>
      <div id="data-current-revenue">REVENUE:{props.revenue} </div>
      <button id="report">REPORT</button>
      <button id="settings">SETTINGS</button>
    
  </header>
  )
}


 export default Header;


