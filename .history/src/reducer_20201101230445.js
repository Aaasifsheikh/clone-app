
export const initialState = {
  basket: [],
  user: null,
};
const reducers=(state, action) =>{
    console.log(action);
  switch (action.type) {
    case "Add_To_Basket":
      // build logic to add something to basket
      return {state};
      break;

    case "Remove_From_Basket":
      //  Build logic to Remove Item from Basket
      return {state};
      

    default:
      return state;
  }
)
export default reducers;