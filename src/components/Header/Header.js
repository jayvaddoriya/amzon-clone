import React, { useContext, useRef } from "react";
import amzonLogo from "../../assets/logo/amzon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext, StateContext } from "../../context/StateProvider";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Header = () => {
  const { basket } = useContext(StateContext);
  const { currentUser, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const inputRef = useRef();
  const handleOnSearch = () => {
    inputRef.current.focus();
  };
  const handleOnBasket = () => {
    navigate("/checkout");
  };
  const handleOnLogin = () => {
    if (currentUser) {
      signOut(auth)
        .then(() => {
          dispatch({ type: "LOGOUT" });
          navigate("/login");
          toast.success("Sign Out")
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
    navigate("/login");
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
          <div className={styles.navOption} onClick={handleOnLogin}>
            <span className={styles.firstSpan}>
              Hello,{currentUser ? currentUser?.email: "Guest"}
            </span>
            <span className={styles.secondSpan}>
              {currentUser ? "Sign Out" : "Sign in"}
            </span>
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
