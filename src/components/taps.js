import React from "react";

function Taps(props) {
  if (!props.taps) {
    return null;
  }

  let levelArr = [];
  /* 
function sortBeers(){
    levelArr.sort(function(a, b){
        return a - b;})
    } */

  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }

  function inUse(index) {
    if (props.taps[index].inUse) {
      return "true";
    } else {
      return "false";
    }
  }

  function compare(a, b) {
    if (a.level < b.level) {
      return -1;
    }
    if (a.level > b.level) {
      return 1;
    }
    return 0;
  }

  props.taps.sort(compare);

  let arrFive = [];
  for (let i = 0; i < 5; i++) {
    arrFive.push(props.taps[i]);
  }

  const imgSrc = arrFive.map((tap) => (tap.src = getImgSrc(tap.beer)) /* "./assets/images/taps_images/tap_elhefe.svg" */);

  function getImgSrc(beername) {
    if (beername === "Steampunk") {
      return "./assets/images/taps_images/tap_steampunk.svg";
    } else if (beername === "GitHop") {
      return "./assets/images/taps_images/tap_githop.svg";
    } else if (beername === "El Hefe") {
      return "./assets/images/taps_images/tap_elhefe.svg";
    } else if (beername === "Fairy Tale Ale") {
      return "./assets/images/taps_images/tap_fairytaleale.svg";
    } else if (beername === "Hollaback Lager") {
      return "./assets/images/taps_images/tap_hollaback.svg";
    } else if (beername === "Hoppily Ever After") {
      return "./assets/images/taps_images/tap_hoppilyeverafter.svg";
    } else if (beername === "Mowintime") {
      return "./assets/images/taps_images/tap_mowintime.svg";
    } else if (beername === "Row 26") {
      return "./assets/images/taps_images/tap_row26.svg";
    } else if (beername === "Ruined Childhood") {
      return "./assets/images/taps_images/tap_ruinedchildhood.svg";
    } else if (beername === "Sleighride") {
      return "./assets/images/taps_images/tap_sleighride.svg";
    }
    return "NO PICTURE";
  }
  return (
    <section id="taps">
      <h1>Taps</h1>

      <div className="data-first-view">
        <div id="data-taps">
          {arrFive.map((taps, index) => (
            <div id={"tap_0" + index} className="tap">
              <img className="tapsimage" src={arrFive[index].src} />

              <h2>{props.taps[index].beer}</h2>
              <p>{percentage(props.taps[index].level, props.taps[index].capacity)}% left</p>
              <p>{inUse(index)}</p>
              {/* {levelArr.push(props.taps[index].level)}
                {sortBeers()} */}
            </div>
          ))}
        </div>
      </div>
      <div className="data-full-view"></div>
    </section>
  );
}

export default Taps;
