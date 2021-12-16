<template>
    <v-dialog
      :value="isActive" @input="onInput"
      width="1120px"
    >
      <v-card class="rounded-xl" style="height:895px">
        <v-img
          class="white--text align-center"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
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
          <v-tab-item style="padding:20px;" :transition="false">
            <Scores/>
            <DialogList/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <DialogList :list="guideList"/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <DialogList :list="costOrLivingList"/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <DialogList :list="prosAndConsList"/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <Visitor-Chart/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <Image-List/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <Weather-Table/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <Characteristics/>
          </v-tab-item>
          <v-tab-item :transition="false">
            <Naver-Map style="height:600px;" :cityCode="cityCode"/>
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
  },
  methods: {
    onInput() {
      this.tab = 0;
      this.$emit('deactivate');
    },
  },
  watch: {
    async cityCode(cityCode) {
      await this.$store.dispatch('local/fetchLocalDetail', { cityCode });
    },
  },
  computed: {
    localDetail() {
      return this.$store.getters['local/getLocalDetail']; // return this.$store.getters['post/getPopularPosts'];
    },
  },
  data() {
    return {
      dialog: false,
      details: [
        { id: 1, city: 'test', town: 'tese3131' },
        { id: 2, city: 'tes2', town: 'tese3132' },
        { id: 3, city: 'tes3', town: 'tese3133' },
        { id: 4, city: 'tes4', town: 'tese3134' },
      ],
      tab: null,
      items: [
        { tab: '점수', content: 'Tab 1 Content' },
        { tab: '가이드', content: 'Tab 2 Content' },
        { tab: '비용', content: 'Tab 4 Content' },
        { tab: '장단', content: 'Tab 5 Content' },
        { tab: '트렌드', content: 'Tab 9 Content' },
        { tab: '사진', content: 'Tab 6 Content' },
        { tab: '날씨', content: 'Tab 8 Content' },
        { tab: '특징', content: 'Tab 10 Content' },
        { tab: '주변', content: 'Tab 10 Content' },
        { tab: '사람', content: 'Tab 3 Content' },
        { tab: '리뷰', content: 'Tab 7 Content' },
        { tab: '채팅', content: 'Tab 10 Content' },
        { tab: '코워킹', content: 'Tab 10 Content' },
        { tab: '비디오', content: 'Tab 10 Content' },
        { tab: '원격근무', content: 'Tab 10 Content' },
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
