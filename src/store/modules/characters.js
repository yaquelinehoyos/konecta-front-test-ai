import axios from "axios";

export default {
  namespaced: true,
  state: {
    characters: null,
  },
  mutations: {
    // in this mutation, we store the characters in the state
    setCharacters(state, characters) {
      state.characters = characters;
    },
  },
  actions: {
    // this function get the characters from the pokeapi
    async getCharacters({ commit }, payload) {
      try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
          params: payload,
        });
        if (response.status == 200) {
          // when the api send a response, we need to store in the state the characters
          commit("setCharacters", response.data.results);
        }
        return response.data.results;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
    //this function get the information about a single character
    async getSingleCharacter(_, name) {
      try {
        let response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        return response;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
  },
};
