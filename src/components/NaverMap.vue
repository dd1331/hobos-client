<template>
  <div>
    <div id="map" style="width:100%;height:100%;"></div>
  </div>

</template>

<script>
/* eslint-disable no-undef */
export default {
  props: ['cityCode'],
  data() {
    return {
      map: null,
    };
  },
  computed: {
    localDetail() {
      return this.$store.getters['local/getLocalDetail'];
    },
  },
  methods: {
    createMarker(response, place) {
      const result = response.v2;
      const [item] = result.addresses;
      const { x, y } = item;
      const contentString = `<div class="iw_inner">
        <h3>${place.title}</h3>
        <p>${item.jibunAddress} | ${item.roadAddress}<br>
          <img src="${place.url || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'}" width="100%" height="100%" alt="${place.title}" class="thumb" /><br>
          02-120 | 공공,사회기관 > 특별,광역시청<br>
          <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>
        </p>
      </div>`;
        // eslint-disable-next-line no-new
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(y, x),
        map: this.map,
      });
      const infowindow = new naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
        borderColor: 'tomato',
        borderWidth: 1,

      });
      naver.maps.Event.addListener(marker, 'click', () => {
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(this.map, marker);
        }
      });
    },
    setMarker(place) {
      naver.maps.Service.geocode({
        query: `${place.address}`,
      }, (status, response) => {
        this.createMarker(response, place);
      });
    },
    initiateMap() {
      return new Promise((resolve, reject) => {
        naver.maps.Service.geocode({
          query: `${this.localDetail.provinceName} ${this.localDetail.cityName}`,
        }, (status, response) => {
          if (status !== naver.maps.Service.Status.OK) {
            reject();
          }

          const result = response.v2; // 검색 결과의 컨테이너
          const [item] = result.addresses; // 검색 결과의 배열
          const { x, y } = item;
          const option = {
            center: new naver.maps.LatLng(y, x),
            zoom: 13,
          };
          this.map = new naver.maps.Map('map', option);
          const title = this.localDetail.cityName;
          const url = this.localDetail.files[0]
              || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg';
          const place = { title, url };
          this.createMarker(response, place);
          resolve();
        });
      });
    },
  },
  async created() {
    try {
      await this.$store.dispatch('local/fetchLocalDetail', { cityCode: this.cityCode });
      await this.initiateMap();
      const { places } = this.localDetail;
      places.map((place) => this.setMarker(place));
    } catch (error) {
      console.log('created -> error', error);
    }
  },
};
</script>

<style>
.iw_inner {
  /* border:solid red */
  padding: 15px;

}

</style>
