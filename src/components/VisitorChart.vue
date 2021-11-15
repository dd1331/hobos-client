<template>
  <div>
    <G-Chart
      type="AreaChart"
      :data="chartData"
      :options="chartOptions"/>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
  components: { GChart },
  data() {
    return {
      chartData: [
        ['Month', '방문자'],
        [new Date('2008/1/1'), 313],
        [new Date('2008/2/1'), 113],
        [new Date('2008/3/1'), 811],
        [new Date('2008/4/1'), 867],
        [new Date('2008/5/1'), 453],
        [new Date('2008/6/1'), 153],
        [new Date('2008/7/1'), 613],
        [new Date('2008/8/1'), 13],
        [new Date('2008/9/1'), 863],
        [new Date('2008/10/1'), 173],
        [new Date('2009/1/1'), 313],
        [new Date('2009/2/1'), 113],
        [new Date('2009/3/1'), 811],
        [new Date('2009/4/1'), 867],
        [new Date('2009/5/1'), 173],
        [new Date('2009/6/1'), 453],
        [new Date('2009/7/1'), 153],
        [new Date('2009/8/1'), 613],
        [new Date('2009/9/1'), 13],
        [new Date('2009/10/1'), 863],
        [new Date('2010/1/1'), 313],
        [new Date('2010/2/1'), 867],
        [new Date('2010/3/1'), 113],
        [new Date('2010/4/1'), 811],
        [new Date('2010/5/1'), 8636],
        [new Date('2010/6/1'), 4536],
        [new Date('2010/7/1'), 1536],
        [new Date('2010/8/1'), 6136],
        [new Date('2010/9/1'), 136],
        [new Date('2010/10/1'), 1736],
        [new Date('2011/1/1'), 3136],
        [new Date('2011/2/1'), 1136],
        [new Date('2011/3/1'), 8676],
        [new Date('2011/4/1'), 8116],
        [new Date('2011/5/1'), 1536],
        [new Date('2011/6/1'), 4536],
        [new Date('2011/7/1'), 6136],
        [new Date('2011/8/1'), 8636],
        [new Date('2011/9/1'), 136],
        [new Date('2011/10/1'), 1736],
        [new Date('2012/1/1'), 3136],
        [new Date('2012/2/1'), 1136],
        [new Date('2012/3/1'), 8676],
        [new Date('2012/4/1'), 4536],
        [new Date('2012/5/1'), 1536],
        [new Date('2012/6/1'), 8636],
        [new Date('2012/7/1'), 6136],
        [new Date('2012/8/1'), 8116],
        [new Date('2012/9/1'), 136],
        [new Date('2012/10/1'), 1736],
      ],
      chartOptions: {
        title: '방문자 추이',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        colors: ['pink'],
        trendlines: {
          0: {
            type: 'polynomial',
            degree: 3,
            color: 'tomato',
          },
        },
        // width: 600,
        height: 600,
      },
    };
  },
};
</script>
