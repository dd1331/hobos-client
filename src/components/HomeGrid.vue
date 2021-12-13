<template>
  <div>
    <div style="display:flex; margin-top: 1rem;">
      <h2 >🔥 Popular Cities</h2>
      <div style="margin-left:auto;
        margin-right:0; display: flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;"
        @click="$router.push('/city')"
      >
        전체보기
      </div>
    </div>
    <Image-Grid :items="items" :cols="cols"></Image-Grid>
  </div>
</template>
<script>
import ImageGrid from '@/components/ImageGrid';

export default {
  props: ['items'],
  data() {
    return {
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    cols() {
      return this.isMobile ? 6 : 4;
    },
  },
  components: {
    ImageGrid,
  },
};
</script>
