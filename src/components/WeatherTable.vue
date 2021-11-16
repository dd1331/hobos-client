<template>
    <v-simple-table >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left">1월</th>
            <th class="text-left">2월</th>
            <th class="text-left">3월</th>
            <th class="text-left">4월</th>
            <th class="text-left">5월</th>
            <th class="text-left">6월</th>
            <th class="text-left">7월</th>
            <th class="text-left">8월</th>
            <th class="text-left">9월</th>
            <th class="text-left">10월</th>
            <th class="text-left"
              style="border-left: solid black;
              border-right: solid black; border-top:  solid black; ">11월</th>
            <th class="text-left">12월</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in desserts"
            :key="item.name"
          >
            <td>{{ item.title }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
            <td :style="getColor(item.calories) + getBorder(index)">{{ item.calories }}</td>
            <td :style="getColor(item.calories)">{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</template>
<script>
export default {
  methods: {
    getColor(calories) {
      if (calories > 500) return 'background-color: tomato;';
      if (calories > 400) return 'background-color: orange;';
      if (calories > 300) return 'background-color: powderblue;';
      if (calories > 200) return 'background-color: yellow;';
      return 'background-color: grey;';
    },
    getBorder(index) {
      const isLast = index === this.desserts.length - 1;
      return `border-left: solid; border-right: solid; ${isLast ? 'border-bottom: solid;' : ''}`;
    },
  },
  data() {
    return {
      desserts: [
        {
          title: '체감',
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          title: '습도',
          name: 'Ice cream sandwich',
          calories: 262,
        },
        {
          title: '강수',
          name: 'Eclair',
          calories: 305,
        },
        {
          title: '대기질',
          name: 'Cupcake',
          calories: 237,
        },
        {
          title: '자외선',
          name: 'Gingerbread',
          calories: 375,
        },
        {
          title: '실제',
          name: 'Jelly bean',
          calories: 356,
        },
        {
          title: '구름',
          name: 'Lollipop',
          calories: 392,
        },
        {
          title: '호보스',
          name: 'Honeycomb',
          calories: 452,
        },
      ],
    };
  },
};
</script>
