// import Config from '~/config'
import liff from "@line/liff";
import config from "../../config";
class LineUtil {
  init() {
    return liff
      .init({
        liffId: `${process.env.VUE_APP_LINE_LIFF_ID}`,
      })
      .then(() => {
        console.log(`LIFF Init Success`);
      })
      .catch((err) => {
        console.log("Init error : ", err);
      });
  }

  login() {
    console.log("LIFF Ready Starting");
    liff.ready
      .then(async () => {
        if (liff.isLoggedIn()) {
          const decodedIDToken = await this.getDecodedIDToken();
          localStorage.setItem(
            `LIFF_STORE:${config.line.liff_id}:decodedIDToken`,
            JSON.stringify(decodedIDToken)
          );
        } else {
          liff
            .login({
              redirectUri: window.location,
            })
            .then(() => {
              console.log(`LIFF Login Success`);
            })
            .catch((err) => {
              console.log("Login error : ", err);
            });
        }
      })
      .catch((err) => {
        console.log("LIFF Ready error : ", err);
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
