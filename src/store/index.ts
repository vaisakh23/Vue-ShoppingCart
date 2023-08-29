import { type InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { type CartState } from "./cart/type";
import cart from "./cart";
import product from "./product";

export type State = {
  count: number;
  cart: CartState;
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  modules: { cart, product },
  state: () => ({
    count: 0,
  }),
});

export function useStore() {
  return baseUseStore(key);
}
