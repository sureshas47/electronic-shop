import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: #a13737;
  width: 250px;
  height: 400px;
  border-right: 2px solid black;
  margin: 10px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;
export const ItemImage = styled.div``;
export const Img = styled.img`
  width: 250px;
  height: 180px;
`;
export const ItemDetails = styled.div``;
export const ItemPrice = styled.strong`
  color: #efe8;
`;
export const AddToCart = styled.div``;

export const ButtonAddToCart = styled.button`
  background-color: Black;
  color: white;
  border: none;
  border-radius: 20px;
  width: 110px;
  height: 30px;
  font-size: medium;
  cursor: pointer;
  font-weight: 700;
  margin-top: 30px;
  :hover {
    background-color: white;
    color: black;
    text-decoration: underline darkgray;
  }
`;
