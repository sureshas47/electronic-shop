import React from "react";
import Product from "./Product";
import { ProductList } from "./style/Style.Home";

function Home() {
  return (
    <div>
      <h3>Todays's Picks</h3>
      <ProductList>
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductList>
    </div>
  );
}

export default Home;
