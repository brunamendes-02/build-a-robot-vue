import { createStore } from 'vuex';
import robotsModule from './module/robots';
import usersModule from './module/users';

export default createStore({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {
    foo(state) {
      return `root-getter/${state.foo}`;
    },
  },
});
