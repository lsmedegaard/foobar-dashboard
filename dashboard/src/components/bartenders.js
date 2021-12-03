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
  
  return (
<section id="bartenders">
  <h1>Bartenders</h1>
  <div className="data-first-view">
    <div id="data-bartenders">

       {props.bartenders.map((bartender, index)=>
       
       <div id={"bartender_0"+index} className="bartender">
       <img src={bartenderIcons[index].src}/>
       <h3>Name: {props.bartenders[index].name}</h3>
       <p>Status:{props.bartenders[index].status}</p>
       <p>StatusDetail:{props.bartenders[index].statusDetail}</p>
       <p>Using Tap:{props.bartenders[index].usingTap}</p>
       <p>Customer:{props.bartenders[index].servingCustomer}</p>
       
       </div>
       )} 

       
      
     
    </div>
    </div>
  <div className="data-full-view"></div>
</section>
  );
}

export default Bartenders;