export const initialState = {
  basket: [{
    id:"12321341",
    title:"Samsung Galaxy A50s (Prism crush Black, 4GB RAM, 128GB Storage",
    price={22999},
    rating:{5},
    image:{ImageMobile},
  }],
  user: null,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_To_Basket":
      // build logic to add something to basket
      return { state };
      break;

    case "Remove_From_Basket":
      //  Build logic to Remove Item from Basket
      return { state };

    default:
      return state;
  }
};
export default reducer;
