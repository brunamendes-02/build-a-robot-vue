import { createStore } from 'vuex';
import robotsModule from './module/robots';
import usersModule from './module/users';

export default createStore({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
