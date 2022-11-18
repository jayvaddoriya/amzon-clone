import React from "react";
import styles from "./index.module.scss";

const Product = ({
  productDetail,
  productPrice,
  productRating,
  handleOnAddBasket,
  productImages,
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.productInfo}>
        <p>{productDetail}</p>
        <p className={styles.productRate}>
          <small>$</small>
          <strong>{productPrice}</strong>
        </p>
        <div className={styles.productRating}>
          <p>{productRating}</p>
        </div>
      </div>
      <div className={styles.productImage}>
        <img src={productImages} alt="product" />
      </div>
      <div className={styles.productBtn}>
        <button onClick={handleOnAddBasket}>Add to basket</button>
      </div>
    </div>
  );
};

export default Product;
