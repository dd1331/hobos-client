const thumbnails = ['https://www.kari.re.kr/narospacecenter/0303/file_down/id/74',
  'https://i2.wp.com/thesurfer.co.kr/wp-content/uploads/2020/05/%EC%A4%91%EA%B4%91%EC%A0%95%ED%95%B4%EB%B3%80.jpg?resize=698%2C331&ssl=1',
  'https://previews.123rf.com/images/bpuhanic/bpuhanic1703/bpuhanic170300003/75022216-%EC%A0%84%ED%98%95%EC%A0%81%EC%9D%B8-%ED%95%9C%EA%B5%AD-%EA%B5%90%EC%99%B8-%EB%A7%88%EC%9D%84-%EC%A7%80%EC%97%AD%EC%9D%98-%ED%99%94%EB%A0%A4%ED%95%9C-%EB%B3%BC.jpg',
  'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/cape-town-south-africa.jpg?1636675411',
  'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=300,height=150,quality=25/https://nomadlist.com/assets/img/places/lisbon-portugal.jpg?1636675408'];
const gridMixins = {
  methods: {
    format4cityGrid(city) {
      const result = {
        id: city.cityCode,
        thumbnail: thumbnails[Math.floor(Math.random() * (5 - 0) + 0)],
        title: city.cityName,
        subtitle: city.provinceName,
        topRight: `미세먼지: ${city.pm10Value || '측정중'} pm`,
        bottomLeft: `온도: ${city.temp || '측정중'}`,
        bottomRight: `${city.description || '측정중'}`,
        scores: [
          { icon: '⭐️', title: '총점', percentage: 55 },
          { icon: '💰', title: '비용', percentage: 30 },
          { icon: '🖥', title: '인터넷', percentage: 10 },
          { icon: '☀️', title: '날씨', percentage: 90 },
          { icon: '⏱', title: '시간', percentage: 5 },
        ],
      };
      return result;
    },
    format4cafeGrid() {
      return [
        {
          thumbnail: 'https://blog.kakaocdn.net/dn/bTJwwu/btqDLDTY0aW/rG0BsutgO75L18SJ9KWoI0/img.jpg',
          title: '붕메리카노',
          subtitle: '성남시',
          topRight: '경기도',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '소음', percentage: 90 },
            { icon: '⏱', title: '코피스', percentage: 5 },
          ],

        },
        {
          thumbnail: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTRfNTkg/MDAxNTg2ODY4Mzc1NTA5.rb8iskbAfgiOU7bC8VPtqkhzfePKSg1HEJjhuIt86cwg.OhjRaCIwB1MVIUdxGEjJzAPXMymKHL5KHdNNFWpu7MYg.JPEG.nowwegom/DSC02790-2.jpg?type=w800',
          title: '카페요호',
          subtitle: '양양군',
          topRight: '강원도',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '소음', percentage: 90 },
            { icon: '⏱', title: '코피스', percentage: 5 },
          ],

        },
        {
          thumbnail: 'https://blog.kakaocdn.net/dn/bTJwwu/btqDLDTY0aW/rG0BsutgO75L18SJ9KWoI0/img.jpg',
          title: '모랩',
          subtitle: '서대문구',
          topRight: '서울특별시',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '소음', percentage: 90 },
            { icon: '⏱', title: '코피스', percentage: 5 },
          ],

        },
        {
          thumbnail: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTRfNTkg/MDAxNTg2ODY4Mzc1NTA5.rb8iskbAfgiOU7bC8VPtqkhzfePKSg1HEJjhuIt86cwg.OhjRaCIwB1MVIUdxGEjJzAPXMymKHL5KHdNNFWpu7MYg.JPEG.nowwegom/DSC02790-2.jpg?type=w800',
          title: '노마드',
          subtitle: '대현동',
          topRight: '서울특별시',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '소음', percentage: 90 },
            { icon: '⏱', title: '코피스', percentage: 5 },
          ],

        },
        {
          thumbnail: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTRfNTkg/MDAxNTg2ODY4Mzc1NTA5.rb8iskbAfgiOU7bC8VPtqkhzfePKSg1HEJjhuIt86cwg.OhjRaCIwB1MVIUdxGEjJzAPXMymKHL5KHdNNFWpu7MYg.JPEG.nowwegom/DSC02790-2.jpg?type=w800',
          title: '엔트러사이트',
          subtitle: '정선군',
          topRight: '강원도',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '소음', percentage: 90 },
            { icon: '⏱', title: '코피스', percentage: 5 },
          ],

        },
        {
          thumbnail: 'https://blog.kakaocdn.net/dn/bTJwwu/btqDLDTY0aW/rG0BsutgO75L18SJ9KWoI0/img.jpg',
          title: '모먼트',
          subtitle: '서대문구',
          topRight: '전라남도',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '소음', percentage: 90 },
            { icon: '⏱', title: '코피스', percentage: 5 },
          ],

        },
        {
          thumbnail: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTRfNTkg/MDAxNTg2ODY4Mzc1NTA5.rb8iskbAfgiOU7bC8VPtqkhzfePKSg1HEJjhuIt86cwg.OhjRaCIwB1MVIUdxGEjJzAPXMymKHL5KHdNNFWpu7MYg.JPEG.nowwegom/DSC02790-2.jpg?type=w800',
          title: '무브먼트',
          subtitle: '대현동',
          topRight: '경상남도',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '소음', percentage: 90 },
            { icon: '⏱', title: '코피스', percentage: 5 },
          ],

        },
        {
          thumbnail: 'https://blog.kakaocdn.net/dn/bTJwwu/btqDLDTY0aW/rG0BsutgO75L18SJ9KWoI0/img.jpg',
          title: '호보스',
          subtitle: '서대문구',
          topRight: '서울특별시',
          scores: [
            { icon: '⭐️', title: '총점', percentage: 55 },
            { icon: '💰', title: '비용', percentage: 30 },
            { icon: '🖥', title: '인터넷', percentage: 10 },
            { icon: '☀️', title: '소음', percentage: 90 },
            { icon: '⏱', title: '코피스', percentage: 5 },
          ],
        },
      ];
    },
  },
};

export default gridMixins;
