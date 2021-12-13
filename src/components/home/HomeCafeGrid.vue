<template>
  <div>
    <div style="display:flex; margin-top: 1rem;">
      <h2 >☕️ Popular Cafes</h2>
      <div style="margin-left:auto;
        margin-right:0; display: flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;"
      >
        전체보기
      </div>
    </div>
    <Image-Grid :items="items" cols="3"></Image-Grid>
  </div>
</template>
<script>
import ImageGrid from '@/components/ImageGrid';

export default {
  data() {
    return {
      items: [
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

      ],
    };
  },
  components: {
    ImageGrid,
  },
};
</script>
