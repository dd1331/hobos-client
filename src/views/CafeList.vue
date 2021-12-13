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
      return this.format4cafeGrid();
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    cols() {
      return this.isMobile ? 6 : 4;
    },
  },
};
</script>
