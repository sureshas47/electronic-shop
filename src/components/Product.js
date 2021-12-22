import { React, useEffect, useState, useRef, useHistory } from "react";
import {
  Wrapper,
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

  //   const history = useHistory()
  //   onClick = {()=> history.push('/test', { data: { name: 'test' } })
  // } //test page ma const testComp = ({match}) =>{ console.log(match) // should show data }

  return (
    <>
      <Wrapper>
        {products.map((product) => {
          return (
            <ItemContainer key={product.id} className="card">
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
                <ButtonAddToCart onClick={() => setShowComponent(true)}>
                  Add to Cart
                </ButtonAddToCart>
              </AddToCart>
            </ItemContainer>
          );
        })}
        {showComponent ? <SidebarCart /> : null}
      </Wrapper>
    </>
  );
}

export default Product;
