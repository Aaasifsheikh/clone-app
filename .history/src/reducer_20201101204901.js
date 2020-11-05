
export const initialState = {
  basket: ["Aasif","sheikh"],
};
function reducer(state, action) {
    log
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
export default reducer;