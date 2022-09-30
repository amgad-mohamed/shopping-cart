import React from "react";
import Modal from "react-modal"

function ProductModal(props) {
  const { product,closeModal } = props;
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
      <span className="close-icon" onClick={closeModal}>
        &times;
      </span>
      <div className="product-info">
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.desc}</p>
        <p>${product.price}</p>
      </div>
    </Modal>
  );
}

export default ProductModal;