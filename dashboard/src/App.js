import React from "react";
import Header from "./components/header";
import Bartenders from "./components/bartenders";
import Storage from "./components/storage";
import Taps from "./components/taps";
import Queue from "./components/queue";
import Tables from "./components/tables";
import Serving from "./components/serving";
import "./styles/app.css";

function App() {
  return (
  <div className="app">
  <Header />
  <Bartenders />
  <Storage />
  <Taps />
  <Queue />
  <Tables />
  <Serving />
  </div>
  )
}

export default App;
