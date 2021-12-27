// import VUE_APP_SERVER_HOST from '@/../env-config';

const VUE_APP_LOCAL_SERVICE = process.env.VUE_APP_LOCAL_SERVICE ? process.env.VUE_APP_LOCAL_SERVICE : 'http://localhost:4000';
export default {
  namespaced: true,
  state: () => ({
    cityRanking: [],
    localDetail: {},
  }),
  mutations: {
    setCityRanking(state, cityRanking) {
      state.cityRanking = cityRanking;
    },
    setLocalDetail(state, localDetail) {
      state.localDetail = localDetail;
    },
  },
  actions: {
    async fetchCityRanking({ commit }, params) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/locals/ranking`, { params });

      commit('setCityRanking', data);
    },
    async fetchLocalDetail({ commit }, params) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/locals/${params.cityCode}`);

      commit('setLocalDetail', data);
    },
  },
  getters: {
    getCityRanking(state) {
      return state.cityRanking;
    },
    getLocalDetail(state) {
      return state.localDetail;
    },
  },
};
