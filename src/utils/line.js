// import Config from '~/config'
import liff from "@line/liff";
class LineUtil {
  init() {
    return liff.init(`${process.env.VUE_APP_LINE_LIFF_ID}`).catch((err) => {
      console.error(err.code, err.message);
    });
  }

  login() {
    liff.ready
      .then(async () => {
        if (liff.isLoggedIn()) {
          const idToken = await this.getIDToken();
          await this.verifyIDToken(idToken)
        } else {
          liff.login();
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

  async verifyIDToken(idToken) {
    await this.$store.dispatch("user/verifyIDToken", idToken);
  }
}

const lineUtil = new LineUtil();
export default lineUtil;
