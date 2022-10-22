import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkoutform from "../Checkoutform/Checkoutform";
import Bounce from "react-reveal/Bounce";
import Modal from "react-modal";

import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";
function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [order, setOrder] = useState(false);
  const [value, setValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
    };
    setOrder(order);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const closeModal = () => {
    setOrder(false);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length === 0 ? (
          "Empty Card"
        ) : (
          <p>There is {props.cartItems.length} Product in Cart</p>
        )}
      </div>
      <Modal isOpen={order} onRequestClose={closeModal}>
        <div className="order-info">
          <span className="close-icon" onClick={closeModal}>
            &times;
          </span>
          <p className="alert-success">order done success</p>
          <table>
            <tr>
              <td>Name:</td>
              <td>{order.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{order.email}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>
                ${" "}
                {props.cartItems.reduce((acc, p) => {
                  return p.qty !== 0 ? acc + p.price * p.qty : null;
                }, 0)}
              </td>
            </tr>
            <tr>
              <td>Select Product:</td>
              <td>
                {props.cartItems.map((p) => (
                  <div className="cart-data">
                    <p>Number of this product: {p.qty}</p>
                    <p>Title of product: {p.title}</p>
                    <br />
                  </div>
                ))}
              </td>
            </tr>
          </table>
        </div>
      </Modal>
      <Bounce bottom cascade>
        <div className="cart-items">
          {props.cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p>Title: {item.title}</p>
                  <p>Qty: {item.qty} </p>
                  <p>Price: ${item.price}</p>
                </div>
                <button onClick={() => props.removeCart(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </Bounce>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total: $
            {props.cartItems.reduce((acc, p) => {
              return p.qty !== 0 ? acc + p.price * p.qty : null;
            }, 0)}
          </div>
          <button onClick={() => setShowForm(true)}>Select Product</button>
        </div>
      )}
      <Checkoutform
        showForm={showForm}
        handleOnSubmit={handleOnSubmit}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>
  );
}

export default connect(
  (state) => {
    return {
      cartItems: state.cart.cartItems,
    };
  },
  { removeCart }
)(Cart);
