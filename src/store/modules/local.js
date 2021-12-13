import VUE_APP_SERVER_HOST from '@/../env-config';

export default {
  namespaced: true,
  state: () => ({
    cityRanking: [],
  }),
  mutations: {
    setCityRanking(state, cityRanking) {
      state.cityRanking = cityRanking;
    },
  },
  actions: {
    async fetchCityRanking({ commit }, payload) {
      const { data } = await this.$axios.get(`${VUE_APP_SERVER_HOST}/locals/ranking/city`, { params: payload });

      commit('setCityRanking', data);
    },
  },
  getters: {
    getCityRanking(state) {
      return state.cityRanking;
    },
  },
};
