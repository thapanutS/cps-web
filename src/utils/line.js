import { emptyPromise } from './common'
import Config from '~/config'

const { liff } = window

class LineUtil {
  isInitiated = false
  liffId = ''

  /**
   * @param {string} liffId - LIFF app ID
   * @return {Promise}
   */
  init(liffId) {
    if (Config.devTest) return

    if (this.isInitiated) return emptyPromise()

    return liff
      .init({ liffId })
      .then(() => {
        this.isInitiated = true
        this.liffId = liffId
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err.code, err.message)
      })
  }

  login(redirectUri) {
    if (!liff.isLoggedIn()) {
      liff.login(redirectUri ? { redirectUri } : null)
    }
  }

  logout() {
    if (liff.isLoggedIn()) {
      liff.logout()
    }
  }

  async checkInitial() {
    if (!this.isInitiated) {
      await this.init(this.liff)
    }
  }

  checkLogin() {
    if (!liff.isInClient()) {
      // (web login) in the LINE's in-app browser or external browser
      this.login(window.location.href)
    }
  }

  getOS(){
    return liff.getOS()
  }

  /**
   * @return {Promise} is resolved, the object containing the user's profile information
   */
  async getProfile() {
    await this.checkInitial()
    this.checkLogin()
    return liff.getProfile()
  }

  async getAccessToken() {
    await this.checkInitial()
    this.checkLogin()
    return liff.getAccessToken()
  }

  async getIDToken() {
    await this.checkInitial()
    this.checkLogin()
    return liff.getIDToken()
  }

  async getDecodedIDToken() {
    await this.checkInitial()
    this.checkLogin()
    return liff.getDecodedIDToken()
  }

  async sendMessages(messages) {
    const messagesToSend = Array.isArray(messages) ? messages : [messages]
    await liff.sendMessages(messagesToSend)
  }

  openWindow(url, external) {
    liff.openWindow({ url, external })
  }

  closeWindow() {
    liff.closeWindow()
  }

  getVersion() {
    return liff.getVersion()
  }
}

const lineUtil = new LineUtil()
export default lineUtil
