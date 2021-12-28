<template>
  <div>
    <v-row>
      <v-col
        v-for="(n, index) in items"
        :key="index"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="n.url? n.url:`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="n.url? n.url:`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="200"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['images'],
  computed: {
    items() {
      return this.images ? this.images : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    },
  },

};
</script>

<style>

</style>
