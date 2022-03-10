import React from "react";
import "./order.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/apiCalls";


export default function Order({ setOpenModal, cart }) {
  const [inputs, setInputs] = useState({});
  const [momo, setMomo] = useState(false);
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
  console.log(inputs);
  return (
    <>
      <div className="modalBackground">
        <div className="container">
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
          <form action="">
            <div className="row">
              <div className="col">
                <h3 className="title">billing address</h3>

                <div className="inputBox">
                  <span>full name :</span>
                  <input name="name" type="text" onChange={handleChange} />
                </div>
                <div className="inputBox">
                  <span>email :</span>
                  <input name="email" type="text" onChange={handleChange} />
                </div>
                <div className="inputBox">
                  <span>phone :</span>
                  <input
                    name="phone"
                    type="text"
                    placeholder="+250788730199"
                    onChange={handleChange}
                  />
                </div>
                <div className="inputBox">
                  <span>address :</span>
                  <input
                    name="address"
                    type="text"
                    placeholder="KN234 | Nyamirambo"
                    onChange={handleChange}
                  />
                </div>
                <div className="inputBoxs">
                  <span>Mobile Money</span>
                  <input
                    type="radio"
                    name="momo"
                    onChange={(e) => setMomo(true)}
                  />

                  <span>Card</span>
                  <input
                    type="radio"
                    name="momo"
                    onChange={(e) => setMomo(false)}
                  />
                </div>
              </div>

              <div className="col">
                <h3 className="title">payment</h3>
                {momo ? (
                  <>
                    <div className="inputBox">
                      <span>we accept :</span>
                      <img
                        src="https://i.ibb.co/w0QbXfT/card-imgm.png"
                        alt=""
                      />
                    </div>
                    <div className="inputBox">
                      <span>mobile number :</span>
                      <input type="number" name="momop" placeholder="25078../25073.." onChange={handleChange} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="inputBox">
                      <span>cards accepted :</span>
                      <img
                        src="https://i.ibb.co/Fsnt6k0/card-imgc.png"
                        alt=""
                      />
                    </div>
                    <div className="inputBox">
                      <span>name on card :</span>
                      <input type="text" name="cname" placeholder="cyiza aime" onChange={handleChange} />
                    </div>
                    <div className="inputBox">
                      <span>credit card number :</span>
                      <input type="number" name="cnumber" placeholder="1111-2222-3333-4444" onChange={handleChange} />
                    </div>

                    <div className="flex">
                      <div className="inputBox">
                        <span>expiration :</span>
                        <input type="number" name="expiration" placeholder="04/24" onChange={handleChange} />
                      </div>
                      <div className="inputBox">
                        <span>CVV :</span>
                        <input type="text" name="cv" placeholder="1234" onChange={handleChange}/>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <input
              type="submit"
              value="proceed to checkout"
              class="submit-btn"
              onClick={handleClick}
            />
          </form>
        </div>
      </div>
    </>
  );
}
