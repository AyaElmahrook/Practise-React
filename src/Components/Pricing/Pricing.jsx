import React, { Component } from "react";
import pricingStyle from "./Pricing.module.css";

export default class Pricing extends Component {
  render() {
    let { id,name, feature, price, activated } = this.props.packagesData;
    return (
      <div className="col-lg-4 col-md-3 col-sm-6 position-relative">
        <div className={`${pricingStyle.package} bg-light p-2 position-relative`}>
          <h3>{name}</h3>
          <p>Features : {feature}</p>
          <span>price {price} $</span>
          <div className="position-absolute end-0 bottom-0">
              <button onClick={()=>this.props.update(this.props.packagesData)} className="btn btn-outline-warning py-0 px-1 m-2"><i className="fa-solid fa-pen-fancy"></i></button>
              <button onClick={()=>this.props.delPackage(id)} className="btn btn-outline-danger py-0 px-1 m-2"><i className="fa-solid fa-minus"></i></button>
          </div>
        </div>
        {activated?<div className="position-absolute top-0 end-0 bg-danger text-white p-2 mx-2">sale</div>:''}
      </div>
    );
  }
}
