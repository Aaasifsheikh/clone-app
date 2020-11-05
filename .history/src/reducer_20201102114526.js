import ImageMobile from "./Product_image/Mobile Image 2020-10-05 at 3.03.19 PM.jpeg";
import ImageLap from "./Product_image/Laptop Image 2020-10-05 at 3.06.03 PM.jpeg";

export const initialState = {
  basket: [
    {
      id: "12321341",
      title: "Samsung Galaxy A50s (Prism crush Black, 4GB RAM, 128GB Storage)",
      price: 22999,
      rating: 5,
      image: ImageMobile,
    },
    {
      id: "12321341",
      title: "HP 15 10th Generation Core if Processor 15.6-inch FHD Laptop",
      price: 54990,
      rating: 5,
      image: ImageLap,
    },
  ],
  user: null,
};
const reducer = (state=initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_To_Basket":
      // build logic to add something to basket
      return {
         ...state,
        basket: [...state.basket, action.item] };
      break;

    case "Remove_From_Basket":
      //  Build logic to Remove Item from Basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
    
       if(index >= 0){
         newBasket.splice
       }


      return { ...state};

    default:
      return state;
  }
};
export default reducer;
