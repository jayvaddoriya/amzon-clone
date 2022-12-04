import React, { useContext, useRef } from "react";
import amzonLogo from "../../assets/logo/amzon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../context/StateProvider";

const Header = () => {
  const { basket } = useContext(StateContext);
  const navigate = useNavigate();
  const inputRef = useRef();
  const handleOnSearch = () => {
    inputRef.current.focus();
  };
  const handleOnBasket = () => {
    navigate("/checkout");
  };
  const handleOnLogo = () => {
    navigate("/");
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.amzonLogo} onClick={handleOnLogo}>
          <img className={styles.logoImage} src={amzonLogo} alt="amzon-logo" />
        </div>
        <div className={styles.search}>
          <input ref={inputRef} className={styles.searchInput} type="text" />
          <div onClick={handleOnSearch}>
            <SearchIcon className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.navOption}>
            <span className={styles.firstSpan}>Hello Guest</span>
            <span className={styles.secondSpan}>Sign in</span>
          </div>
          <div className={styles.navOption}>
            <span className={styles.firstSpan}>Returns</span>
            <span className={styles.secondSpan}>& Orders</span>
          </div>
          <div className={styles.navOption}>
            <span className={styles.firstSpan}>Your</span>
            <span className={styles.secondSpan}>Prime</span>
          </div>
          <div className={styles.navBasket} onClick={handleOnBasket}>
            <ShoppingBasketIcon className={styles.basketIcon} />
            <span>{basket?.length}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
