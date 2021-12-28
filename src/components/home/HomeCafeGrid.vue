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
    <Image-Grid @onClick="onClick" :items="cafes" :cols="cols"></Image-Grid>
    <Cafe-Dialog v-if="cafeCode !== -1"
    :cafeCode="cafeCode" :isActive="isActive" @deactivate="onDeactivate" />
  </div>
</template>
<script>
import CafeDialog from '@/components/CafeDialog';

import ImageGrid from '@/components/ImageGrid';
import gridMixins from '@/mixins/gridMixins';

export default {
  mixins: [gridMixins],
  data() {
    return {
      isActive: false,
      cafeCode: -1,
    };
  },
  methods: {
    onDeactivate() {
      this.isActive = false;
    },
    onClick(cafeCode) {
      this.cafeCode = cafeCode;
      this.isActive = true;
    },
  },
  components: {
    ImageGrid,
    CafeDialog,

  },
  computed: {
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
