import React, { createContext, useContext, useReducer } from "react";
// data layer
export const StateContext = createContext();
// B
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(initialState, reducer)}>
    {children}
  </StateContext.Provider>;
};
