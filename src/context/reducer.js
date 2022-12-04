export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };

    default:
      return state;
  }
};

export default reducer;
