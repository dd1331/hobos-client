<template>
  <div>
    <v-textarea
      name="input-7-1"
      outlined
      label="리뷰 작성"
      color="#ff7f32"
      auto-grow
      v-model="content"
    ></v-textarea>
    <div style="display: flex;
        align-items: center;
        justify-content: right;
        padding-bottom:2rem"
    >
      <v-btn
        depressed
        color="#ff7f32"
        style="color:white; text-align: right;"
        @click="createReview"
        :disabled="!!!content"
      >
        작성
      </v-btn>
    </div>
    <ReviewList/>
  </div>

</template>

<script>
import ReviewList from '@/components/ReviewList';

export default {
  mounted() {
    this.$store.dispatch('local/fetchLocalReview', this.localDetail.cityCode);
  },
  data() {
    return {
      content: '',
    };
  },
  components: { ReviewList },
  computed: {
    localDetail() {
      return this.$store.getters['local/getLocalDetail'];
    },
  },
  methods: {
    createReview() {
      this.$store.dispatch('local/createReview', { content: this.content, cityCode: this.localDetail.cityCode });
    },
  },

};
</script>
