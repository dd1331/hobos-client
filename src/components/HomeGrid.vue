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
          thumbnail: 'https://www.kari.re.kr/narospacecenter/0303/file_down/id/74',
          title: '고흥읍',
          subtitle: '전라남도',
        },
        {
          thumbnail: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/cape-town-south-africa.jpg?1636675411',
          title: '양양군',
          subtitle: '강원도',
        },
        {
          thumbnail: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1636675408',
          title: '고흥읍',
          subtitle: '전라남도',
        },
        {
          thumbnail: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/cape-town-south-africa.jpg?1636675411',
          title: '양양군',
          subtitle: '강원도',
        },
        {
          thumbnail: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1636675408',
          title: '고흥읍',
          subtitle: '전라남도',
        },
        {
          thumbnail: 'https://www.kari.re.kr/narospacecenter/0303/file_down/id/74',
          title: '양양군',
          subtitle: '강원도',
        },
        {
          thumbnail: 'https://www.kari.re.kr/narospacecenter/0303/file_down/id/74',
          title: '고흥읍',
          subtitle: '전라남도',
        },
        {
          thumbnail: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/cape-town-south-africa.jpg?1636675411',
          title: '양양군',
          subtitle: '강원도',
        }, {
          thumbnail: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1636675408',
          title: '고흥읍',
          subtitle: '전라남도',
        },

      ],
    };
  },
  components: {
    ImageGrid,
  },
};
</script>
