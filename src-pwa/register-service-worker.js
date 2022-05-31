import { register } from 'register-service-worker'
import { Notify } from 'quasar'
import { mdiCached } from '@quasar/extras/mdi-v6'

register(process.env.SERVICE_WORKER_FILE, {
  updated () {
    Notify.create({
      color: 'negative',
      icon: mdiCached,
      message: '检测到文档内容有更新，请刷新当前页面。',
      timeout: 0,
      multiLine: true,
      position: 'top',
      actions: [
        {
          label: '刷新',
          color: 'yellow',
          handler: () => {
            window.location.reload()
          }
        },
        {
          label: '忽略',
          color: 'white',
          handler: () => {}
        }
      ]
    })
  }
})
