import { VUE_APP_LOCAL_SERVICE, VUE_APP_SERVER_HOST } from '@/../env-config';

export default {
  namespaced: true,
  state: () => ({
    cityRanking: [],
    localDetail: {},
    localReview: [],
  }),
  mutations: {
    setCityRanking(state, cityRanking) {
      state.cityRanking = cityRanking;
    },
    setLocalDetail(state, localDetail) {
      state.localDetail = localDetail;
    },
    setLocalReview(state, localReview) {
      state.localReview = localReview;
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
    async createReview({ dispatch }, params) {
      await this.$axios.post(`${VUE_APP_SERVER_HOST}/locals/review`, params);
      dispatch('fetchLocalReview', params.cityCode);
    },
    async fetchLocalReview({ commit, state }) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/reviews/${state.localDetail.cityCode}`);
      commit('setLocalReview', data);
    },
  },
  getters: {
    getCityRanking(state) {
      return state.cityRanking;
    },
    getLocalDetail(state) {
      return state.localDetail;
    },
    getLocalReview(state) {
      return state.localReview;
    },

  },
};
