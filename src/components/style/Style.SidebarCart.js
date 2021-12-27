import styled from "styled-components";

export const SideCart = styled.div`
  height: 100%;
  width: 400px;
  position: fixed;
  top: 60px;
  right: 0;
  background-color: #111;
  padding-top: 60px;
  overflow-y: scroll;
  overflow-x: scroll;
  /* overflow-x: hidden;  Disable horizontal scroll */
  /* z-index: 1; Stay on top */
`;

export const CartItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  color: white;
  align-items: center;
  text-align: center;
  font-size: x-small;
  border: 1px solid darkorange;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
`;
