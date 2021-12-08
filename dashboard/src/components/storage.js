import React from "react";

function Storage(props) {
  if (!props.storage) {
    return null;
  }

  const storageIcons = [
    {
      src: "./assets/icons/storage_squared_01.svg",
    },
  ];

  function compare(a, b) {
    if (a.amount < b.amount) {
      return -1;
    }
    if (a.amount > b.amount) {
      return 1;
    }
    return 0;
  }

  props.storage.sort(compare);

  let arrFive = [];
  for (let i = 0; i < 5; i++) {
    arrFive.push(props.storage[i]);
  }

  const imgSrc = arrFive.map((storage) => (storage.src = getImgSrc(storage.name)) /* "./assets/images/taps_images/tap_elhefe.svg" */);

  function getImgSrc(beername) {
    if (beername === "Steampunk") {
      return "./assets/images/storage_images/storage_steampunk.svg";
    } else if (beername === "GitHop") {
      return "./assets/images/storage_images/storage_githop.svg";
    } else if (beername === "El Hefe") {
      return "./assets/images/storage_images/storage_elhefe.svg";
    } else if (beername === "Fairy Tale Ale") {
      return "./assets/images/storage_images/storage_fairytaleale.svg";
    } else if (beername === "Hollaback Lager") {
      return "./assets/images/storage_images/storage_hollaback.svg";
    } else if (beername === "Hoppily Ever After") {
      return "./assets/images/storage_images/storage_hoppilyeverafter.svg";
    } else if (beername === "Mowintime") {
      return "./assets/images/storage_images/storage_mowintime.svg";
    } else if (beername === "Row 26") {
      return "./assets/images/storage_images/storage_row26.svg";
    } else if (beername === "Ruined Childhood") {
      return "./assets/images/storage_images/storage_ruinedchildhood.svg";
    } else if (beername === "Sleighride") {
      return "./assets/images/storage_images/storage_sleighride.svg";
    }
    return "NO PICTURE";
  }

  return (
    <section id="storage">
      <h1>Storage</h1>
      <div className="data-first-view">
        <div id="data-storage">
          {arrFive.map((storage, index) => (
            <div id={"storage_0" + index} className="storage">
              {/* <img className="storageimage" src={storageIcons[0].src} alt="storageimage"/> */}
              {/* {<img className="storageimage" src="./assets/images/storage_images/storage_githop.svg" alt="storageimage" />} */}
              <img className="storageimage" src={arrFive[index].src} alt="No image" />

              <h3>Name: {props.storage[index].name}</h3>
              <p>Amount:{props.storage[index].amount}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="data-full-view"></div>
    </section>
  );
}

export default Storage;
