import React from "react";
import styles from "./index.module.scss";
import homeScreen from "../../assets/home/homeScreen.jpg";
import Product from "../Product/Product";
import productOne from "../../assets/product/product_1.png";
import productSecond from "../../assets/product/product_2.jpg";
import productThree from "../../assets/product/product_3.jpg";
import productFour from "../../assets/product/product_4.jpg";
import productFive from "../../assets/product/product_5.jpeg";
import productSix from "../../assets/product/product_6.jpg";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeScreenImagediv}>
        <img
          className={styles.homeScreenImg}
          src={homeScreen}
          alt="home-screen"
        />
      </div>
      <div className={styles.homeRow}>
        <Product
          id="784651464"
          productDetail="Lean startup is a methodology for developing businesses and products that aims to shorten product development cycles and rapidly discover if a proposed business model is viable; this is achieved by adopting a combination of business-hypothesis-driven experimentation, iterative product releases, and validated learning."
          productPrice={11.98}
          productRating={5}
          productImages={productOne}
        />
        <Product
          id="4649874988"
          productDetail=" sewing machine, any of various machines for stitching material (such as cloth or leather), usually having a needle and shuttle to carry thread and powered by treadle, waterpower, or electricity. It was the first widely distributed mechanical home appliance and has been an important industrial machine."
          productPrice={93.85}
          productRating={3}
          productImages={productSecond}
        />
      </div>
      <div className={styles.homeRow}>
        <Product
          id="6985465469"
          productDetail=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse vel incidunt ut. Quas, dolores aut! Quos iusto voluptates, beatae dolorum officia eaque blanditiis ducimus."
          productPrice={98.15}
          productRating={4}
          productImages={productThree}
        />
        <Product
          id="844644888"
          productDetail="Radio is sound communication by radio waves, usually through the transmission of music, news, and other types of programs from single broadcast stations to multitudes of individual listeners equipped with radio receivers."
          productPrice={296}
          productRating={2}
          productImages={productFour}
        />
        <Product
          id="156644698"
          productDetail="Mixers help automate the repetitive tasks of stirring, whisking or beating. When the beaters are replaced by a dough hook, a mixer may also be used to knead. A mixer may be a handheld mechanism known as an eggbeater, a handheld motorized beater, or a drill mixer."
          productPrice={129}
          productRating={1}
          productImages={productFive}
        />
      </div>
      <div className={styles.homeRow}>
        <Product
          id="126549874"
          productDetail="an electronic system of transmitting transient images of fixed or moving objects together with sound over a wire or through space by apparatus that converts light and sound into electrical waves and reconverts them into visible light rays and audible sound."
          productPrice={485}
          productRating={4}
          productImages={productSix}
        />
      </div>
    </div>
  );
};

export default Home;
