import { type CartState } from "./type";

const getItem = (state: CartState, id: number) => {
  return state.cartItems.find((item) => item.id === id);
};

export default {
  ADD_CART_ITEM(state: CartState, id: number) {
    const existingItem = getItem(state, id);

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      state.cartItems.push({ id, qty: 1 });
    }
  },
  REMOVE_CART_ITEM(state: CartState, id: number) {
    const { cartItems } = state;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) {
        cartItems.splice(i, 1);
      }
    }
  },
  UP_ITEM_QTY(state: CartState, id: number) {
    const existingItem = getItem(state, id);

    if (existingItem) {
      existingItem.qty += 1;
    }
  },
  DOWN_ITEM_QTY(state: CartState, id: number) {
    const existingItem = getItem(state, id);

    if (existingItem) {
      existingItem.qty -= 1;
    }
  },
};
