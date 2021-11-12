<template>
  <div>
    <div style="display:flex; margin-top: 1rem;">
      <h2 >☕️ Popular Cafes</h2>
      <div style="margin-left:auto;
        margin-right:0; display: flex;
        justify-content: center;
        align-items: center;"
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
          title: '서대문구',
          subtitle: '서울특별시',
        },
        {
          thumbnail: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTRfNTkg/MDAxNTg2ODY4Mzc1NTA5.rb8iskbAfgiOU7bC8VPtqkhzfePKSg1HEJjhuIt86cwg.OhjRaCIwB1MVIUdxGEjJzAPXMymKHL5KHdNNFWpu7MYg.JPEG.nowwegom/DSC02790-2.jpg?type=w800',
          title: '대현동',
          subtitle: '서울특별시',
        },
        {
          thumbnail: 'https://blog.kakaocdn.net/dn/bTJwwu/btqDLDTY0aW/rG0BsutgO75L18SJ9KWoI0/img.jpg',
          title: '서대문구',
          subtitle: '서울특별시',
        },
        {
          thumbnail: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTRfNTkg/MDAxNTg2ODY4Mzc1NTA5.rb8iskbAfgiOU7bC8VPtqkhzfePKSg1HEJjhuIt86cwg.OhjRaCIwB1MVIUdxGEjJzAPXMymKHL5KHdNNFWpu7MYg.JPEG.nowwegom/DSC02790-2.jpg?type=w800',
          title: '대현동',
          subtitle: '서울특별시',
        },
        {
          thumbnail: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTRfNTkg/MDAxNTg2ODY4Mzc1NTA5.rb8iskbAfgiOU7bC8VPtqkhzfePKSg1HEJjhuIt86cwg.OhjRaCIwB1MVIUdxGEjJzAPXMymKHL5KHdNNFWpu7MYg.JPEG.nowwegom/DSC02790-2.jpg?type=w800',
          title: '대현동',
          subtitle: '서울특별시',
        },
        {
          thumbnail: 'https://blog.kakaocdn.net/dn/bTJwwu/btqDLDTY0aW/rG0BsutgO75L18SJ9KWoI0/img.jpg',
          title: '서대문구',
          subtitle: '서울특별시',
        },
        {
          thumbnail: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTRfNTkg/MDAxNTg2ODY4Mzc1NTA5.rb8iskbAfgiOU7bC8VPtqkhzfePKSg1HEJjhuIt86cwg.OhjRaCIwB1MVIUdxGEjJzAPXMymKHL5KHdNNFWpu7MYg.JPEG.nowwegom/DSC02790-2.jpg?type=w800',
          title: '대현동',
          subtitle: '서울특별시',
        },
        {
          thumbnail: 'https://blog.kakaocdn.net/dn/bTJwwu/btqDLDTY0aW/rG0BsutgO75L18SJ9KWoI0/img.jpg',
          title: '서대문구',
          subtitle: '서울특별시',
        },

      ],
    };
  },
  components: {
    ImageGrid,
  },
};
</script>
