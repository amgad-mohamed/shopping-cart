import React from 'react'
import Modal from "react-modal";

function ProductModal(props) {
    const {product, closeModal} = props

    return (
    <Modal isOpen={product}>
    <div className="product-info">
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.title}</p>
    </div>
  </Modal>  )
}

export default ProductModal