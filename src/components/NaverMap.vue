<template>
  <div>
    <div id="map" style="width:100%;height:100%;"></div>
  </div>

</template>

<script>
/* eslint-disable no-undef */
export default {
  data() {
    return {
    };
  },
  beforeMount() {
    naver.maps.Service.geocode({
      query: '대현동90-26',
    }, (status, response) => {
      if (status !== naver.maps.Service.Status.OK) {
        return alert('Something wrong!');
      }

      const result = response.v2; // 검색 결과의 컨테이너
      const [item] = result.addresses; // 검색 결과의 배열
      const { x, y } = item;
      console.log('beforeMount -> item', item);
      // eslint-disable-next-line no-new
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(y, x),
        zoom: 16,
      });
      const contentString = `<div class="iw_inner">
        <h3>우리집</h3>
        <p>${item.jibunAddress} | ${item.roadAddress}<br>
          <img src="./img/hi-seoul.jpg" width="55" height="55" alt="서울시청" class="thumb" /><br>
          02-120 | 공공,사회기관 > 특별,광역시청<br>
          <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>
        </p>
      </div>`;

      // eslint-disable-next-line no-new
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(y, x),
        map,
      }); const infowindow = new naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
        borderColor: 'tomato',
        borderWidth: 1,

      });
      naver.maps.Event.addListener(marker, 'click', () => {
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(map, marker);
        }
      });

      return '';
    });
  },
  mounted() {
  },
};
</script>

<style>
.iw_inner {
  /* border:solid red */
  padding: 15px;

}

</style>
