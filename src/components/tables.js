import React from "react";

function Tables(props) {
  /* if (!props.bartenders) {
        return(null)
      } */
  return (
    <section id="tables">
      <h1>Tables</h1>
      <div className="tables_preview">
        <h2>TABLE 4 NEEDS HELP!</h2>
        <p>Table 4 have ordered this:</p>
        {/* <p>{props.tables[index].name}</p> */}
      </div>
    </section>
  );
}

export default Tables;
