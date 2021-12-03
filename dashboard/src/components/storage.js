import React from "react";

function Storage(props){
    if (!props.bartenders) {
        return(null)
      }
        
        return(
        <section id="storage">
            <h1>Storage</h1>
            <div className="data-first-view">
                <div id="data-storage">

               {props.storage.map((storage, index)=>
                <div id={"storage_0"+index} className="storage">
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