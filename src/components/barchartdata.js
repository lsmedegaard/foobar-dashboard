import React from "react";
function Barchartdata(props) {
  if (!props.data) {
    return null;
  }

  let data = [{ x: 9, y: 3 }];
  data.push({ x: 2, y: props.data.queue.length });

  console.log("eooooooooooooooooow");
  return data;
}

export default Barchartdata;
