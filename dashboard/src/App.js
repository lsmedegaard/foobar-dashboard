import React from "react";
import Header from "./components/header";
import Bartenders from "./components/bartenders";
import Storage from "./components/storage";
import Taps from "./components/taps";
import Queue from "./components/queue";
import Tables from "./components/tables";
import FetchJSON from "./components/fetchJSON";
import "./styles/index.scss";

function App() {
	
  let somedata;
  fetch('https://coding-mokeys-foobar.herokuapp.com/')
  .then(response => response.json())
  .then(data => somedata = data);
  
  return (
  <>
  <Header time={somedata.timestamp}/>
  <div className="dashboard">
  <Queue />
  <Bartenders />
  <Taps />
  <Tables />
  <Storage />
  </div>
   {/* <FetchJSON/> */}
  </>
  )
}

// fetch('https://coding-mokeys-foobar.herokuapp.com/').then(response => console.log(
//   'response', response.json()
//     .then(data => {
//       console.log('data', data)
//   })))

export default App;
