import React from "react";
import Header from "./components/header";
import Bartenders from "./components/bartenders";
import Storage from "./components/storage";
import Taps from "./components/taps";
import Queue from "./components/queue";
import Tables from "./components/tables";
import FetchJSON from "./components/fetchJSON";
import "./styles/dashboard.scss";

function App() {
  return (
  <>
  <Header />
  <div className="dashboard">
  <Queue />
  <Bartenders />
  <Taps />
  <Storage />
  <Tables />
  </div>
   {/* <FetchJSON/> */}
  </>
  )
}

export default App;
