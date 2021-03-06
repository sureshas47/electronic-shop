import { React, useEffect, useState, useRef, useHistory } from "react";
import {
  Wrapper,
  ItemContainer,
  ItemImage,
  ItemDetails,
  ItemPrice,
  AddToCart,
  Img,
} from "./style/Style.Product";
import SidebarCart from "./Sidebar.Cart";
import { getData } from "../api/request";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/redux/actions/action";
import styled from "styled-components";
import RootButton from "./Buttons/Button";

const ButtonAddToCart = styled(RootButton)`
  background-color: black;
  color: white;
  ${(props) =>
    props.product.stock < 0 ? "pointer-events:none; opacity:0.2" : ""};
`;

function Product() {
  const [products, setProducts] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getData()
      .then((data) => setProducts(data.data.product))
      .catch((error) => console.log(error));
  }, []);
  // pass data through route
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
              <AddToCart
                onClick={() => {
                  dispatch(addToCart(product));
                  setShowComponent(true);
                  // alert(JSON.stringify(product, null, 2));
                }}
              >
                <ButtonAddToCart product={product}>Add to Cart</ButtonAddToCart>
              </AddToCart>
            </ItemContainer>
          );
        })}
      </Wrapper>
      {showComponent ? <SidebarCart /> : null}
    </>
  );
}

export default Product;
