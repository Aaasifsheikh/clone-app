import ImageMobile from "./Product_image/Mobile Image 2020-10-05 at 3.03.19 PM.jpeg";
import ImageLap from "./Product_image/Laptop Image 2020-10-05 at 3.06.03 PM.jpeg";

export const initialState = {
  basket: [
    
  ],
  user: null,
};
export const getBaskettotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_To_Basket":
      // build logic to add something to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;

    case "Remove_From_Basket":
      //  Build logic to Remove Item from Basket

      // we clone the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exist in basket, remove it.
        newBasket.splice(index, 1);
      } else {
        console.warn(`you cant remove with (id:${action.id}) as its no more `);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
export default reducer;
