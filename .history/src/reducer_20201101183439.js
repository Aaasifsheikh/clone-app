import React from "react";
export const initialState = {
  basket: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "Add_To_Basket":
      // build logic to add something to basket
      break;

    case "Remove_From_Basket":
      //  Build logic to Remove Item from Basket
      break;

    default:
      return state;
  }
}
export default reducer