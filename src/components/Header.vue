<template>
  <div>
    <v-app-bar class="no-padding bg-white"  :style="wrapper"
      style="position: relative; background:white;" flat >
      <div @click="goHome">
        <h1 class="m-pointer" style="color:#ff7f32">
          hobos
        </h1>
      </div>
      <Menu-Slider v-if="!$router.path && !isMobile" style="margin-left: 20px"></Menu-Slider>
      <v-spacer></v-spacer>
        <v-icon class="grey--text text--darken-1 mr-2" @click="routeTo('/posts/search')">
          mdi-magnify
        </v-icon>
        <span class="black--text m-pointer" v-if="!user" @click="$router.push('/login')">
          로그인
        </span>
        <div v-else>
          <v-icon class="grey--text text--darken-1 mr-2" @click="routeTo('/user/profile')">
            mdi-account-outline
          </v-icon>
          <span class="black--text m-pointer"  @click="logout">
            로그아웃
          </span>
        </div>
    </v-app-bar>
    <div v-if="isMobile" style="border-top: 1px solid #ff7f32; border-bottom: 1px solid"
          class="grey--text text--lighten-1"
        >
          <div :style="wrapper">
            <Menu-Slider v-if="!$router.path"></Menu-Slider>
         </div>
    </div>
  </div>
</template>
<script>
import MenuSlider from './MenuSlider';

export default {
  components: {
    MenuSlider,
  },
  methods: {
    goHome() {
      if (this.$router.history.current.path === '/') return;
      this.$router.push('/');
    },
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },
    routeTo(path) {
      if (this.$router.history.current.path === path) return;

      this.$router.push(path);
    },
  },
  computed: {
    user() {
      return this.$store.getters['auth/getAppUser'];
    },
    isMobile() {
      return this.$vuetify.breakpoint.width < 768;
    },
    wrapper() {
      return `margin-left: auto; margin-right: auto; ${this.isMobile ? '' : 'max-width: 70rem;'}`;
    },
  },
};
</script>

<style lang="scss">
.no-padding {
  .v-toolbar__extension {
    padding: 0;
  }
}
.m-pointer {
  cursor:pointer;
}
</style>
