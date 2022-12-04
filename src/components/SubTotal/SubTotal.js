import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../context/reducer";
import { StateContext } from "../../context/StateProvider";
import styles from "./index.module.scss";

const SubTotal = () => {
  const { basket } = useContext(StateContext);
  console.log(basket);
  return (
    <div className={styles.subTotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>
            <small className={styles.conditionCheck}>
              <input type="checkbox" />
              Ths order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <button>Procced To Checkout</button>
    </div>
  );
};

export default SubTotal;
