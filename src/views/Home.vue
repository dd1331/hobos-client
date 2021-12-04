<template>
  <div class="home">
    <Home-Grid :items="cityRanking"></Home-Grid>
    <Home-Cafe-Grid style="padding-top:12px;"></Home-Cafe-Grid>
    <div class="mt-4">
      <h2 class="grey--text text--darken-3 d-inline">
        🤩 인기
      </h2>
    </div>
    <Post-List :posts="popularPosts" category="true"></Post-List>
    <h2 class="grey--text text--darken-3 d-inline">
      📈 트렌드
    </h2>
    <v-container class="d-flex mb-3 pt-0">
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
    <h2 class="grey--text text--darken-3 d-inline">
      🆕 최신
    </h2>
    <Post-List :posts="recentPosts" category="true"></Post-List>
    <Home-News></Home-News>
  </div>
</template>

<script>
import HomeNews from '@/components/HomeNews.vue';
import HomeGrid from '@/components/HomeGrid.vue';
import HomeCafeGrid from '@/components/home/HomeCafeGrid.vue';
import PostList from '@/components/PostList3.vue';

export default {
  methods: {
    search(hashtag) {
      this.$router.push({ path: 'posts/list/all', query: { hashtagId: hashtag.id, hashtagTitle: hashtag.title } });
    },
  },
  name: 'Home',
  components: {
    HomeNews,
    HomeGrid,
    HomeCafeGrid,
    PostList,
  },
  data() {
    return {
      thumbnails: ['https://www.kari.re.kr/narospacecenter/0303/file_down/id/74',
        'https://i2.wp.com/thesurfer.co.kr/wp-content/uploads/2020/05/%EC%A4%91%EA%B4%91%EC%A0%95%ED%95%B4%EB%B3%80.jpg?resize=698%2C331&ssl=1',
        'https://previews.123rf.com/images/bpuhanic/bpuhanic1703/bpuhanic170300003/75022216-%EC%A0%84%ED%98%95%EC%A0%81%EC%9D%B8-%ED%95%9C%EA%B5%AD-%EA%B5%90%EC%99%B8-%EB%A7%88%EC%9D%84-%EC%A7%80%EC%97%AD%EC%9D%98-%ED%99%94%EB%A0%A4%ED%95%9C-%EB%B3%BC.jpg',
        'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/cape-town-south-africa.jpg?1636675411',
        'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1636675408'],
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
    popularHashtags() {
      return this.$store.getters['hashtag/getPopularHashtags'];
    },
    cityRanking() {
      const cities = this.$store.getters['local/getCityRanking'];
      return cities.map((city) => {
        const result = {
          id: city.cityCode,
          thumbnail: this.thumbnails[Math.floor(Math.random() * (5 - 0) + 0)],
          title: city.cityName,
          subtitle: city.provinceName,
          topRight: `미세먼지: ${city.pm10Value} pm`,
          bottomLeft: `온도: ${city.temp}`,
          bottomRight: `${city.description}`,
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '날씨', percentage: 90 },
            { icon: '⏱', title: '시간', percentage: 5 },
          ],
        };
        return result;
      });
    },
  },
  async created() {
    await this.$store.dispatch('post/fetchRecommendedPost');
    await this.$store.dispatch('post/fetchPopularPosts');
    await this.$store.dispatch('post/fetchRecentPosts');
    await this.$store.dispatch('hashtag/fetchPopularHashtags');
    await this.$store.dispatch('local/fetchCityRanking');
  },
};
</script>
