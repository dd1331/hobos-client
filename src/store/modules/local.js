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
    async fetchCityRanking({ commit }) {
      const { data } = await this.$axios.get(`${VUE_APP_SERVER_HOST}/locals/ranking/city`);
      commit('setCityRanking', data);
    },
  },
  getters: {
    getCityRanking(state) {
      return state.cityRanking;
    },
  },
};
