import React, { Component } from "react";
import Pricing from "../Pricing/Pricing";

export default class Home extends Component {
  state = {
    singlePackage: {
        id:0,
        name: 'single',
        feature: "5 courses materials for 2 weeks",
        price: 0,
        activated:true
      },
    packages: [
        {
          id:0,
            name: 'single',
            feature: "5 courses materials for 2 weeks",
            price: 100,
            activated:true
          },
      {
        id:1,
        name: "free",
        feature: "5 courses materials for 2 weeks",
        price: 0,
        activated:true
      },
      {
        id:2,
        name: "eco",
        feature: "5 courses materials for 1 year + subscribe community",
        price: 500,
        activated:false
      },
      {
        id:3,
        name: "pro",
        feature: 
          "5 courses materials live long + subscribe community + assignments personal reviews",
        price: 700,
        activated:true
      },
    ],
  };
  // must be arrow function 
  deletePackage=(id)=>{
    //deep copy
    let packages=[...this.state.packages];
    //update
    packages=this.state.packages.filter((packag)=> packag.id !== id);
    //re-render
    this.setState({
      packages
    });
  }
  updatePackag=(obj)=>{
    let packagesCopy=[...this.state.packages];
    packagesCopy[packagesCopy.indexOf(obj)].price+=500;
    this.setState({packages:packagesCopy})
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid py-4">
        <div className="row bg-dark g-1">
            {this.state.packages.map((packag)=>
            <Pricing key={packag.id} update={this.updatePackag}
             delPackage={this.deletePackage} packagesData={packag} />)}        
        </div>
        </div>
      </React.Fragment>
    );
  }
}
