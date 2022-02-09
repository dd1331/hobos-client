const thumbnails = ['https://www.kari.re.kr/narospacecenter/0303/file_down/id/74',
  'https://i2.wp.com/thesurfer.co.kr/wp-content/uploads/2020/05/%EC%A4%91%EA%B4%91%EC%A0%95%ED%95%B4%EB%B3%80.jpg?resize=698%2C331&ssl=1',
  'https://previews.123rf.com/images/bpuhanic/bpuhanic1703/bpuhanic170300003/75022216-%EC%A0%84%ED%98%95%EC%A0%81%EC%9D%B8-%ED%95%9C%EA%B5%AD-%EA%B5%90%EC%99%B8-%EB%A7%88%EC%9D%84-%EC%A7%80%EC%97%AD%EC%9D%98-%ED%99%94%EB%A0%A4%ED%95%9C-%EB%B3%BC.jpg',
  'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/cape-town-south-africa.jpg?1636675411',
  'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1636675408'];
const gridMixins = {
  methods: {
    format4cityGrid(city) {
      const random5 = Math.floor(Math.random() * (5 - 0) + 0);
      const result = {
        id: city.cityCode,
        thumbnail: city.files[random5]?.url || thumbnails[random5],
        title: city.cityName,
        subtitle: city.provinceName,
        topRight: `미세먼지: ${city.pm10Value ? `${city.pm10Value}pm` : '-'}`,
        bottomLeft: `온도: ${this.getTemperatureEmoji(city.temp || '-')}`,
        bottomRight: `${this.getWeatherEmoji(city.description) || '-'}`,
        scores: [
          { icon: '⭐️', title: '평점', percentage: 55 },
          { icon: '💰', title: '비용', percentage: 30 },
          { icon: '🖥', title: '인터넷', percentage: 10 },
          { icon: '☀️', title: '날씨', percentage: 90 },
          { icon: '⏱', title: '시간', percentage: 5 },
        ],
      };
      return result;
    },
    format4cafeGrid(cafe) {
      const [provinceName, cityName] = cafe.address.split(' ');

      return {
        id: cafe.id,
        thumbnail: cafe.files[0]?.url || 'https://blog.kakaocdn.net/dn/bTJwwu/btqDLDTY0aW/rG0BsutgO75L18SJ9KWoI0/img.jpg',
        title: cafe.title.replace('<b>', '').replace('</b>', '').replace('&amp;', ''),
        subtitle: cityName,
        topRight: this.formatProvinceName(provinceName),
        scores: [
          { icon: '⭐️', title: '총점', percentage: 55 },
          { icon: '💰', title: '비용', percentage: 30 },
          { icon: '🖥', title: '인터넷', percentage: 10 },
          { icon: '☀️', title: '소음', percentage: 90 },
          { icon: '⏱', title: '코피스', percentage: 5 },
        ],
      };
    },
    formatProvinceName(provinceName) {
      if (provinceName === '부산광역시') return '부산';
      if (provinceName === '인천광역시') return '인천';
      if (provinceName === '경상북도') return '경북';
      if (provinceName === '경상남도') return '경남';
      if (provinceName === '전라북도') return '전북';
      if (provinceName === '전라남도') return '전남';
      if (provinceName === '대구광역시') return '대구';
      if (provinceName === '광주광역시') return '광주';
      if (provinceName === '대전광역시') return '대전';
      if (provinceName === '울산광역시') return '울산';
      if (provinceName === '충청북도') return '충북';
      if (provinceName === '충청남도') return '충남';
      if (provinceName === '경기도') return '경기';
      if (provinceName === '강원도') return '강원';
      if (provinceName === '제주특별자치도') return '제주';
      if (provinceName === '세종특별자치시') return '세종';
      return '서울';
    },
    getWeatherEmoji(description) {
      switch (description) {
        case '맑음':
          return '☀️';
        case '튼구름':
          return '☁️';
        case '온흐림':
          return '⛅️';
        case '구름조금':
          return '🌥';
        case '약간의 구름이 낀 하늘':
          return '🌤';
        default:
          return description;
      }
    },
    getTemperatureEmoji(temp) {
      if (temp < 0) return `${temp}℃  🥶`;
      if (temp < 10) return `${temp}℃  😖`;
      if (temp < 15) return `${temp}℃  😎`;
      if (temp < 25) return `${temp}℃  😄`;
      if (temp < 25) return `${temp}℃  🥵`;
      return temp;
    },
  },
};

export default gridMixins;
