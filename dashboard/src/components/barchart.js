import React, { Component } from "react";
/* import './App.css'; */
/* import '../node_modules/react-vis/dist/style.css';*/
import { XYPlot, VerticalBarSeries } from "react-vis";
/* import Barchartdata from "./barchartdata"; */

class Barchart extends Component {
  /*   constructor() { */
  /*    let data = [];
    this.state = data; */

  render() {
    if (!this.props) {
      return null;
    }
    /*     let data = this.setState(this.state.push({ x: this.props.time, y: this.props.queue.length }));
     */

    let data = [];
    /*  const [data, setData] = useState([]); */
    const barChartData = this.props.queue.map((queue) =>
      data.push({
        x: this.props.time,
        y: this.props.queue.length,
      })
    );
    /* let data = [];
    data.push(<Barchartdata data={this.props.queue} />); */

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
