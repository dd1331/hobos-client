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
      const cafes = this.$store.getters['cafe/getCafeRanking'];
      return cafes.map((cafe) => this.format4cafeGrid(cafe));
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    cols() {
      return this.isMobile ? 6 : 4;
    },
  },
  async created() {
    await this.$store.dispatch('cafe/fetchCafeRanking', { take: 21 });
  },
};
</script>
