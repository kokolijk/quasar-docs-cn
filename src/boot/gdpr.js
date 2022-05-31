import { Cookies, Notify, openURL } from 'quasar'

if (Cookies.has('gdpr') !== true) {
  const policyUrl =
    'https://www.iubenda.com/privacy-policy/40685560/cookie-policy?an=no&s_ck=false&newmarkup=yes'

  Notify.create({
    message:
      '一些第三方的工具的部分功能需要使用cookies权限，并且这些功能都符合cookies协议的规范',
    multiline: true,
    classes: 'doc-gdpr',
    timeout: 0,
    position: 'bottom-right',
    actions: [
      {
        label: '同意',
        color: 'yellow',
        handler () {
          Cookies.set('gdpr', true, { expires: 5 * 365 })
        }
      },
      {
        label: '了解更多',
        color: 'grey',
        noDismiss: true,
        handler () {
          openURL(policyUrl)
        }
      }
    ]
  })
}
