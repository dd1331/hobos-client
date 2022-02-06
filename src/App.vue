<template>
  <v-app>
    <Header style="border-bottom:solid 1px #ff7f32"></Header>
    <Home-Carousel v-if="isHome" :posts="posts"></Home-Carousel>
    <div :style="wrapper" style="padding: 0 5px 0 5px; width:100%">
      <v-container style="display: flex">
        <v-main :style="innerWrapper">
          <div>
            <router-view/>
          </div>
        </v-main>
        <!-- <Banner v-if="!isMobile"/> -->
      </v-container>
    </div>
    <Footer></Footer>
    <v-snackbar v-model="snackbar">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeCarousel from '@/components/HomeCarousel.vue';
// import Banner from '@/components/Banner';

export default {
  name: 'App',

  components: {
    HomeCarousel,
    Header,
    Footer,
    // Banner,
  },
  data() {
    return {
      snackbar: false,
      message: '',
      posts: [
        { emoji: '👩‍💻', title: 'Go hobo to local', subtitle: 'get some relax' },
        { emoji: '👩‍🌾', title: '고흥에 가볼까', subtitle: '산으로 바다로' },
        { emoji: '🧐', title: 'meet people to get inspired', subtitle: 'they\'re wating for you' },
        { emoji: '🏬', title: '부여로 가자', subtitle: '백마강이 있는 곳' },
      ],

    };
  },
  async created() {
    await this.$store.dispatch('common/fetchCategories');
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    wrapper() {
      return `margin-left: auto; margin-right: auto; ${this.isMobile ? '' : 'max-width: 70rem;'}`;
    },
    innerWrapper() {
      return `margin-right: auto; ${this.isMobile ? '' : 'width:10%;'}`;
    },
    isHome() {
      return this.$route.name === 'Home';
    },
  },
  errorCaptured(err) {
    const { message } = err.response.data;
    this.message = message;
    if (message === 'jwt expired') {
      this.message = '자동 로그인 기간이 만료되었습니다';
      this.logout();
    }
    this.snackbar = true;
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
  },
};
</script>
