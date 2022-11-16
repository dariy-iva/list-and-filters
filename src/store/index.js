import {createStore} from 'vuex';
import UsersModule from "@/store/modules/UsersModule";
import FiltersModule from "@/store/modules/FiltersModule";
import SupportModule from "@/store/modules/SupportModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users: UsersModule,
    filters: FiltersModule,
    support: SupportModule
  }
})
