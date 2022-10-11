import React, { useState } from "react";
import "../../css/Product/Products.css";
import ProductModal from "./ProductModal";
import Bounce from "react-reveal/Bounce"

function Products(props) {
  const [product, setProduct] = useState("");
  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(false);
  };

  return (
    <Bounce left cascade>
    <div className="products-wrapper">
      {props.products.map((product) => {
        return (
          
          <div className="product-item" key={product.id}>
            <a href="#/" onClick={() => openModal(product)}>
              <img src={product.imageUrl} alt={product.title} />
            </a>
            <div className="product-desc">
              <p>{product.title}</p>
              <span>${product.price}</span>
            </div>
            <button onClick={() =>props.addToCart(product)}>Add To Cart</button>
          </div>
        );
      })}
      <ProductModal product={product} closeModal={closeModal} />
    </div>
    </Bounce>
  );
}

export default Products;