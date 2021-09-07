import Vue from "vue";
import Vuex from "vuex";
import characters from "./modules/characters";

Vue.use(Vuex);

export default new Vuex.Store({
  // states are the global variables of the project, so you can use them in every component.
  state: {},
  // mutations are used to modify the state
  mutations: {},
  // actions are just for the api calls
  actions: {},
  // modules are used when it is a big project
  modules: {
    characters,
  },
});
