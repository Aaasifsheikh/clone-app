
export const initialState = {
  basket: ["Aasif","sheikh"],
  user: null,
};
const reducer=(state, action) =>{
    console.log(action);
  switch (action.type) {
    case "Add_To_Basket":
      // build logic to add something to basket
      return {...state, 
        basket:
      };
      break;

    case "Remove_From_Basket":
      //  Build logic to Remove Item from Basket
      return {state};
      break;

    default:
      return state;
  }
}
export default reducer;