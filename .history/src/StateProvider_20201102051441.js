import React, { createContext, useContext, useReducer } from "react";
// data layer
export const StateContext = createContext();
// Build Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(, reducer)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside of a component
export const useStateValue =()=> useContext(StateContext);

