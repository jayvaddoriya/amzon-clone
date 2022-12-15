export const initialState = {
  basket: [],
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.productPrice + amount, 0);

export const truncate = (string, n) =>
  string?.length > n ? string.substr(0, n - 1) + "..." : string;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_BASKET":
      const index = state.basket.findIndex(
        (items) => items.id === action.payload
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        alert("deleted");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "LOGIN": {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
