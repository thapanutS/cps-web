// import Config from '~/config'
import liff from "@line/liff";
class LineUtil {
  init() {
    console.log('LIFF INIT Starting');
    console.log(`LINE_LIFF_ID : ${process.env.VUE_APP_LINE_LIFF_ID}`);
    return liff.init({
      liffId: "1656906142-Zqr44N10"
    }).then(() => {
      console.log('LIFF INIT Success');
    }).catch((err) => {
      console.log("Init error", err);
    });
  }

  login() {
    liff.ready
      .then(async () => {
        console.log('LIFF isLoggedIn Starting');
        if (liff.isLoggedIn()) {
          console.log('LIFF getDecodedIDToken Starting');
          const decodedIDToke = await this.getDecodedIDToken();
          await this.$store.dispatch("user/setLineProfile", decodedIDToke);
        } else {
          console.log('LIFF Login & redirectUri Starting');
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

  async getDecodedIDToken() {
    return await liff.getDecodedIDToken();
  }

}

const lineUtil = new LineUtil();
export default lineUtil;