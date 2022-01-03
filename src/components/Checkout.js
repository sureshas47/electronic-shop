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

  // form validation
  const validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "Fullname required";
    } else if (values.fullName.length > 25) {
      errors.fullName = "Must be 25 characters or less";
    }
    if (!values.contactNo) {
      errors.contactNo = "Phone number required";
      // } else if (!(values.contactNo.length === 10)) {
      //   errors.contactNo = "Phone No. invalid, not less or more than 10";//
    } else if ((!/^(98[0-9])$/g).test(values.contactNo)) {
      errors.contactNo = "invalidd phone number, phone number starts with 98";
    }
    if (values.billingAddress.length > 30) {
      errors.billingAddress = "Address must be 30 characters or less";
    } else if (!values.billingAddress) {
      errors.billingAddress = "Billing address required";
    }
    if (values.deliveryAddress.length > 30) {
      errors.deliveryAddress = "Address must be 30 characters or less";
    } else if (!values.deliveryAddress) {
      errors.deliveryAddress = "Delivery address required";
    }
    if (!values.currentDate) {
      errors.currentDate = "Delivery date required";
    }
    if (!values.email) {
      errors.email = "Email required";
    } else if (values.email.length > 30) {
      errors.email = "Email must be 30 characters or less";
    } else if (
      !/^(([a-z0-9\.]{3,10})([a-z0-9]{0,9})\@([a-z]{2,10})\.([a-z]{2,8}))$/g.test(
        values.email
      )
    ) {
      errors.email = "Email must be in its format";
    }
    return errors;
  };

  // form handle
  const formik = useFormik({
    initialValues: {
      fullName: "",
      contactNo: "",
      billingAddress: "",
      deliveryAddress: "",
      currentDate: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      return values;
    },
    validate,
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
        {/* Form */}
        <Form onSubmit={formik.handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          {formik.errors.fullName ? (
            <div style={{ color: "red" }}>{formik.errors.fullName}</div>
          ) : (
            ""
          )}
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : (
            ""
          )}
          <label htmlFor="contactNumber">Contact Number</label>
          <Input
            id="contactNo"
            name="contactNo"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.contactNo}
          />
          {formik.errors.contactNo ? (
            <div style={{ color: "red" }}>{formik.errors.contactNo}</div>
          ) : (
            ""
          )}
          <label htmlFor="lastName">Billing Address</label>
          <Input
            id="billingAddress"
            name="billingAddress"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.billingAddress}
          />
          {formik.errors.billingAddress ? (
            <div style={{ color: "red" }}>{formik.errors.billingAddress}</div>
          ) : (
            ""
          )}
          <label htmlFor="lastName">Delivery Address</label>
          <Input
            id="deliveryAddress"
            name="deliveryAddress"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.deliveryAddress}
          />
          {formik.errors.deliveryAddress ? (
            <div style={{ color: "red" }}>{formik.errors.deliveryAddress}</div>
          ) : (
            ""
          )}
          <label htmlFor="lastName">Delivery Date </label>
          <Input
            id="currentDate"
            name="currentDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.currentDate}
          />
          {formik.errors.currentDate ? (
            <div style={{ color: "red" }}>{formik.errors.currentDate}</div>
          ) : (
            ""
          )}
          <div>
            {/* button triggers submit by default  */}
            <ConfirmButton width="100%">Confirm</ConfirmButton>
          </div>
        </Form>
        <div style={{ backgroundColor: "#D0D0D0", borderRadius: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
              marginLeft: "20px",
            }}
          >
            <strong>
              Cart{" "}
              {productQuantity > 0 ? (
                <small> ({productQuantity} - Items)</small>
              ) : (
                <small>(Empty) </small>
              )}
            </strong>
            <strong style={{ marginRight: "20px" }}>Price</strong>
          </div>

          <div>
            {cartItems.map((item) => {
              return (
                <>
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}
                  >
                    <p> {item.name}</p>
                    <p> {item.price}</p>
                  </div>
                </>
              );
            })}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
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
