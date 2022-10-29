import React from "react";
import "../../css/Checkoutform/Checkoutform.css";
import Input from "../Input/Input";
import Zoom from "react-reveal/Zoom";
import { words } from "../../word";
function Checkoutform(props) {
  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => props.setShowForm(false)}>
            &times;
          </span>
          <Zoom>
            <form onSubmit={props.handleOnSubmit}>
              <Input
                label={words.name}
                type={words.text}
                name={words.name2}
                onChange={props.handleChange}
              />
              <Input
                label={words.Email}
                type={words.email}
                name={words.email}
                onChange={props.handleChange}
              />

              <div>
                <button type="submit">{words.checkout}</button>
              </div>
            </form>
          </Zoom>
        </div>
      )}
    </>
  );
}

export default Checkoutform;
