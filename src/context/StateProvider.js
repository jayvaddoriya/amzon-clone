import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ basket: state.basket, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
