import React, { Component } from "react";
/* import './App.css';
import '../node_modules/react-vis/dist/style.css'; */
import { XYPlot, VerticalBarSeries } from "react-vis";
import { useState } from "react";
import { useEffect } from "react";
class Barchart extends Component {
  render() {
    if (!this.props.queue) {
      return null;
    }

    let queueData = this.props.queue;
    let data = [
      /*  { x: "1", y: 10 },
      { x: "3", y: 20 },
      { x: "5", y: 30 },
      { x: "7", y: 5 },
      { x: "9", y: 5 },
      { x: "11", y: 5 },
      { x: "13", y: 5 },
      { x: "15", y: 5 }, */
    ];

    /*  useEffect(() => {
      const interval = setInterval(() => {
        console.log("This will also run every second!"); */
    data.push({ x: this.props.time / 10000000000000, y: queueData.length + 1 / 100 });
    /*   }, 1000);
      return () => clearInterval(interval);
    }, []); */
    /*  const [data, setData] = useState([]); */
    /*  data.push({}); */

    console.log(data);
    return (
      <div className="queue_barchart">
        <XYPlot height={300} width={500}>
          <VerticalBarSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default Barchart;
