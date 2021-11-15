<template>
  <div>
    <v-row>
      <v-col style="border-bottom: solid 1px #C0C0C0"
        :style="style(index)"
        v-for="(item, index) in list"
        :key="index"
        cols="12"
        sm="6"
      >
        <div style="display:flex; align-items: center; font-weight: bold;">
          <div style="width:50%;">
            {{item.icon}}
            {{item.title}}
          </div>
          <div style="margin:auto; margin-right:0">
            {{item.content}}
          </div>
        </div>
      </v-col>
    </v-row>

  </div>
</template>
<script>
import themeMixins from '@/mixins/themeMixins';

export default {
  mixins: [themeMixins],
  props: ['list'],
  data() {
    return {

    };
  },
  methods: {
    style(index) {
      return `${index % 2 === 0 ? 'border-right:solid 1px #C0C0C0;' : ''}${index === this.list.length - 1 ? 'border-bottom:0' : ''}`;
    },
  },
};
</script>
