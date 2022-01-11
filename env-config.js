// TODO move to env file
export const VUE_APP_SERVER_HOST = process.env.VUE_APP_SERVER_HOST
  ? process.env.VUE_APP_SERVER_HOST : 'http://hobos-load-balancer-cec68ef9f5418048.elb.ap-northeast-2.amazonaws.com:3000';
export const VUE_APP_LOCAL_SERVICE = process.env.VUE_APP_LOCAL_SERVICE
  ? process.env.VUE_APP_LOCAL_SERVICE : 'http://hobos-load-balancer-cec68ef9f5418048.elb.ap-northeast-2.amazonaws.com:4000';
