export default {
  state: () => ({
    filterByCountry: null,
    filterByScore: null,
  }),

  getters: {
    filterByCountry(state) {
      return state.filterByCountry;
    },
    filterByScore(state) {
      return state.filterByScore;
    },
  },

  mutations: {
    setFilterByCountry(state, payload) {
      state.filterByCountry = payload.country;
    },
    setFilterByScore(state, payload) {
      state.filterByScore = payload.score;
    },
  },
}