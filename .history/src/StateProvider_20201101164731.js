import React, { createContext,useContext,useReducer } from "react"
// data layer
export const StateContext = createContext()

export const StateProvider =(Reducer,initialState,children)=>{
  <StateContext.Provider value={useReducer(initialState,)}>

  </StateContext.Provider>
}