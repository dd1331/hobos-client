<template>
  <div>
    <v-carousel
      hide-delimiters
      hide-delimiters-background
      cycle
      height="300"
      show-arrows-on-hover
      interval="8000"
      style="background-color: #ff7f32;"
    >
      <v-carousel-item
      transition="fade-transition"
      reverse-transition="fade-transition"
        v-for="(post, i) in posts"
        :key="i"
      >
        <div style="height:100%;
          display: flex;
          justify-content: center;
          align-items: center;
        ">
          <div style="display:block">
            <h1 style="text-align:center; font-size: 50px;">
              {{post.emoji}}
            </h1 >
            <h1 style="text-align:center; color: white">
              {{post.title}}
            </h1>
            <h4 style="text-align:center; color: white">
              {{post.subtitle}}
            </h4>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>

export default {
  props: ['posts'],
  data() {
    return {
    };
  },
  components: {
  },
  computed: {
    pages() {
      const half = Math.ceil(this.posts.length / 2);

      return [this.posts.slice(0, half), this.posts.slice(-half)];
    },
  },
};
</script>
