<template>
  <div class="my-3">
    <h2 class="grey--text text--darken-3 d-inline">
      ⛺️ 숙소 리뷰
    </h2>
    <v-carousel
      cycle
      height="150"
      hide-delimiter-background
      show-arrows-on-hover
      interval="1000000"
      delimiter-icon="mdi-minus"
    >
    <v-carousel-item
        v-for="(slide, i) in items"
        :key="i"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-img
            style="height:150px"
            :src="`https://picsum.photos/500/300?image=${i * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <div style="display:flex; justify-content: center; align-items: center; height:100%">
                <h3 style="text-align:center; color: white;">
                  Comming soon
                </h3>
            </div>
          </v-img>
          <v-img
            style="height:150px"
            :src="`https://picsum.photos/500/300?image=${i * 5 + 9}`"
            :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 9}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <div style="display:flex; justify-content: center; align-items: center; height:100%">
                <h3 style="text-align:center; color: white;">
                  Comming soon
                </h3>
            </div>
          </v-img>
        </v-row>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>
<script>

export default {
  data() {
    return {
      items: [1, 2],
    };
  },
  methods: {
  },
  computed: {
  },
  created() {
  },
};
</script>
