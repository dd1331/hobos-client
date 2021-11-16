<template>
  <div>
    <div style="text-align: center;">
      <v-chip v-for="(feature, index) in features" :key="index"
        class="ma-2"
        color="success"
        outlined
      >
        💰
        {{feature.title}}
      </v-chip>
    </div>
    <div>
      <G-Chart
        type="ColumnChart"
        :data="chartData"
        :options="chartOptions"/>
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
  components: { GChart },
  data() {
    return {
      chartData: [
        ['string', 'sㅅㄷㄴㅅ'],
        ['1', 4],
        ['2', 3],
        ['3', 31],
        ['4', 10],
        ['5 ~', 10],
      ],
      chartOptions: {
        title: '경력?',
        hAxis: { title: '연' },
        vAxis: { title: '명' },
        height: 500,
        colors: ['#ff7f32'],
      },
      features: [
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'Conservative politics', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'crossfit', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'Conservative politics', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'crossfit', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'Conservative politics', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'crossfit', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'crossfit', number: 55 },
        { icon: '💰', title: 'test', number: 55 },
        { icon: '💰', title: 'Conservative politics', number: 55 },
      ],
    };
  },
};
</script>

<style>

</style>
