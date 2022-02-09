const translateMixins = {
  created() {
  },
  methods: {
    titleToKorean(key) {
      switch (key) {
        case 'exercise':
          return '운동';
        case 'environment':
          return '환경';
        case 'news':
          return '뉴스';
        case 'meetup':
          return '모임';
        case 'fire':
          return '파이어';
        case 'investment':
          return '투자';
        default:
          return '자유';
      }
    },
    topicToKorean(key) {
      switch (key) {
        case 'running':
          return '러닝';
        case 'plogging':
          return '플로깅';
        default:
          return '자유';
      }
    },
  },
};
export default translateMixins;
