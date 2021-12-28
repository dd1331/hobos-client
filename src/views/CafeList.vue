<template>
  <div>
    <div style="display: flex;
        align-items: center;
        justify-content: right; margin-top:1rem;
        margin-bottom:-1rem">
      <div style="width:10%;">
        <v-select
          :items="provinces"
          label="시/도"
          @change="filterProvince"
          v-model="selectedProvince"
          dense
        ></v-select>
      </div>
    </div>
    <Image-Grid @onClick="onClick" :items="items" :cols="cols"/>
    <Cafe-Dialog :cafeCode="cafeCode" :isActive="isActive" @deactivate="onDeactivate" />

    <div v-intersect.quiet="infiniteScrolling"></div>

  </div>

</template>

<script>
import ImageGrid from '@/components/ImageGrid';
import gridMixins from '@/mixins/gridMixins';
import CafeDialog from '@/components/CafeDialog';

export default {
  mixins: [gridMixins],
  methods: {
    onDeactivate() {
      this.isActive = false;
    },
    onClick(cafeCode) {
      this.cafeCode = cafeCode;
      this.isActive = true;
    },
    filterProvince() {
      this.page = 1;
      const provinceName = this.selectedProvince === '전체' ? undefined : this.selectedProvince;
      this.$store.dispatch('cafe/fetchCafeRanking', { take: 10, provinceName });
    },
    infiniteScrolling(_, __, c) {
      if (!c) return;
      const provinceName = this.selectedProvince === '전체' ? undefined : this.selectedProvince;
      setTimeout(async () => {
        this.page += 1;
        const payload = { take: 10, provinceName, page: this.page };
        await this.$store.dispatch('cafe/fetchNextCafeRanking', payload);
      }, 500);
    },
  },
  data() {
    return {
      cafeCode: -1,
      isActive: false,
      selectedProvince: '전체',
      page: 1,
      hasMore: true,
      provinces:
      [
        '전체',
        '서울',
        '부산',
        '대구',
        '인천',
        '광주',
        '대전',
        '울산',
        '경기',
        '강원',
        '충북',
        '충남',
        '전북',
        '전남',
        '경북',
        '경남',
        '제주',
        '세종',
      ],
    };
  },

  components: {
    ImageGrid,
    CafeDialog,
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
