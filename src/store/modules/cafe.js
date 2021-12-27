const VUE_APP_LOCAL_SERVICE = process.env.VUE_APP_LOCAL_SERVICE ? process.env.VUE_APP_LOCAL_SERVICE : 'http://localhost:4000';
export default {
  namespaced: true,
  state: () => ({
    cafeRanking: [],
  }),
  mutations: {
    setCafeRanking(state, cafeRanking) {
      state.cafeRanking = cafeRanking;
    },
  },
  actions: {
    async fetchCafeRanking({ commit }, params) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/places/cafe/ranking`, { params });
      commit('setCafeRanking', data);
    },
  },
  getters: {
    getCafeRanking(state) {
      return state.cafeRanking;
    },
  },
};
