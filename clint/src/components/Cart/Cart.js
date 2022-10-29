import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkoutform from "../Checkoutform/Checkoutform";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";
import { createOrder, clearOrder } from "../../store/actions/order";

import OrderModal from "./OrderModal";
import { words } from "../../word";
function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  // const [order, setOrder] = useState(false);
  const [value, setValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
    };
    props.createOrder(order);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const closeModal = () => {
    props.clearOrder();
    setShowForm(false);
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

      <OrderModal
        cartItems={props.cartItems}
        order={props.order}
        closeModal={closeModal}
      />

      <Bounce bottom cascade>
        <div className="cart-items">
          {props.cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p>
                    {words.title} {item.title}
                  </p>
                  <p>
                    {words.qty} {item.qty}{" "}
                  </p>
                  <p>
                    {words.price} {item.price}
                  </p>
                </div>
                <button onClick={() => props.removeCart(item)}>
                  {words.remove}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Bounce>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            {words.total} $
            {props.cartItems.reduce((acc, p) => {
              return p.qty !== 0 ? acc + p.price * p.qty : null;
            }, 0)}
          </div>
          <button onClick={() => setShowForm(true)}>{words.selectBtn}</button>
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
      order: state.order.order,
      cartItems: state.cart.cartItems,
    };
  },
  { removeCart, createOrder, clearOrder }
)(Cart);
