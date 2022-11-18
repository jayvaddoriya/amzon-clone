import React from "react";
import styles from "./index.module.scss";
import homeScreen from "../../assets/home/homeScreen.jpg";
import Product from "../Product/Product";
import productOne from "../../assets/product/product_1.png";

const Home = () => {
  return (
    <div className={`container ${styles.home}`}>
      <div className={styles.homeScreenImagediv}>
        <img
          className={styles.homeScreenImg}
          src={homeScreen}
          alt="home-screen"
        />
      </div>
      <div className={styles.homeRow}>
        <Product
          productDetail=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
          productPrice={11.98}
          productRating="🌟"
          productImages={productOne}
        />
        <Product
          productDetail=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse vel incidunt ut. Quas, dolores aut! Quos iusto voluptates."
          productPrice={11.98}
          productRating="🌟"
          productImages={productOne}
        />
      </div>
      <div className={styles.homeRow}>
        <Product
          productDetail=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse vel incidunt ut. Quas, dolores aut! Quos iusto voluptates, beatae dolorum officia eaque blanditiis ducimus."
          productPrice={11.98}
          productRating="🌟"
          productImages={productOne}
        />
        <Product
          productDetail=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse vel incidunt ut."
          productPrice={11.98}
          productRating="🌟"
          productImages={productOne}
        />
        <Product
          productDetail=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse vel incidunt ut. Quas, dolores aut!."
          productPrice={11.98}
          productRating="🌟"
          productImages={productOne}
        />
      </div>
      <div className={styles.homeRow}>
        <Product
          productDetail=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse vel incidunt ut. Quas, dolores aut! Quos iusto voluptates, beatae dolorum officia eaque blanditiis ducimus, beatae dolorum officia eaque blanditiis ducimus."
          productPrice={11.98}
          productRating="🌟"
          productImages={productOne}
        />
      </div>
    </div>
  );
};

export default Home;
