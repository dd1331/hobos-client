<template>
  <div>
    <v-row class="mt-3" justify="space-around">
      <v-col
        v-for="(item, index) in items"
        :key="index"
        class="px-0"
        :cols="cols"
      >
        <div @click="click(item)" class="py-0 mx-1" style="cursor:pointer;">
          <v-card
            @mouseenter="overlayIndex = index"
            @mouseleave="overlayIndex = -1"
          >
            <v-img
              class="m-pointer"
               height="200"
              :style="`background-image:url(${item.thumbnail? item.thumbnail : '/Hobo.png'});
                background-size:cover; background-repeat:no-repeat;
                background-position: center;;
                `
              "
            >
              <div style="height:100%">
                <div style="display:flex; align-items: center; height:20%">
                  <div style="margin-left:12px;">
                    <h4 style="text-align:center; color:white; ">
                      {{index + 1}}
                    </h4>
                  </div>
                  <div style="margin:auto; margin-right:12px;">
                    <h4 style="text-align:center; color:white; ">
                      {{item.topRight}}
                    </h4>
                  </div>
                </div>
                <div style="display:flex; justify-content: center; align-items: center; height:60%">
                  <div>
                    <h2 style="text-align:center; color: white;">
                      {{item.title}}
                    </h2>
                    <h4 style="text-align:center; color: white;">
                      {{item.subtitle}}
                    </h4>
                  </div>
                </div>
                <div style="display:flex; height:20%; justify-content: center;
                  align-items: center;">
                  <div style="margin-left:12px;">
                    <h4 style="text-align:center; color:white; ">
                      {{item.bottomLeft}}
                    </h4>
                  </div>
                  <div style="margin:auto; margin-right:12px;">
                    <h4 style="text-align:center; color:white; ">
                      {{item.bottomRight}}
                    </h4>
                    </div>
                </div>
              </div>
            </v-img>
            <v-fade-transition>
              <v-overlay
                v-if="overlayIndex ===index"
                absolute
                color="#036358"
                style="display:block; padding-top:1rem;"
              >
                <div style="width:87%; margin:auto">
                  <div v-for="(score, index) in item.scores" :key="index"
                    style="display:flex; align-items: center; margin-top:3px;">
                    <div style="width:50%">
                      {{score.icon}} {{score.title}}
                    </div>
                    <div style="width:50%">
                      <v-progress-linear
                        :value="score.percentage"
                        height="15"
                        :color="getColor(score.percentage)"
                      />
                    </div>
                  </div>
                </div>
              </v-overlay>
          </v-fade-transition>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default {
  props: ['items', 'cols'],
  data() {
    return {
      overlay: false,
      overlayIndex: -1,
    };
  },
  methods: {
    onDeactivate() {
      this.$emit('deactivate');
    },
    click(item) {
      this.$emit('onClick', item.id);
    },
    openUrl(url) {
      window.open(url);
    },
    getColor(percentage) {
      if (percentage > 80) return '#43A047';
      if (percentage > 50) return '#FBC02D';
      return '#F44336';
    },
  },
  computed: {
  },
};
</script>
<style lang="scss" scoped>
.m-pointer {
  cursor:pointer;
}
</style>
