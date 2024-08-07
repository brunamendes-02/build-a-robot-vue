import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutation: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
});
