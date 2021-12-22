<template>
  <div>
    <div style="display:flex; margin-top: 1rem;">
      <h2 >☕️ Popular Cafes</h2>
      <div style="margin-left:auto;
        margin-right:0; display: flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;"
        @click="$router.push('/cafe')"
      >
        전체보기
      </div>
    </div>
    <Image-Grid :items="cafes" :cols="cols"></Image-Grid>
  </div>
</template>
<script>
import ImageGrid from '@/components/ImageGrid';
import gridMixins from '@/mixins/gridMixins';

export default {
  mixins: [gridMixins],
  data() {
    return {
      cafeInfo: this.format4cafeGrid(),
    };
  },
  components: {
    ImageGrid,
  },
  computed: {
    items() {
      if (this.isMobile) return this.cafeInfo.slice(0, 6);
      return this.cafeInfo;
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    cols() {
      return this.isMobile ? 4 : 3;
    },
    cafes() {
      return this.$store.getters['cafe/getCafeRanking'].map((cafe) => this.format4cafeGrid(cafe));
    },
  },
  async created() {
    await this.$store.dispatch('cafe/fetchCafeRanking');
  },
};
</script>
