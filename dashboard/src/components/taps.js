import React from "react";




function Taps(props){
    console.log(props);
    // hvorfor virker det ikke maaaaan
    // props.taps.sort(function(a, b){return a - b});

    if (!props.taps) {
        return(null)
      }
let lowTaps = [];
    return (
        <section id="taps">
            <h1>Taps</h1>

            <div className="data-first-view">
                
                <div id="data-taps">
                {props.taps.map((taps, index)=>
                <div id={"tap_0"+index} className="tap">
                <h3>Name: {props.taps[index].name}</h3>
                <p>Level:{props.taps[index].level}</p>
                <p>Capacity:{props.taps[index].capacity}</p>
                <p>Beer:{props.taps[index].beer}</p>
                <p>In use?:{props.taps[index].inUse}</p>
                </div>
                )} 
                    
                </div>
            </div>
            <div className="data-full-view"></div>

        </section>
    )
}

export default Taps;