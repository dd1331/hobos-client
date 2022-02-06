<template>
  <div style="display:flex; justify-content:center; align-items: center;">
    <div :style="wrapper">
      <h1 class="mb-6">회원가입</h1>
      <img
        style="margin-left: auto; margin-right: auto;  display: block; cursor:pointer;"
        src="@/assets/naver_square.png"
        width="60px"
        @click="onNaverClick"
      />
      <div style="display:none" ref="naver" id="naver_id_login" />
      <div style="display:flex; align-items: center; margin: 30px 0 30px 0">
        <v-divider style="margin-right: 20px"></v-divider>
        <span>OR</span>
        <v-divider style="margin-left: 20px"></v-divider>
      </div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="phone"
          :counter="11"
          :rules="phoneRules"
          label="Phone"
          solo
          dense
          required
          @keyup.enter="signup"
        ></v-text-field>

        <v-text-field
          v-model="password"
          type="password"
          :counter="11"
          :rules="passwordRules"
          label="Password"
          solo
          dense
          required
          @keyup.enter="signup"
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="#ff7f32"
          class="pa-2 mt-4 mb-7"
          @click="signup"
          min-width="100%"
          style="color:white"
        >
          가입
        </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
/* eslint-disable new-cap */
import { VUE_APP_NAVER_LOGIN_CALLBACK_URL, VUE_APP_NAVER_CLIENT_ID, VUE_APP_SERVER_HOST } from '@/../env-config';

export default {
  data: () => ({
    valid: true,
    phone: '',
    password: '',
    phoneRules: [
      (v) => !!v || '휴대폰 번호를 입력해주세요',
      (v) => (v && v.length >= 11) || '휴대폰 번호를 확인해주세요',
    ],
    passwordRules: [
      (v) => !!v || '비밀번호를 입력해주세요',
      (v) => (v && v.length >= 4) || '비밀번호를 확인해주세요',
    ],
    naverLogin: null,
  }),
  computed: {
    wrapper() {
      const width = this.isMobile ? '100' : '45';
      return `width:${width}%; padding:15% 0 20% 0`;
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },

  methods: {
    onNaverClick() {
      this.$refs.naver.firstChild.click();
    },
    async signup() {
      this.validate();
      const payload = {
        phone: this.phone,
        password: this.password,
      };
      const { data } = await this.$axios.post(`${VUE_APP_SERVER_HOST}/users/signup`, payload);
      if (data && data.phone === this.phone) {
        const loggedIn = this.$store.dispatch('auth/loginWithJwt', payload);
        if (loggedIn) this.$router.push('/');
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    const naverLogin = new naver_id_login(VUE_APP_NAVER_CLIENT_ID,
      VUE_APP_NAVER_LOGIN_CALLBACK_URL);
    const state = naverLogin.getUniqState();
    naverLogin.setState(state);
    naverLogin.init_naver_id_login();
  },
};
</script>
