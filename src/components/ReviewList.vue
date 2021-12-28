<template>
  <div class="">
    <v-row>
      <v-col
        v-for="review in reviews" :key="review.id"
        cols="6"
      >
        <v-card
          style="display:flex; justify-content:space-between; align-items: center;"
          class="pa-2"
          outlined
        >
          <div style="overflow: auto; width:95%">
            {{review.content}}
          </div>
          <div style="margin:0.4rem; width:15%; text-align:right">
            {{formatDate(review.createdAt)}}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import dateMixins from '@/mixins/dateMixins';

export default {
  props: ['reviews'],
  mixins: [dateMixins],
};
</script>
