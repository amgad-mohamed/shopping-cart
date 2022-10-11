import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkoutform from "../Checkoutform/Checkoutform";
import Bounce from "react-reveal/Bounce"

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  // const [showbtn , setShowBTn] = useState(false)
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue((prevstat) => ({ ...prevstat, [e.target.name]: e.target.value }));
  };

  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItem.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>there is {props.cartItem.length} in cart</p>
        )}
      </div>
      <Bounce bottom cascade> 
      <div className="cart-items">
        {props.cartItem.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt="" />
            <div className="cart-info">
              <div>
                <p>title : {item.title}</p>
                <p>qty :{item.qty}</p>
                <p>price : ${item.price}</p>
              </div>
              <div>
                <button onClick={() => props.removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Bounce>
      {props.cartItem.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total : $
            {props.cartItem.reduce((acc, p) => {
              return p.qty !== 0 ? acc + p.price * p.qty : null;
            }, 0)}
          </div>
          <button onClick={() => setShowForm(true)}>Select Product</button>
        </div>
      )}
      <Checkoutform
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Cart;
