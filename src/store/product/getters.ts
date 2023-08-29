import inventory from "../../food.json";

export default {
  products() {
    return inventory
  },
  popularProducts() {
    return inventory.slice(0, 8)
  },
};
