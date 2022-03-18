// import Config from '~/config'
import liff from "@line/liff";
class LineUtil {
  init() {
    return liff.init(`${process.env.VUE_APP_LINE_LIFF_ID}`).catch((err) => {
      console.error(err.code, err.message);
    });
  }

  login(redirectUri) {
    liff.ready
      .then(() => {
        if (liff.isLoggedIn()) {
          this.getProfile();
        } else {
          liff.login(
            redirectUri
              ? {
                  redirectUri,
                }
              : null
          );
        }
      })
      .catch((err) => {
        console.log("Login error", err);
      });
  }
  getProfile() {
    liff
      .getProfile()
      .then((profile) => {
        this.$store.dispatch("user/setLineProfile", profile);
      })
      .catch((err) => {
        console.log("getProfile error", err);
      });
  }
}

const lineUtil = new LineUtil();
export default lineUtil;
