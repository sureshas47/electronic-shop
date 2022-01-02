import React, { useState, useEffect } from "react";
// import { ButtonAddToCart } from "./style/Style.Product";
import { SideCart, CartItems, Img } from "./style/Style.SidebarCart";
import "@fortawesome/fontawesome-free/js/all.js";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import Checkout from "./Checkout";
import RootButton from "./Buttons/Button";
import styled from "styled-components";
import { color } from "styled-system";

const CheckoutButton = styled(RootButton)`
  background-color: white;
  ${color}
`;

// import { connect } from "react-redux"; // connect is a function helps connect sidebar component to redux store
// alternative of mapStateToProps, mapDispatchToProps are useSelector and useDispatch

function SidebarCart() {
  const myCartItems = useSelector((state) => {
    return state.cartItems;
  });
  const itemQuantity = useSelector((state) => state.counter);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log("reached here");
    setCart(myCartItems);
  }, [myCartItems]);

  // total price of cart
  let totalPrice = cart.reduce((prevPrice, currentPrice) => {
    const trimedPrice = currentPrice.price.slice(1);
    const price = JSON.parse(trimedPrice);
    return price * 100 + prevPrice;
  }, 0);

  const history = useHistory();

  return (
    <>
      <SideCart>
        <i
          style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          className="fa fa-times"
          aria-hidden="true"
        ></i>
        {cart.map((item) => {
          let dateFormat = new Date(item.createDate);
          var dd = String(dateFormat.getDate()).padStart(2, "0");
          var mm = String(dateFormat.getMonth() + 1).padStart(2, "0"); //January is 0!
          var yyyy = dateFormat.getFullYear();
          dateFormat = mm + "/" + dd + "/" + yyyy;

          return (
            <CartItems key={item.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Img src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg" />
                <small> {item.name}</small>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <p>{item.category[0]}</p>
                <p>
                  {item.stock
                    ? item.stock + " (In-Stock)"
                    : item.stock + " (Out-of-Stock)"}
                </p>

                <p>{dateFormat}</p>
              </div>
              <div>
                <p>{item.price}</p>
              </div>
            </CartItems>
          );
        })}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ color: "white", fontSize: "18px" }}>
            <p>
              Items added:-
              <strong style={{ color: "green" }}>{` (${itemQuantity})`}</strong>
            </p>
            <p>
              Price:-{" "}
              <strong style={{ color: "green" }}>{`Rs. ${totalPrice}`}</strong>
            </p>
          </div>
          <div onClick={() => history.push("/checkout")}>
            <CheckoutButton color="orange">Checkout</CheckoutButton>
          </div>
        </div>
      </SideCart>
    </>
  );
}

// since we already provided the store that has some states to all component,
// mapSateToProps gets state from store and pass it to component as props
// function mapStateToProps(state) {
//   return {
//     posts: state,
//   };
// }

// export default connect(mapStateToProps)(SidebarCart);
export default SidebarCart;
