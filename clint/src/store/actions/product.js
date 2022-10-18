import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "./type";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS,
          data: data,
        });
      });
  };
};

export const filteredSize = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    const newProducts = productsClone.filter(
      (p) => p.sizes.indexOf(value) !== -1
    );
    dispatch({
      type: FILTER_SIZE,
      data :{
        size : value,
        products: value === "All" ? products : newProducts,
      }
    });
  };
};
export const filteredSort = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    const newProducts = productsClone.sort(function (a, b) {
      if (value === "Lower") {
        return a.price - b.price;
      } else if (value === "Highst") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    dispatch({
      type: FILTER_SORT,
      data: {
        sort: value,
        products: newProducts,
      },
    });
  };
};
