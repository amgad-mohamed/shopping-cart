import React from "react";
import "../../css/Filter/Filter.css";
import Flip from "react-reveal/Flip";
import { connect } from "react-redux";
import { filteredSize, filteredSort } from "../../store/actions/product";

function Filter(props) {
  return (
    <Flip left cascade>
      {props.filterProducts && (
        <div className="filter-wrapper">
          <h2 className="filter-title">Filter</h2>
          <p className="num-of-product">
            Number of products : {props.filterProducts.length} product
          </p>
          <div className="filter-by-size">
            <span>Filter</span>
            <select
              className="fiter-select"
              onChange={(e) =>
                props.filteredSize(props.products, e.target.value)
              }
              value={props.size}
            >
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
            <select
              className="order-select"
              onChange={(e) =>
                props.filteredSort(props.filterProducts, e.target.value)
              }
              value={props.sort}
            >
              <option value="Latest">Latest</option>
              <option value="Lower">Lower</option>
              <option value="Highst">Highst</option>
            </select>
          </div>
        </div>
      )}
    </Flip>
  );
}

export default connect(
  (state) => {
    return {
      sort: state.products.sort,
      size: state.products.size,
      products: state.products.products,
      filterProducts: state.products.filterProducts,
    };
  },
  {
    filteredSort,
    filteredSize,
  }
)(Filter);
