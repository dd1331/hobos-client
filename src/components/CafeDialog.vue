<template>
    <v-dialog
      :value="isActive" @input="onInput"
      width="1120px"
    >
      <v-card class="rounded-xl" style="height:895px">
        <v-img
          class="white--text align-center"
          height="200px"
          :src="cafeDetail.files[0].url"
        >
          <div style="display:flex; justify-content:center; align-items: center;">
            <h1>{{cafeDetail.title}}</h1>
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
            <DialogList :list="prosAndConsList"/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <Image-List :images="images"/>
          </v-tab-item>
          <v-tab-item style="padding:20px;" :transition="false">
            <DialogReview v-if="cafeDetail" :reviews="reviews" @onCreateReview="createReview"/>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
</template>

<script>
import Scores from '@/components/Scores';
import DialogList from '@/components/DialogList';
import ImageList from '@/components/ImageList';
import DialogReview from '@/components/DialogReview';

export default {
  props: ['isActive', 'cafeCode'],
  components: {
    Scores,
    DialogList,
    ImageList,
    DialogReview,
  },
  methods: {
    onInput() {
      this.tab = 0;
      this.$emit('deactivate');
    },
    createReview(content) {
      this.$store.dispatch('cafe/createReview', { content, code: this.cafeDetail.id, type: 'cafe' });
    },
  },
  watch: {
    async cafeCode(cafeCode) {
      this.$store.dispatch('cafe/fetchCafeDetail', { cafeCode });
      this.$store.dispatch('cafe/fetchCafeReviews', { cafeCode });
    },
  },
  computed: {
    cafeDetail() {
      return this.$store.getters['cafe/getCafeDetail'];
    },
    images() {
      return this.cafeDetail.files;
    },
    reviews() {
      return this.$store.getters['cafe/getCafeReviews'];
    },
  },
  // mounted() {
  //   if (this.cafeCode === -1) return;

  //   this.$store.dispatch('cafe/fetchCafeReviews', { cafeCode: this.cafeCode });
  // },
  created() {
    this.$store.dispatch('cafe/fetchCafeDetail', { cafeCode: this.cafeCode });
  },
  data() {
    return {
      dialog: false,
      tab: null,
      items: [
        // { tab: '점수' },
        // { tab: '장단' },
        { tab: '사진' },
        { tab: '리뷰' },
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
