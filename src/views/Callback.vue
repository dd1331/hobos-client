<template>
  <div>
    <div id="naverIdLogin"/>
  </div>
</template>
<script>

export default {
  methods: {
    async login() {
      const { accessToken } = this.$route.query;

      const isLoggedIn = await this.$store.dispatch('auth/loginWithNaver', { accessToken });

      if (!accessToken || !isLoggedIn) {
        alert('로그인에 실패했습니다');
        this.$router.push('/login');
        return;
      }
      this.$router.push('/');
    },
  },
  async mounted() {
    await this.login();
  },
};

</script>

<style>

</style>
