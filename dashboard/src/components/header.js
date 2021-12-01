
import React from "react";
/* import "./styles/header.scss"; */

function Header(props) {
  return (
  <header>
      <div id="logo">
      <div class="logo">
      <h1 class="title">
      FOO BAR
      <div class="firstfade">FOO BAR</div>
      <div class="lastfade">FOO BAR</div>
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


