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
    <ReviewList :reviews="reviews"/>
  </div>

</template>

<script>
import ReviewList from '@/components/ReviewList';

export default {
  props: ['reviews'],
  data() {
    return {
      content: '',
    };
  },
  components: { ReviewList },
  methods: {
    createReview() {
      this.$emit('onCreateReview', this.content);
    },
  },

};
</script>
