import { VUE_APP_LOCAL_SERVICE, VUE_APP_SERVER_HOST } from '@/../env-config';

export default {
  namespaced: true,
  state: () => ({
    cafeRanking: [],
    cafeDetail: {},
    cafeReviews: [],
  }),
  mutations: {
    setCafeRanking(state, cafeRanking) {
      state.cafeRanking = cafeRanking;
    },
    addNextCafeRanking(state, cafeRanking) {
      state.cafeRanking = [...state.cafeRanking, ...cafeRanking];
    },
    setCafeDetail(state, cafeDetail) {
      state.cafeDetail = cafeDetail;
    },
    setCafeReviews(state, cafeReviews) {
      state.cafeReviews = cafeReviews;
    },
  },
  actions: {
    async fetchCafeRanking({ commit }, params) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/places/cafe/ranking`, { params });
      commit('setCafeRanking', data);
    },
    async fetchNextCafeRanking({ commit }, params) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/places/cafe/ranking`, { params });
      commit('addNextCafeRanking', data);
    },
    async fetchCafeDetail({ commit }, params) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/places/cafe/${params.cafeCode}`);
      commit('setCafeDetail', data);
    },
    async fetchCafeReviews({ commit }, params) {
      const { data } = await this.$axios.get(`${VUE_APP_LOCAL_SERVICE}/reviews/cafe/${params.cafeCode}`);
      commit('setCafeReviews', data);
    },
    async createReview({ dispatch }, params) {
      await this.$axios.post(`${VUE_APP_SERVER_HOST}/locals/review`, params);
      dispatch('fetchCafeReviews', { cafeCode: params.code });
    },
  },
  getters: {
    getCafeRanking(state) {
      return state.cafeRanking;
    },
    getCafeDetail(state) {
      return state.cafeDetail;
    },
    getCafeReviews(state) {
      return state.cafeReviews;
    },
  },
};
