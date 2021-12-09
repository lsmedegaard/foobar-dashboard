import React, { Component, useState, useEffect } from "react";
import { XYPlot, VerticalBarSeries } from "react-vis";

function Barchart(props) {
  const [plots, setPlots] = useState([]);

  let showTenBars = [];

  useEffect(() => {
    setPlots((prevPlots) =>
      prevPlots.concat({
        x: props.time,
        y: props.queue.length,
      })
    );
  }, [props.time]);

  /*  const [plotsTen, setPlotsTen] = useState([]);
  useEffect(() => {
    setPlotsTen((prevPlotsTen) =>
      for(let i = 0; i<10; i++){
        prevPlotsTen.concat({plots[i]})
      }
    );
  }, [plots]); */

  /*  for (let i = 0; i < 10; i++) {
    showTenBars.concat(plots[i]);
  }

  
 */ const labels = ["10sek", "9sek", "8sek", "7sek", "6sek", "5sek", "4sek", "3sek", "2sek", "current"];

  let arrTen = plots.slice(-11, -1);
  console.log();
  return (
    <div className="queue_barchart" width={300} height={100}>
      {arrTen.map((queue) => (
        <div className="bar" style={{ height: queue.y * 10 + "%" }}>
          <p>{queue.y}</p>
        </div>
      ))}
      {labels.map((label) => (
        <p>{label}</p>
      ))}
      {/* 
      <XYPlot height={300} width={500} fill="green" barWidth="0.1">
        <VerticalBarSeries style={({ barWidth: 1 }, { strokeWidth: 10 })} data={arrTen} />
      </XYPlot> */}
    </div>
  );
}
/* 
class Barchart extends Component {
  render() {
    if (!this.props) {
      return null;
    }
    let data = [];

    data.push({
      x: this.props.time,
      y: this.props.queue.length,
    });

    return (
      <div className="queue_barchart">
        <XYPlot height={300} width={500}>
          <VerticalBarSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}
*/
export default Barchart;
