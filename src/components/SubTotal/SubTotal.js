import React from "react";
import CurrencyFormat from "react-currency-format";
import styles from "./index.module.scss";

const SubTotal = () => {
  return (
    <div className={styles.subTotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({value} items):<strong>{value}</strong>
            </p>
            <small className={styles.conditionCheck}>
              <input type="checkbox" />
              Ths order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <button>Procced To Checkout</button>
    </div>
  );
};

export default SubTotal;
