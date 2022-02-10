<template>
  <div class="home">
    <Home-Grid :items="cityRanking"></Home-Grid>
    <Home-Cafe-Grid style="padding-top:12px;"></Home-Cafe-Grid>
    <v-row class="mt-4">
      <v-col
        v-for="(post, index) in homePosts"
        :key="index"
        justify="space-between"
        sm="6"
      >
        <div>
          <h2 class="grey--text text--darken-3 d-inline">
            {{post.title}}
          </h2>
          <Post-List :posts="post.post" :category="post.category"></Post-List>
      </div>
      </v-col>
    </v-row>
    <div class="mt-4">
      <h2 class="grey--text text--darken-3 d-inline">
        📈 트렌드
      </h2>
    </div>
    <v-container class="d-flex mb-3 pt-0 mt-2">
      <div>
        <v-chip
          v-for="(hashtag,index) in popularHashtags"
          v-bind:key="index"
          class="mx-1 my-1"
          color="red"
          outlined
          @click="search(hashtag)"
        >
          {{hashtag.title}}
        </v-chip>
      </div>
    </v-container>
    <Accomodation-Review/>
  </div>
</template>

<script>
import AccomodationReview from '@/components/AccomodationReview.vue';
import HomeGrid from '@/components/HomeGrid.vue';
import HomeCafeGrid from '@/components/home/HomeCafeGrid.vue';
import PostList from '@/components/PostList3.vue';
import gridMixins from '@/mixins/gridMixins';

export default {
  mixins: [gridMixins],
  methods: {
    search(hashtag) {
      this.$router.push({ path: 'posts/list/all', query: { hashtagId: hashtag.id, hashtagTitle: hashtag.title } });
    },
  },
  name: 'Home',
  components: {
    AccomodationReview,
    HomeGrid,
    HomeCafeGrid,
    PostList,
  },
  data() {
    return {
    };
  },
  computed: {
    recommendedPosts() {
      return this.$store.getters['post/getRecommendedPost'];
    },
    popularPosts() {
      return this.$store.getters['post/getPopularPosts'];
    },
    recentPosts() {
      return this.$store.getters['post/getRecentPosts'];
    },
    homePosts() {
      const temp = this.$store.getters['post/getHomePosts'];
      const popular = { post: this.popularPosts, title: '🤩 인기', category: true };
      const recent = { post: this.recentPosts, title: '⚡️ 최신', category: true };
      const free = { post: temp.free, title: '🌝 자유' };
      const fire = { post: temp.fire, title: '💰 파이어' };
      const investment = { post: temp.investment, title: '🏦 투자' };
      const meetup = { post: temp.meetup, title: '☕️ 모임' };
      return [popular, recent, free, meetup, investment, fire];
    },
    popularHashtags() {
      return this.$store.getters['hashtag/getPopularHashtags'];
    },
    cityRanking() {
      const cities = this.$store.getters['local/getCityRanking'].map((city) => this.format4cityGrid(city));

      if (this.isMobile) return cities.slice(0, 4);
      return cities;
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },

  },
  async created() {
    await this.$store.dispatch('post/fetchHomePosts');
    await this.$store.dispatch('post/fetchRecommendedPost');
    await this.$store.dispatch('post/fetchPopularPosts');
    await this.$store.dispatch('post/fetchRecentPosts');
    await this.$store.dispatch('hashtag/fetchPopularHashtags');
    await this.$store.dispatch('local/fetchCityRanking');
  },
};
</script>
