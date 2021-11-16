<template>
  <div>
    <v-row>
      <v-col
        v-for="(score, index) in scores"
        :key="index"
        cols="12"
        sm="6"
      >
        <div style="display:flex; font-weight: bold;">
          <p style="width:20%;">
            {{score.icon}}
            {{score.title}}
          </p>
          <v-progress-linear
            :value="score.percentage"
            height="20"
            rounded
            :color="getProgressBarColor(score.percentage)"
          />
        </div>
      </v-col>
    </v-row>

  </div>
</template>
<script>
import themeMixins from '@/mixins/themeMixins';

export default {
  mixins: [themeMixins],
  data() {
    return {
      scores: [
        { icon: '⭐️', title: '총점', percentage: 55 },
        { icon: '💰', title: '비용', percentage: 30 },
        { icon: '🖥', title: '인터넷', percentage: 10 },
        { icon: '☀️', title: '날씨', percentage: 90 },
        { icon: '⏱', title: '시간', percentage: 5 },
      ],
    };
  },
};
</script>
