/* import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy"; */
import React from "react";
import Barchart from "./barchart";

function Queue(props) {
  if (!props.queue) {
    return null;
  }

  function orderTime(startTime) {
    let currentTime = props.time;
    let calculatedTime = currentTime - startTime;
    let date = new Date(calculatedTime);
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedMinutes = minutes.substr(-2) + ":" + seconds.substr(-2);
    let formattedSeconds = date.getSeconds();

    if (minutes === "0" + 0) {
      return <p>{formattedSeconds + " seconds ago"}</p>;
    } else if (minutes > "0" + 0) {
      return <p>{formattedMinutes + " minutes ago"}</p>;
    }
  }

  /*  console.log(props.queue); */

  //Root is part of our core package, so we use am5.* namespace to access it.
  /*  const root = am5.Root.new("chartdiv" + 1);

  let chart = root.container.children.push(am5xy.XYChart.new(root, {}));

  let yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {}),
    })
  );

  let xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "second", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {}),
    })
  );

  let series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      fill: am5.color(0x095256),
      stroke: am5.color(0x095256),
    })
  );
  series.columns.template.setAll({
    fillOpacity: 0.5,
    strokeWidth: 2,
    cornerRadiusTL: 5,
    cornerRadiusTR: 5,
    width: am5.percent(100),
  });

  series.data.setAll([
    {
      category: "Research",
      value: 1000,
    },
    {
      category: "Marketing",
      value: 1200,
    },
    {
      category: "Sales",
      value: 850,
    },
  ]); */

  return (
    <section id="queue">
      <h1>Queue</h1>
      <div className="data-first-view">
        <div id="data-queue-barchart">
          {/*   <div className="chartdiv" id="chartdiv"></div> */}
          {props.queue.map((queue, index) => (
            <div id={"order_0" + index} className="order">
              <h3>{queue.id}</h3>
              {orderTime(queue.startTime)}
              <p>
                {queue.order.map((order, index) => (
                  <ul className="orderList">
                    <li>{order}</li>
                  </ul>
                ))}
              </p>
            </div>
          ))}
          <Barchart queue={props.queue} time={props.time} />
        </div>
      </div>

      <div className="data-full-view">
        <div id="data-queue-fullview"></div>
      </div>
    </section>
  );
}

export default Queue;
