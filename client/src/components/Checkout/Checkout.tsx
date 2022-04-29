import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config";
import { clearBasket } from "../../State/Redux/action";
import { CartProducts, Order } from "../../State/StateTypes/stateTypes";
import "./Checkout.scss";

export const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState<any>({});
  const token = useSelector((state: any) => state.token?.token);

  const cartProducts: CartProducts = useSelector(
    (state: RootStateOrAny) => state.cartProduct
  );
  const shippingAddress = {
    firstName: inputs.firstname,
    lastName: inputs.lastName,
    addressLine1: inputs.addressLine1,
    addressLine2: inputs.addressLine2,
    city: inputs.city,
    region: inputs.region,
    postalCode: inputs.postalCode,
    country: inputs.country,
  };
  const order = { ...cartProducts, shippingAddress: shippingAddress };

  const postOrder = async (order: Order) => {
    await axiosInstance
      .post("/orders", order, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          navigate(
            `/orderinfo/success/${response.data.success}/${response.data.orderId}`
          );
          dispatch(clearBasket());
        } else {
          navigate(`/orderinfo/error/${response.data.error}/failed`);
        }
      })
      .catch(function (error) {
        navigate(`/orderinfo/error/${error.message}/failed`);
        console.log(error);
      });
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    postOrder(order);
  };

  return (
    <div className="checkout">
      <h1 className="checkout__header">Checkout</h1>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="firstname">First Name</label>
                  <input
                    required
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="John"
                    value={inputs.firstname || ""}
                    onChange={handleChange}
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    required
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={inputs.lastName || ""}
                    onChange={handleChange}
                  />
                  <label htmlFor="addressLine1">Address Line 1</label>
                  <input
                    required
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    placeholder="542 W. 15th Street"
                    value={inputs.addressLine1 || ""}
                    onChange={handleChange}
                  />
                  <label htmlFor="addressLine2">Address Line 2</label>
                  <input
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    placeholder="542 W. 15th Street"
                    value={inputs.addressLine2 || ""}
                    onChange={handleChange}
                  />
                  <label htmlFor="city">City</label>
                  <input
                    required
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    value={inputs.city || ""}
                    onChange={handleChange}
                  />
                  <label htmlFor="country">Country</label>
                  <input
                    required
                    type="text"
                    id="country"
                    name="country"
                    placeholder="USA"
                    value={inputs.country || ""}
                    onChange={handleChange}
                  />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="region">Reion/State</label>
                      <input
                        type="text"
                        id="region"
                        name="region"
                        placeholder="NY"
                        value={inputs.region || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="postalCode">Postel code/Zip</label>
                      <input
                        required
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        placeholder="10001"
                        value={inputs.postalCode || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    required
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                    value={inputs.cardname || ""}
                    onChange={handleChange}
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    required
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    value={inputs.cardnumber || ""}
                    onChange={handleChange}
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    required
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        required
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                        value={inputs.expyear || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        required
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                        value={inputs.cvv || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <input
                required
                type="submit"
                value="Place Order"
                className="btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
