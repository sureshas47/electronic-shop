import React from "react";
import { useFormik } from "formik";
import RootButton from "./Buttons/Button";
import styled from "styled-components";
import { Form, Input } from "./style/Style.Checkout";
import { width } from "styled-system";
import { useSelector } from "react-redux";

const ConfirmButton = styled(RootButton)`
  background-color: orange;
  color: aliceblue;
  ${width};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Checkout() {
  const cartItems = useSelector((state) => state.cartItems);
  const productQuantity = useSelector((state) => state.counter);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      contactNo: "",
      billingAddress: "",
      deliveryAddress: "",
      currentDate: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      return values;
    },
  });

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 75% 25%)",
          gap: 20,
          marginLeft: "20px",
          marginRight: "40px",
        }}
      >
        <Form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">Full Name</label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label htmlFor="contactNumber">Contact Number</label>
          <Input
            id="contactNo"
            name="contactNo"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.contactNo}
          />
          <label htmlFor="lastName">Billing Address</label>
          <Input
            id="billingAddress"
            name="billingAddress"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.billingAddress}
          />
          <label htmlFor="lastName">Delivery Address</label>
          <Input
            id="deliveryAddress"
            name="deliveryAddress"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.deliveryAddress}
          />
          <label htmlFor="lastName">Delivery Date </label>
          <Input
            id="currentDate"
            name="currentDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.currentDate}
          />
          <div>
            <ConfirmButton width="100%">Confirm</ConfirmButton>
          </div>
        </Form>
        <div style={{ backgroundColor: "#C0C0C0", borderRadius: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "30px",
            }}
          >
            <strong>
              Cart{" "}
              {productQuantity > 0 ? (
                <small> ({productQuantity} - Items)</small>
              ) : (
                <small>Empty </small>
              )}
            </strong>
            <strong>Price</strong>
          </div>

          <div>
            {cartItems.map((item) => {
              return (
                <>
                  <div
                    key={item.id}
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <p> {item.name}</p>
                    <p> {item.price}</p>
                  </div>
                </>
              );
            })}
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              {productQuantity > 0 ? (
                <>
                  <strong>Total</strong>
                  <strong>$30</strong>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
