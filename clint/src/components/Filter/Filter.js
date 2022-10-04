import React from "react";
import "../../css/Filter/Filter.css";

function Filter(props) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">Filter</h2>
      <p className="num-of-product">Number of products : {props.productNumber} product</p>
      <div className="filter-by-size">
        <span>Filter</span>
        <select className="fiter-select" onChange={props.handleFilterBySize} value = {props.size}>
          <option value="ALL">ALL</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select className="order-select" onChange={props.handleFilterBySort} value = {props.sort}>
          <option value="Latest">Latest</option>
          <option value="Lower">Lower</option>
          <option value="Highst">Highst</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
