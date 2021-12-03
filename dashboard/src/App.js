import React from "react";
import Header from "./components/header";
import Bartenders from "./components/bartenders";
import Storage from "./components/storage";
import Taps from "./components/taps";
import Queue from "./components/queue";
import Tables from "./components/tables";
/* import FetchJSON from "./components/fetchJSON"; */
import "./styles/index.scss";
import { useState, useEffect } from "react";

function App() {

  const [fulldata, setData] = useState([]);

 /*  useEffect(()=>{
      fetch('https://coding-mokeys-foobar.herokuapp.com/')
      .then(response => response.json())
      .then(data => setData(data)) 
    },[])  */


//useEffect every 60 secs
// THIS ONE WORRKS DOOO NOT DELETE!!!!!!!!!!!!!!!!!!!!!////////////////
       useEffect(() => {
        const interval = setInterval(() => {
          console.log('This will run every second!');
          
            fetch('https://coding-mokeys-foobar.herokuapp.com/')
            .then(response => response.json())
            .then(data =>  setData(data))
        }, 6000);
        return () => clearInterval(interval);
      }, []);
  
 

 console.log(fulldata)

 
  
  return (
  <>
  <Header  time={fulldata.timestamp} /* revenue={fulldata.revenue} */ />
  <div className="dashboard">
  <Queue queue={fulldata.queue} />
  <Bartenders  bartenders={fulldata.bartenders}  />
  <Taps taps={fulldata.taps} />
  <Tables tables={fulldata.tables} />
  <Storage storage={fulldata.storage}/>
  </div>
  </>
  )
  }



export default App;
