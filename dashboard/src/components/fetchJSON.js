/* import React, { Component } from 'react';

class FetchJSON extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://coding-mokeys-foobar.herokuapp.com')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

}

export default FetchJSON;
 */

/* import React from "react";

function FetchJSON(){
const imgURL = "https://coding-mokeys-foobar.herokuapp.com/";

   		async function hentData() {
   			const respons = await fetch(imgURL);
   			const json = await respons.json();
   			console.log(json);
               let jsonArray = json.map();
               return (<>{jsonArray}</>)
   		}
       return hentData();
           
    }

    export default FetchJSON; */