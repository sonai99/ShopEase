import React from "react";
// import { CartState } from "../../context/Context";
// import SingleProduct from "../Products/SingleProduct";
// import Header from "../Header/Header";
import HomePage from "../HomePageBanner/HomePage";
// import ItemsGrid from "../ItemsGrid/ItemsGrid";
import ProductCategories from "../ProductCategories/ProductCategories";
import HomePageBanner from "../HomePageBanner/HomePageBanner";

const Home = () => {
  // const {
  //   state: { products },
  // } = CartState();
  // console.log(products);

  return (
    <>
      <HomePage />
      <ProductCategories />
      <HomePageBanner />
      {/* <ItemsGrid /> */}
    </>
  );
};

export default Home;
