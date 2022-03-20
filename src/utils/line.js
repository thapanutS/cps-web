// import Config from '~/config'
import liff from "@line/liff";
class LineUtil {
  init() {
    return liff.init({ liffId: `${process.env.VUE_APP_LINE_LIFF_ID}` }).catch((err) => {
      console.error(err.code, err.message);
    });
  }

  login() {
    liff.ready
      .then(async () => {
        if (liff.isLoggedIn()) {
          const decodedIDToke = await this.getDecodedIDToken();
          await this.$store.dispatch("user/setLineProfile", decodedIDToke);
        } else {
          liff.login({ redirectUri: "" });
        }
      })
      .catch((err) => {
        console.log("Login error", err);
      });
  }

  async getProfile() {
    const lineProfile = await liff.getProfile();
    await this.$store.dispatch("user/setLineProfile", lineProfile);
  }

  async getIDToken() {
    return await liff.getIDToken();
  }

  async getDecodedIDToken() {
    return await liff.getDecodedIDToken();
  }

}

const lineUtil = new LineUtil();
export default lineUtil;
