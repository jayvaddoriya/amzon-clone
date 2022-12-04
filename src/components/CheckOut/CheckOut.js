import React, { useContext } from "react";
import styles from "./index.module.scss";
import amzonAdv from "../../assets/logo/amzon_adv.jpg";
import SubTotal from "../SubTotal/SubTotal";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct";
import { StateContext } from "../../context/StateProvider";

const CheckOut = () => {
  const { basket } = useContext(StateContext);
  console.log(basket);
  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutLeft}>
        <img className={styles.amzonAdvImage} src={amzonAdv} alt="amzonAdv" />
        <div className={styles.shoppingArea}>
          <h2>Your Shopping Basket</h2>
          <hr />
          {basket?.map((item, index) => {
            return (
              <CheckOutProduct
                key={index}
                id={item.id}
                productDetail={item.productDetail}
                productPrice={item.productPrice}
                productRating={item.productRating}
                productImages={item.productImages}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.checkoutRight}>
        <SubTotal />
      </div>
    </div>
  );
};

export default CheckOut;
