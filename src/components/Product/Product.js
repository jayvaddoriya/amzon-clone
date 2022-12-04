import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import styles from "./index.module.scss";

const Product = ({
  id,
  productDetail,
  productPrice,
  productRating,
  productImages,
}) => {
  const { dispatch } = useContext(StateContext);
  const handleOnAddBasket = () => {
    const item = {
      id: id,
      productDetail: productDetail,
      productPrice: productPrice,
      productRating: productRating,
      productImages: productImages,
    };
    dispatch({
      type: "ADD_BASKET",
      payload: item,
    });
  };
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div className={styles.product}>
      <div className={styles.productInfo}>
        <p>{truncate(`${productDetail}`, 150)}</p>
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
