import { type CartState } from "./type";
import inventory from "../../food.json";

export default {
  getItemQty(state: CartState) {
    return (id: number) => {
      return state.cartItems.find((item) => item.id === id)?.qty;
    };
  },
  cartTotalPrice(state: CartState) {
    return state.cartItems
      .reduce((total, cartItem) => {
        return cartItem.qty * inventory[cartItem.id].price.USD + total;
      }, 0)
      .toFixed(2);
  },
};
