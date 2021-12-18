import React from "react";
import { Formik, Form } from "formik";
import {
  ItemContainer,
  ItemImage,
  ItemDetails,
  ItemPrice,
  AddToCart,
  ButtonAddToCart,
  Img,
} from "./style/Style.Product";

function Product() {
  return (
    <>
      <ItemContainer>
        <ItemImage>
          <Img
            src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg"
            alt="headphone"
          />
        </ItemImage>

        <ItemDetails>
          <h3>Fantech - Headset</h3>
          <small>
            <p> Electronics</p>
          </small>
          <p>
            <small>
              Availability - <strong>In-Stock</strong>
            </small>
          </p>
          <ItemPrice>NPR - 5000.00</ItemPrice>
        </ItemDetails>

        <AddToCart>
          <ButtonAddToCart>Add To Cart</ButtonAddToCart>
        </AddToCart>
      </ItemContainer>
    </>
  );
}

export default Product;
