import React from "react";
import "./order.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/apiCalls";
import { useSelector } from "react-redux";

export default function Order({ setOpenModal, cart }) {
  const user = useSelector((state) => state.user.currentUser);

  console.log(cart.products[0]);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const order = {
      ...inputs,
      products: cart.products,
      amount: cart.total,
    };
    addOrder(order, dispatch);
    setOpenModal(false);
  };
  return (
 <>
   <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            {" "}
            X
          </button>
        </div>
        <div className="newUser">
          <h1 className="newUserTitle">Place Order</h1>
          <form className="newUserForm">
          <div className="newUserItem">
              <label>Full Name</label>
              <input
                name="name"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="newUserItem">
              <label>Email</label>
              <input
                name="email"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="newUserItem">
              <label>Phone</label>
              <input name="phone" type="text" placeholder="+250788730199" onChange={handleChange} />
            </div>
            <div className="newUserItem">
              <label>Address</label>
              <input
                name="address"
                type="text"
                placeholder="Kigali | Rwanda"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={handleClick}>Continue</button>
         
        </div>
      </div>
    </div>  
 </>
  );
}
