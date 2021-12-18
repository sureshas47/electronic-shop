import { React, useEffect, useState } from "react";
import {
  ItemContainer,
  ItemImage,
  ItemDetails,
  ItemPrice,
  AddToCart,
  ButtonAddToCart,
  Img,
} from "./style/Style.Product";
import { getData } from "../api/request";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData()
      .then((data) => setProducts(data.data.product))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <ItemContainer>
            <ItemImage>
              <Img
                src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg"
                alt="headphone"
              />
            </ItemImage>

            <ItemDetails>
              <h3>{product.name}</h3>
              <small>
                <p>Category- {product.category[0]}</p>
              </small>
              <p>
                <small>
                  Availability-
                  <strong>
                    {product.stock > 0
                      ? product.stock + " (In Stock)"
                      : product.stock + " (Not-In-Stock)"}
                  </strong>
                </small>
              </p>
              <ItemPrice>{product.price}</ItemPrice>
            </ItemDetails>

            <AddToCart>
              <ButtonAddToCart>Add To Cart</ButtonAddToCart>
            </AddToCart>
          </ItemContainer>
        );
      })}
    </>
  );
}

export default Product;
