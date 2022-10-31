import React from "react";
import "../../css/Filter/Filter.css";
import Flip from "react-reveal/Flip";
import { connect } from "react-redux";
import { filteredSize, filteredSort } from "../../store/actions/product";
import { words } from "../../word";

function Filter(props) {
  return (
    <Flip left cascade>
      {props.filterProducts && (
        <div className="filter-wrapper">
          <h2 className="filter-title">{words.filter}</h2>
          <div className="num-of-products">
            {words.numberpro} {props.filterProducts.length}
          </div>
          <div className="filter-by-size">
            <span>{words.filter}</span>
            <select
              value={props.size}
              className="filter-select"
              onChange={(e) =>
                props.filteredSize(props.products, e.target.value)
              }
            >
              <option value="ALL">{words.ALL}</option>
              <option value="XS">{words.XS}</option>
              <option value="S">{words.S}</option>
              <option value="M">{words.M}</option>
              <option value="L">{words.L}</option>
              <option value="XL">{words.XL}</option>
              <option value="XXL">{words.XXL}</option>
            </select>
          </div>
          <div className="filter-by-size">
            <span>{words.order}</span>
            <select
              value={props.sort}
              className="filter-select"
              onChange={(e) =>
                props.filteredSort(props.filterProducts, e.target.value)
              }
            >
              <option value="latest">{words.Latest}</option>
              <option value="lowest">{words.Lowest}</option>
              <option value="highest">{words.Highest}</option>
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
    filteredSize,
    filteredSort,
  }
)(Filter);