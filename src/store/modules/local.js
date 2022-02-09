import { VUE_APP_LOCAL_SERVICE, VUE_APP_SERVER_HOST } from '@/../env-config';

export default {
  namespaced: true,
  state: () => ({
    cityRanking: [],
    localDetail: {},
    localReview: [],
    neighbors: [],
  }),
  mutations: {
    setCityRanking(state, cityRanking) {
      state.cityRanking = cityRanking;
    },
    setLocalDetail(state, localDetail) {
      state.localDetail = localDetail;
    },
    setNeighbors(state, neighbors) {
      state.neighbors = neighbors;
    },
    setLocalReview(state, localReview) {
      state.localReview = localReview;
    },
    addNextCityRanking(state, cityRanking) {
      state.cityRanking = [...state.cityRanking, ...cityRanking];
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
    async fetchNeighbors({ commit }, params) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/locals/${params.cityCode}/neighbors`);

      commit('setNeighbors', data);
    },
    async createReview({ dispatch }, params) {
      try {
        await this.$axios.post(`${VUE_APP_SERVER_HOST}/locals/review`, params);
        dispatch('fetchLocalReview', { cityCode: params.code });
      } catch (error) {
        if (error.response.status === 401) this.$router.push('/login');
      }
    },
    async fetchLocalReview({ commit }, params) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/reviews/local/${params.cityCode}`);
      commit('setLocalReview', data);
    },
    async fetchNextCityRanking({ commit }, params) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/locals/ranking`, { params });
      commit('addNextCityRanking', data);
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
    getNeighbors(state) {
      return state.neighbors;
    },

  },
};
