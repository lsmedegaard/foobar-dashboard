import React from "react";

function Bartenders(props) {
if (!props.bartenders) {
  return(null)
}

const bartenderIcons = [
   {
    src: "./assets/icons/peter_icon_red.svg",
  },
  {
    src: "./assets/icons/klaus_icon_red.svg",
  },
   {
    src: "./assets/icons/jonas_icon_red.svg",
  },
   {
   src: "./assets/icons/dannie_icon_red.svg",
  },
]
console.log(props)
  
function usingTap(tap){
if(tap === null){
  return <p>none</p>
}
return tap

}

  return (
<section id="bartenders">
  <h1>Bartenders</h1>
  <div className="data-first-view">
    <div id="data-bartenders">

       {props.bartenders.map((bartender, index)=>
       
       <div id={"bartender_0"+index} className="bartender">
       <img src={bartenderIcons[index].src} alt="bartenderimage"/>
       <h3>{props.bartenders[index].name}</h3>
       <h5>Status: </h5>
       <p>{props.bartenders[index].status}</p>
       <h5>Status Detail: </h5>
       <p>{props.bartenders[index].statusDetail}</p>
       <h5>Using Tap: </h5>
       <p>{usingTap(props.bartenders[index].usingTap)}</p>
       {/* {<p>{props.bartenders[index].usingTap === 'null' ? <p>none</p> : props.bartenders[index].usingTap }</p>} */}
       <h5>Assisting customer nr: </h5>
       <p>{props.bartenders[index].servingCustomer}</p>
       
       </div>
       )} 

       
      
     
    </div>
    </div>
  <div className="data-full-view"></div>
</section>
  );
}

export default Bartenders;