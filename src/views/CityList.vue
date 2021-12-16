<template>
  <div>
    <Image-Grid :items="items" :cols="cols"/>
  </div>

</template>

<script>
import ImageGrid from '@/components/ImageGrid';
import gridMixins from '@/mixins/gridMixins';

export default {
  mixins: [gridMixins],

  components: {
    ImageGrid,
  },
  computed: {
    items() {
      const cities = this.$store.getters['local/getCityRanking'];
      return cities.map((city) => this.format4cityGrid(city));
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    cols() {
      return this.isMobile ? 6 : 4;
    },
  },
  async created() {
    await this.$store.dispatch('local/fetchCityRanking', { take: 3000 });
  },
};
</script>
