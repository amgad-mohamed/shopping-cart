import React from "react";
import "../../css/Product/Products.css"
function Products(props) {
  return (
    <div className="products-wrapper">
      {props.products.map((product) => {
        return (
          <div key={product.id} className="product-item">
            
              <img src={product.imageUrl} alt={product.title} />
              <div className="product-desc">
                <p>{product.title}</p>

                <span>{product.price}</span>
              </div>

              <button>Add To Cart</button>
            
          </div>
        );
      })}
    </div>
  );
}

export default Products;
