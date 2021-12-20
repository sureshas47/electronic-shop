import { React, useEffect, useState, useRef } from "react";
import {
  ItemContainer,
  ItemImage,
  ItemDetails,
  ItemPrice,
  AddToCart,
  ButtonAddToCart,
  Img,
} from "./style/Style.Product";
import SidebarCart from "./Sidebar.Cart";
import { getData } from "../api/request";

function Product() {
  const [products, setProducts] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    getData()
      .then((data) => setProducts(data.data.product))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          backgroundColor: "black",
          gap: "30px",
          overflow: "hidden",
        }}
      >
        {products.map((product) => {
          return (
            <ItemContainer key={product.id}>
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
                        ? product.stock + " (In-Stock)"
                        : product.stock + " (Out-of-Stock)"}
                    </strong>
                  </small>
                </p>
                <ItemPrice>{product.price}</ItemPrice>
              </ItemDetails>
              <AddToCart>
                <ButtonAddToCart
                  product={product.stock}
                  onClick={() => setShowComponent(true)}
                >
                  Add to Cart
                </ButtonAddToCart>
              </AddToCart>
            </ItemContainer>
          );
        })}

        <div>{showComponent ? <SidebarCart /> : null}</div>
      </div>
    </>
  );
}

export default Product;
