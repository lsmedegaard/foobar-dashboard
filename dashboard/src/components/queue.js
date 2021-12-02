import React from "react";

function Queue(){
 
    return (
        <section id="queue">
            <h1>Queue</h1>
            <div className="data-first-view">
                <div id="data-queue-barchart"></div>
            </div>
            <div className="data-full-view">
                <div id="data-queue-fullview"></div>
            </div>

        </section>
    );
}

export default Queue;