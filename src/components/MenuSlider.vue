<template>
  <v-card flat outlined rounded="0" style="border:0">
    <v-tabs v-model="categoryId"
      class="slider-tabs"
      dark
      background-color="white"
      :optional="categoryId === -1"
      show-arrows
    >
    <!-- TODO check what v-tabs-slider is for -->
      <!-- <v-tabs-slider color="primary lighten-3"></v-tabs-slider> -->
      <v-tab
        v-for="(category, index) in categories"
        :key="category.id"
        @click="sendTo(category)"
      >
      <span class="black--text" :style="categoryId === index ? 'font-weight: bold;' : ''">
        {{ category.koTitle }}
      </span>
      </v-tab>
    </v-tabs>
  </v-card>
</template>
<script>
/* eslint-disable no-undef */
import translateMixins from '../mixins/translateMixins';

export default {
  mixins: [translateMixins],
  data() {
    return {
      categoryId: null,
    };
  },
  computed: {
    categories() {
      return this.$store.getters['common/getCategories'].map((category) => {
        // eslint-disable-next-line no-param-reassign
        category.koTitle = this.titleToKorean(category.title);
        return category;
      });
    },
    currentCategory() {
      return this.$store.getters['common/getCurrentCategory'];
    },
  },
  watch: {
    currentCategory(category) {
      if (!category.title) this.categoryId = -1;
    },
  },
  methods: {
    sendTo(category) {
      this.$store.commit('common/setCurrentCategory', category);

      if (this.$router.history.current.path === `/posts/list/${category.title}`) return;

      this.$router.push(`/posts/list/${category.title}`);
    },
  },
};
</script>
<style lang="scss">
.slider-tabs {
  .theme--dark.v-icon.v-icon {
    color:black
  }
}
</style>
