// TODO move to env file
export const IS_DEVELOPE = process.env.NODE_ENV === 'development';
export const HOST = IS_DEVELOPE ? process.env.VUE_APP_HOST : 'http://hobos-load-balancer-cec68ef9f5418048.elb.ap-northeast-2.amazonaws.com';
export const VUE_APP_SERVER_HOST = `${HOST}:3000`;
export const VUE_APP_LOCAL_SERVICE = `${HOST}:4000`;
export const { VUE_APP_NAVER_CLIENT_ID } = process.env.VUE_APP_NAVER_CLIENT_ID || '4yYQ9GQnL3sH0JOpPXpS';
export const VUE_APP_NAVER_LOGIN_CALLBACK_URL = `${VUE_APP_SERVER_HOST}/auth/naver`;
