import React from "react";
import Header from "./components/header";
import Bartenders from "./components/bartenders";
import Storage from "./components/storage";
import Taps from "./components/taps";
import Queue from "./components/queue";
import Tables from "./components/tables";
/* import FetchJSON from "./components/fetchJSON"; */
import "./styles/index.scss";

function App() {

/*   let json;
  fetch('https://coding-mokeys-foobar.herokuapp.com/')
  .then(response => response.json())
  .then(data =>  console.log(data)) */

 
 const fetchJSON = async () => {
  const res = await fetch("https://coding-mokeys-foobar.herokuapp.com/",{
    method: "get",
    headers: {
      "Content-Type": 
      "application/json; charset=utf-8",
    },
  });
  const jsonData = await res.json();
  console.log(jsonData)

  
  return jsonData;
 }

 

  
  return (
  <>
  <Header /* time={data.timestamp} */ />
  <div className="dashboard">
  <Queue />
  <Bartenders />
  <Taps />
  <Tables />
  <Storage />
  </div>
  </>
  )
}



export default App;
