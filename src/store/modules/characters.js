import axios from "axios";

export default {
    namespaced: true,
    state: {
        characters: null,
    },
    mutations: {
        setCharacters(state, characters) {
            state.characters = characters;
        },
    },
    actions: {
        async getCharacters({ commit }, payload) {
            try {
                let response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon`,
                    {
                        params: payload
                    }
                );
                if (response.status == 200) {
                    commit("setCharacters", response.data.results);
                }
                return response.data.results;
            } catch (err) {
                console.log(err)
            }
        },
        async getSingleCharacter(_, name) {
            try {
                let response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${name}`,
                );
                return response;
            } catch (err) {
                console.log(err)
            }
        }
    }
}