<template>
  <div>
    <div style="display:flex; margin-top: 1rem;">
      <h2 >🔥 Popular Cities</h2>
      <div style="margin-left:auto;
        margin-right:0; display: flex;
        justify-content: center;
        align-items: center;"
      >
        전체보기
      </div>
    </div>
    <Image-Grid :items="items" cols="4"></Image-Grid>
  </div>
</template>
<script>
import ImageGrid from '@/components/ImageGrid';

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          thumbnail: 'https://www.kari.re.kr/narospacecenter/0303/file_down/id/74',
          title: '고흥읍',
          subtitle: '전라남도',
          topRight: '미세먼지:12',
          bottomLeft: '온도:19',
          bottomRight: '40만',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '날씨', percentage: 90 },
            { icon: '⏱', title: '시간', percentage: 5 },
          ],

        },
        {
          id: 2,
          thumbnail: 'https://i2.wp.com/thesurfer.co.kr/wp-content/uploads/2020/05/%EC%A4%91%EA%B4%91%EC%A0%95%ED%95%B4%EB%B3%80.jpg?resize=698%2C331&ssl=1',
          title: '양양군',
          subtitle: '강원도',
          topRight: '미세먼지:12',
          bottomLeft: '온도:19',
          bottomRight: '40만',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '날씨', percentage: 90 },
            { icon: '⏱', title: '시간', percentage: 5 },
          ],

        },
        {
          id: 3,
          thumbnail: 'https://previews.123rf.com/images/bpuhanic/bpuhanic1703/bpuhanic170300003/75022216-%EC%A0%84%ED%98%95%EC%A0%81%EC%9D%B8-%ED%95%9C%EA%B5%AD-%EA%B5%90%EC%99%B8-%EB%A7%88%EC%9D%84-%EC%A7%80%EC%97%AD%EC%9D%98-%ED%99%94%EB%A0%A4%ED%95%9C-%EB%B3%BC.jpg',
          title: '고흥읍',
          subtitle: '전라남도',
          topRight: '미세먼지:12',
          bottomLeft: '온도:19',
          bottomRight: '40만',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '날씨', percentage: 90 },
            { icon: '⏱', title: '시간', percentage: 5 },
          ],

        },
        {
          id: 4,
          thumbnail: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/cape-town-south-africa.jpg?1636675411',
          title: '양양군',
          subtitle: '강원도',
          topRight: '미세먼지:12',
          bottomLeft: '온도:19',
          bottomRight: '40만',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '날씨', percentage: 90 },
            { icon: '⏱', title: '시간', percentage: 5 },
          ],

        },
        {
          id: 5,
          thumbnail: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1636675408',
          title: '고흥읍',
          subtitle: '전라남도',
          topRight: '미세먼지:12',
          bottomLeft: '온도:19',
          bottomRight: '40만',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '날씨', percentage: 90 },
            { icon: '⏱', title: '시간', percentage: 5 },
          ],

        },
        {
          id: 6,
          thumbnail: 'https://i2.wp.com/thesurfer.co.kr/wp-content/uploads/2020/05/%EC%A4%91%EA%B4%91%EC%A0%95%ED%95%B4%EB%B3%80.jpg?resize=698%2C331&ssl=1',
          title: '양양군',
          subtitle: '강원도',
          topRight: '미세먼지:12',
          bottomLeft: '온도:19',
          bottomRight: '40만',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '날씨', percentage: 90 },
            { icon: '⏱', title: '시간', percentage: 5 },
          ],

        },
        {
          id: 7,
          thumbnail: 'https://www.kari.re.kr/narospacecenter/0303/file_down/id/74',
          title: '고흥읍',
          subtitle: '전라남도',
          topRight: '미세먼지:12',
          bottomLeft: '온도:19',
          bottomRight: '40만',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '날씨', percentage: 90 },
            { icon: '⏱', title: '시간', percentage: 5 },
          ],

        },
        {
          id: 8,
          thumbnail: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/cape-town-south-africa.jpg?1636675411',
          title: '양양군',
          subtitle: '강원도',
          topRight: '미세먼지:12',
          bottomLeft: '온도:19',
          bottomRight: '40만',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '날씨', percentage: 90 },
            { icon: '⏱', title: '시간', percentage: 5 },
          ],

        }, {
          id: 9,
          thumbnail: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1636675408',
          title: '고흥읍',
          subtitle: '전라남도',
          topRight: '미세먼지:12',
          bottomLeft: '온도:19',
          bottomRight: '40만',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '날씨', percentage: 90 },
            { icon: '⏱', title: '시간', percentage: 5 },
          ],

        },

      ],
    };
  },
  components: {
    ImageGrid,
  },
};
</script>
