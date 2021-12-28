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
    <Image-Grid @onClick="onClick" :items="items" :cols="cols"/>
    <Home-Dialog v-if="cityCode !== -1"
    :cityCode="cityCode" :isActive="isActive" @deactivate="onDeactivate" />
  </div>
</template>
<script>
import ImageGrid from '@/components/ImageGrid';
import HomeDialog from '@/components/home/HomeDialog';

export default {
  props: ['items'],
  data() {
    return {
      isActive: false,
      cityCode: -1,
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
  methods: {
    onDeactivate() {
      this.isActive = false;
    },
    onClick(cityCode) {
      this.cityCode = cityCode;
      this.isActive = true;
    },
  },
  components: {
    ImageGrid,
    HomeDialog,
  },
};
</script>
