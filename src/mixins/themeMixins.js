const themeMixins = {
  methods: {
    getProgressBarColor(percentage) {
      if (percentage > 80) return '#43A047';
      if (percentage > 50) return '#FBC02D';
      return '#F44336';
    },
  },
};
export default themeMixins;
