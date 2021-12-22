import React from "react";
import { ButtonAddToCart } from "./style/Style.Product";
import { SideCart, CartItems, Img } from "./style/Style.SidebarCart";
import "@fortawesome/fontawesome-free/js/all.js";

import { connect } from "react-redux"; // connect is a function helps connect sidebar component to redux store

function SidebarCart(props) {
  return (
    <>
      <SideCart>
        <i
          style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          className="fa fa-times"
          aria-hidden="true"
        ></i>
        <CartItems>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg" />
            <small>fantech headphone</small>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>electronics</p>
            <p>
              In-stock <strong>- 3</strong>
            </p>

            <p>2020-1-3</p>
          </div>
          <div>
            <p>price $1300</p>
          </div>
        </CartItems>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "white" }}>Total Price rs.5000</p>
          <ButtonAddToCart style={{ color: "orange" }}>
            Checkout
          </ButtonAddToCart>
        </div>
        <p>{props.posts.id}</p>
      </SideCart>
    </>
  );
}

// since we already provided the store that has some states to all component,
// mapSateToProps gets state from store and pass it to component as props
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(SidebarCart);
