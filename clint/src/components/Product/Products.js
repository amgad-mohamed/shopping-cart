import React, { useState } from "react";
import "../../css/Product/Products.css";
import ProductModal from "./ProductModal";

function Products(props) {
  const [productinfo, setProduct] = useState("");

  const openModal = (productinfo) => {
    setProduct(productinfo);
  };
  const closeModal = () => {
    setProduct(false);
  };
  return (
    <div className="products-wrapper">
      {props.products.map((product) => {
        return (
          <div key={product.id} className="product-item">
          
            <a href="#/" onClick={() => openModal(product)}>
              <img src={product.imageUrl} alt={product.title} />
            </a>
            <div className="product-desc">
              <p>{product.title}</p>

              <span>{product.price}</span>
            </div>

            <button>Add To Cart</button>
          </div>
        );
      })}
      <ProductModal product={productinfo} closeModal={closeModal} />
    </div>
  );
}

export default Products;
