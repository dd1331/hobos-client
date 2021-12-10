/* eslint-disable no-param-reassign */
import VUE_APP_SERVER_HOST from '@/../env-config';
//

const getAppUser = () => JSON.parse(localStorage.getItem('appUser'));

export default {
  namespaced: true,
  state: () => ({
    appUser: getAppUser(),
  }),
  mutations: {
    SET_USER(state, user) {
      state.appUser = user;
      localStorage.setItem('appUser', JSON.stringify(user));
    },
    REMOVE_USER(state) {
      state.appUser = null;
      localStorage.removeItem('appUser');
    },
  },
  actions: {
    async loginWithNaver({ commit }, payload) {
      const { accessToken } = payload;

      localStorage.setItem('accessToken', accessToken);

      const { data } = await this.$axios.get(`${VUE_APP_SERVER_HOST}/auth/login`);

      if (!data) return false;
      commit('SET_USER', data);

      return true;
    },
    async logout({ commit }) {
      this.$axios.interceptors.request.use(
        (config) => {
          config.headers.Authorization = null;
          return config;
        },
        (error) => Promise.reject(error),
      );
      localStorage.removeItem('accessToken');
      commit('REMOVE_USER');
    },
    async loginWithJwt({ commit }, payload) {
      const result = await this.$axios.post(`${VUE_APP_SERVER_HOST}/auth/jwt`, payload).then((res) => {
        if (res.data) {
          localStorage.setItem('accessToken', res.data.accessToken);
          commit('SET_USER', res.data);
          return res.data;
        }
        return false;
      });
      return result;
    },
  },
  getters: {
    getAppUser(state) {
      return state.appUser;
    },
  },
};
