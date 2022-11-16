export default {
  state: () => ({
    preloadIsOpen: false,
  }),

  getters: {
    preloadIsOpen(state) {
      return state.preloadIsOpen;
    },
  },

  mutations: {
    setPreloadIsOpen(state, payload) {
      state.preloadIsOpen = payload;
    },
  },
}