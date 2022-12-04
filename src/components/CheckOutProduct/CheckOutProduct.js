import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import styles from "./index.module.scss";

const CheckOutProduct = ({
  id,
  productDetail,
  productPrice,
  productRating,
  productImages,
}) => {
  const { dispatch } = useContext(StateContext);
  const removeToBasket = () => {
    dispatch({
      type: "REMOVE_BASKET",
      payload: id,
    });
  };
  return (
    <div className={styles.CheckOutProduct}>
      <div className={styles.productImage}>
        <img src={productImages} alt="product" />
      </div>
      <div className={styles.productInfo}>
        <p>{productDetail}</p>
        <p className={styles.productRate}>
          <small>$</small>
          <strong>{productPrice}</strong>
        </p>
        <div className={styles.productRating}>
          {Array(productRating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <div className={styles.productBtn}>
          <button onClick={removeToBasket}>Remove to basket</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutProduct;
