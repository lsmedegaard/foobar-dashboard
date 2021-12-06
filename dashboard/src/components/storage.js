import React from "react";

function Storage(props){
    if (!props.storage) {
        return(null)
      }

    
      const storageIcons = [
        {
         src: "./assets/icons/storage_squared_01.svg",
        }
    ]


    function compare( a, b ) {
        if ( a.amount < b.amount ){
          return -1;
        }
        if (a.amount > b.amount){
          return 1;
        }
        return 0;
      }
      
      props.storage.sort( compare );

    let arrFive = [];
    for(let i = 0; i<5; i++){
        arrFive.push(props.storage[i]);
    } 

        return(
        <section id="storage">
            <h1>Storage</h1>
            <div className="data-first-view">
                <div id="data-storage">

               {arrFive.map((storage, index)=>
                <div id={"storage_0"+index} className="storage">
                    {/* <img className="storageimage" src={storageIcons[0].src} alt="storageimage"/> */}
                    <img className="storageimage" src="./assets/images/storage_images/storage_fairytaleale.svg" alt="storageimage"/>
                    
                <h3>Name: {props.storage[index].name}</h3>
                <p>Amount:{props.storage[index].amount}</p>
                </div>
                )} 

                </div>
            </div>
            <div className="data-full-view"></div>

        </section>
    )
}

export default Storage;