import { type CartState } from "./type";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state: (): CartState => ({
    cartItems: [],
  }),
  mutations,
  actions,
  getters
};
