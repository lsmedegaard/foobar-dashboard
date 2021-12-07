import React, { Component } from "react";
/* import './App.css';
import '../node_modules/react-vis/dist/style.css'; */
import { XYPlot, VerticalBarSeries } from "react-vis";

class Barchart extends Component {
  render() {
    /* if (!this.queue) {
      return null;
    } */

    let data = [];
    /*  const [data, setData] = useState([]); */
    const barChartData = this.props.queue.map((queue) =>
      data.push({
        x: this.props.time,
        y: this.props.queue.length,
      })
    );

    console.log(data);
    return (
      <div className="queue_barchart">
        <XYPlot height={300} width={300}>
          <VerticalBarSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default Barchart;
