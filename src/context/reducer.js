export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.productPrice + amount, 0);
export const truncate = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + "..." : string;
};
const reducer = (state, action) => {
  console.log(action);
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
    default:
      return state;
  }
};

export default reducer;
