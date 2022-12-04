import React from "react";
import styles from "./index.module.scss";
import amzonAdv from "../../assets/logo/amzon_adv.jpg";
import SubTotal from "../SubTotal/SubTotal";

const CheckOut = () => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutLeft}>
        <img className={styles.amzonAdvImage} src={amzonAdv} alt="amzonAdv" />
        <div className={styles.shoppingArea}>
          <h2>Your Shopping Basket</h2>
          <hr />
          BasketItem
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className={styles.checkoutRight}>
        <SubTotal />
      </div>
    </div>
  );
};

export default CheckOut;
