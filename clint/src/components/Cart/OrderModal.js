import React from "react";
import Modal from "react-modal";
import { words } from "../../word";

function OrderModal(props) {
  const { order, closeModal, cartItems } = props;
  return (
  <>
  {order && <Modal isOpen={order} onRequestClose={closeModal}>
      <div className="order-info">
        <span className="close-icon" onClick={closeModal}>
          &times;
        </span>
        <p className="alert-success">{words.orderDoneSuccess}</p>
        <table>
          <tr>
            <td>{words.Name}</td>
            <td>{order.name}</td>
          </tr>
          <tr>
            <td>{words.email}</td>
            <td>{order.email}</td>
          </tr>
          <tr>
            <td>{words.total}</td>
            <td>
              ${" "}
              {cartItems.reduce((acc, p) => {
                return p.qty !== 0 ? acc + p.price * p.qty : null;
              }, 0)}
            </td>
          </tr>
          <tr>
            <td>{words.selectProduct}</td>
            <td>
              {cartItems.map((p) => (
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
    </Modal>}
  </>
  );
}

export default OrderModal;
