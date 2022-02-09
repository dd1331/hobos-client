<template>
    <v-dialog
      :value="isActive" @input="onInput"
      width="1120px"
    >
      <v-card class="rounded-xl" style="height:895px">
        <v-img
          class="white--text align-center"
          height="200px"
          :src="cityImage"
        >
          <div style="display:flex; justify-content:center; align-items: center;">
            <h1>{{localDetail.cityName}}</h1>
          </div>
        </v-img>
        <v-tabs
          v-model="tab"
          background-color="#ff7f32"
          dark
          :center-active="true"
        >
          <v-tab
            active-class="font-weight-bold"
            v-for="item in items"
            :key="item.tab"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-if="false" style="padding:20px;" :transition="false">
            <Scores/>
          </v-tab-item>
          <v-tab-item v-if="false" style="padding:20px;" :transition="false">
            <DialogList :list="guideList"/>
          </v-tab-item>
          <v-tab-item v-if="false" style="padding:20px;" :transition="false">
            <DialogList :list="costOrLivingList"/>
          </v-tab-item>
          <v-tab-item v-if="false" style="padding:20px;" :transition="false">
            <DialogList :list="prosAndConsList"/>
          </v-tab-item>
          <v-tab-item v-if="false" style="padding:20px;" :transition="false">
            <Visitor-Chart/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <Image-List :images="localDetail.files"/>
          </v-tab-item>
          <v-tab-item v-if="false" style="padding:20px;" :transition="false">
            <Weather-Table/>
          </v-tab-item>
          <v-tab-item v-if="false" style="padding:20px;" :transition="false">
            <Characteristics/>
          </v-tab-item>
          <v-tab-item :transition="false">
            <Naver-Map style="height:600px;" :cityCode="cityCode"/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <DialogReview v-if="localDetail" :reviews="reviews" @onCreateReview="createReview"/>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
</template>

<script>
import Scores from '@/components/Scores';
import DialogList from '@/components/DialogList';
import VisitorChart from '@/components/VisitorChart';
import ImageList from '@/components/ImageList';
import WeatherTable from '@/components/WeatherTable';
import Characteristics from '@/components/Characteristics';
import NaverMap from '@/components/NaverMap';
import DialogReview from '@/components/DialogReview';

export default {
  props: ['isActive', 'cityCode'],
  components: {
    Scores,
    DialogList,
    VisitorChart,
    ImageList,
    WeatherTable,
    Characteristics,
    NaverMap,
    DialogReview,
  },
  methods: {
    onInput() {
      this.tab = 0;
      this.$emit('deactivate');
    },
    createReview(content) {
      this.$store.dispatch('local/createReview', { content, code: this.localDetail.cityCode, type: 'local' });
    },
  },
  watch: {
    cityCode(cityCode) {
      this.$store.dispatch('local/fetchLocalDetail', { cityCode });
      this.$store.dispatch('local/fetchLocalReview', { cityCode });
    },
  },
  computed: {
    cityImage() {
      if (!this.localDetail.files) return '';

      const random5 = Math.floor(Math.random() * (5 - 0) + 0);

      return this.localDetail.files[random5].url || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg';
    },
    localDetail() {
      return this.$store.getters['local/getLocalDetail'];
    },
    reviews() {
      return this.$store.getters['local/getLocalReview'];
    },
  },
  created() {
    this.$store.dispatch('local/fetchLocalDetail', { cityCode: this.cityCode });
  },
  mounted() {
    if (this.cityCode !== -1) { this.$store.dispatch('local/fetchLocalReview', { cityCode: this.cityCode }); }
  },
  data() {
    return {
      tab: null,
      items: [
        // { tab: '점수' },
        // { tab: '가이드' },
        // { tab: '비용' },
        // { tab: '장단' },
        // { tab: '트렌드' },
        { tab: '사진' },
        // { tab: '날씨' },
        // { tab: '특징' },
        { tab: '주변' },
        { tab: '리뷰' },
        // { tab: '사람' },
        // { tab: '채팅' },
        // { tab: '코워킹' },
        // { tab: '비디오' },
        // { tab: '원격근무' },
      ],
      guideList: [
        { icon: '⭐️', title: '총점', content: 55 },
        { icon: '💰', title: '비용', content: 30 },
        { icon: '🖥', title: '인터넷', content: 10 },
        { icon: '☀️', title: '날씨', content: 90 },
        { icon: '⏱', title: '시간', content: 5 },
      ],
      costOrLivingList: [
        { icon: '💰', title: '노마드비용', content: '월 34만' },
        { icon: '💰', title: '가족비용', content: '월 134만' },
        { icon: '💰', title: '원룸 월세', content: '월 534만' },
        { icon: '💰', title: '에어비앤비', content: '월 1만' },
        { icon: '💰', title: '노마드비용2', content: '월 55만' },
        { icon: '💰', title: '노마드비용3', content: '월 4만' },
      ],
      prosAndConsList: [
        { icon: '👍', title: '추움' },
        { icon: '👎', title: '더움' }, { icon: '👍', title: '추움' },
        { icon: '👎', title: '더움' }, { icon: '👍', title: '추움' },
        { icon: '👎', title: '더움' }, { icon: '👍', title: '추움' },
        { icon: '👎', title: '더움' }, { icon: '👍', title: '추움' },
        { icon: '👎', title: '더움' }, { icon: '👍', title: '추움' },
        { icon: '👎', title: '더움' },

      ],
    };
  },
};
</script>
