import React from "react";
import { ButtonAddToCart } from "./style/Style.Product";
import { SideCart, CartItems, Img } from "./style/Style.SidebarCart";
import "@fortawesome/fontawesome-free/js/all.js";

// import { connect } from "react-redux"; // connect is a function helps connect sidebar component to redux store
// alternative of mapStateToProps, mapDispatchToProps are useSelector and useDispatch
import { useSelector } from "react-redux";

function SidebarCart(props) {
  const myCartItems = useSelector((state) => state.cartItems[0]);
  return (
    <>
      <SideCart>
        <i
          style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          className="fa fa-times"
          aria-hidden="true"
        ></i>
        {myCartItems.map((item) => {
          return (
            <CartItems key={item.createDate}>
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

                <p>{item.createDate}</p>
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
          <p style={{ color: "white" }}>Total Price rs.5000</p>
          <ButtonAddToCart style={{ color: "orange" }}>
            Checkout
          </ButtonAddToCart>
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
