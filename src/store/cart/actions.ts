export default {
  addCartItem({ commit }: any, id: number) {
    commit("ADD_CART_ITEM", id);
  },
  removeCartItem({ commit }: any, id: number) {
    commit("REMOVE_CART_ITEM", id);
  },
  upItemQty({ commit }: any, id: number){
    commit("UP_ITEM_QTY", id)
  },
  downItemQty({ commit }: any, id: number){
    commit("DOWN_ITEM_QTY", id)
  }
};
