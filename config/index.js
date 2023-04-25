export default {
  api: {
    baseUrl: 'https://odd-rose-magpie-veil.cyclic.app',
  },
  line: {
    liff_id: process.env.VUE_APP_LINE_LIFF_ID,
    liff_channel_id: process.env.VUE_APP_LINE_LIFF_CHANNEL_ID,
  },
  // dev_status is true for developing
  dev_status: false,
};
