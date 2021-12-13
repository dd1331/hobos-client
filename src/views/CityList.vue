<template>
  <div>
    <Image-Grid :items="items" cols="4"/>
  </div>

</template>

<script>
import ImageGrid from '@/components/ImageGrid';
import cityMixins from '@/mixins/cityMixins';

export default {
  mixins: [cityMixins],

  components: {
    ImageGrid,
  },
  computed: {
    items() {
      const cities = this.$store.getters['local/getCityRanking'];

      return cities.map((city) => this.format4imageGrid(city));
    },
  },
  async created() {
    await this.$store.dispatch('local/fetchCityRanking', { take: 30 });
  },
};
</script>
