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
      const { data } = await this.$axios.post('http://192.168.35.219:3000/auth/naver', { ...payload });
      commit('SET_USER', data);
      // TODO refactor
      this.$axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
    },
    async logout({ commit }) {
      commit('REMOVE_USER');
    },
    async loginWithJwt({ commit }, payload) {
      const result = await this.$axios.post(`${VUE_APP_SERVER_HOST}/auth/jwt`, payload).then((res) => {
        if (res.data) {
          commit('SET_USER', res.data);
          this.$axios.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
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
