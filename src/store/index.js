import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import auth from './modules/auth';
import post from './modules/post';
import comment from './modules/comment';
import common from './modules/common';
import hashtag from './modules/hashtag';
import chat from './modules/chat';
import local from './modules/local';
import cafe from './modules/cafe';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    post,
    auth,
    comment,
    common,
    hashtag,
    chat,
    local,
    cafe,
  },
});

export default store;
