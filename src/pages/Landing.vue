<template lang="pug">
q-page.landing
  h1.landing__title Quasar Framework 中文网站
  section.landing__hero.flex.flex-center
    .row.items-center.justify-center.landing__hero-inner
      .landing__hero-logo.col-12.flex.flex-center.q-mb-lg
        img.landing__logo-image(src="https://cdn.quasar.dev/logo-v2/svg/logo-vertical.svg")
      .landing__hero-text.col-12.column.items-center
        //- .text-h4.landing__hero-text-main.text-bold.text-brand-primary.q-pb-xs QUASAR FRAMEWORK
        .q-pb-lg.text-grey-6.landing__hero-quote.text-center
          | 帮助您在短时间内快速构建高性能，高质量的
          | <span class="text-bold text-no-wrap">Vue.js 3</span> 应用程序
        .landing__hero-row.q-gutter-sm.row.items-center
          q-btn(color="brand-primary" unelevated no-caps to="/introduction-to-quasar" label="为何选择Quasar?")
          q-btn(color="brand-primary" outline no-caps to="/start" label="Get Started")
          q-btn(color="accent" unelevated no-caps to="/video-tutorials" label="视屏教程")
        .q-pb-lg.text-grey-6.landing__hero-quote.text-center
          | 本中文网站持续翻译中,信息来自：<a target="_blank" class="text-bold text-no-wrap" href="https://quasar.dev">英文官网</a>。
          | 如果想了解翻译进度，或者参与翻译，请访问 <a target="_blank" class="text-bold text-no-wrap" href="https://github.com/dongwa/quasar-docs-cn">仓库地址</a>。
          | 另外，我的B站账号中有<a target="_blank" class="text-bold text-no-wrap" href="https://www.bilibili.com/video/BV1pA4y197Zc">quasar的视屏教程</a>欢迎观看👏
  section.landing__front.text-center
    div
      .row.justify-center
        introduction-video.landing__video

  section.bg-white.text-grey-10.text-center
    div
      .text-h4.q-mb-xl 我们的高级赞助商
      sponsor-list

  section.bg-white.text-grey-10.text-center.row.justify-center
    .landing__features.row
      .col-12.text-center
        h4 一套代码支持全平台
      .col-12.text-center.q-my-xl
        .landing__features-icons.q-gutter-lg
          q-icon(:name="fabApple")
          q-icon(:name="fabWindows")
          q-icon(:name="fabLinux")
          q-icon(:name="fabAndroid")
          q-icon(:name="fabChrome")
          q-icon(:name="fabFirefox")
          q-icon(:name="fabEdge")
          q-icon(:name="fabSafari")
      .col-12.text-center.q-my-xl
        p 使用官网脚手架@quasar/cli创建的quasar项目可以一套源代码编译成所有平台的应用程序，并提供最新和最好的最佳实践。你只需关注你的应用功能本身，忘记跨端带来的烦恼。
      .col-12.row.justify-center
        q-card.bg-grey-1.q-px-lg.q-py-sm(bordered flat)
          q-card-section(horizontal)
            q-card-section.text-left.column.items-center.q-gutter-sm
              q-badge(label="$ yarn global add @quasar/cli" color="grey-8")
              q-badge(label="$ yarn create quasar" color="grey-8")
            q-separator(vertical)
            q-card-section.text-left.column.items-center.q-gutter-sm
              q-badge(label="$ npm i -g @quasar/cli" color="grey-8")
              q-badge(label="$ npm init quasar" color="grey-8")

  section.bg-white.text-grey-10.text-center
    .landing__features.row.items-start.q-col-gutter-lg
      .col-12.text-center
        h4 Impressive User Interface Building Blocks
      .col-12.row
        .col-12.col-md-8.landing__features-section.row.text-left
          .col-12.text-left.text-subtitle1.text-bold.q-mt-lg.q-mb-md.q-mx-xs Vue组件
          router-link.landing__features-link.col-6.col-sm-4(
            v-for="dir in features.comps"
            :key="dir.name"
            :to="'/vue-components/' + dir.path"
          ) {{ dir.name }}

        .col-6.col-sm-4.col-md-2.landing__features-section.column.text-left
          .text-left.text-subtitle1.text-bold.q-mt-lg.q-mb-md.q-mx-xs 指令
          router-link.landing__features-link(
            v-for="dir in features.dirs"
            :key="dir.name"
            :to="'/vue-directives/' + dir.path"
          ) {{ dir.name }}

        .col-6.col-sm-4.col-md-2.landing__features-section.column.text-left
          .text-left.text-subtitle1.text-bold.q-mt-lg.q-mb-md.q-mx-xs 插件
          router-link.landing__features-link(
            v-for="dir in features.plugins"
            :key="dir.name"
            :to="'/quasar-plugins/' + dir.path"
          ) {{ dir.name }}

  section.bg-white.text-grey-10.text-center.row.justify-center
    .landing__features.row
      .col-12.q-my-xl.row.items-center.justify-center
        q-img.col-12.col-sm-4.landing__icongenie-logo(src="https://cdn.quasar.dev/img/iconfactory.png")
        .col-12.col-sm-8.column.items-center
          h4 Quasar Icon Genie
          .q-mt-lg.q-mb-xl Consumes a source icon and automatically clones, scales, minifies and places the (needed) 100+ generated icons and splash screens in the appropriate directories for you.
          q-btn(color="brand-primary", unelevated, no-caps, no-wrap, :icon-right="mdiLaunch", label="IconGenie", to="/icongenie/introduction")

  section.landing__footer.flex.flex-center
    div.text-center
      div.landing__footer-icons.row.flex-center.q-gutter-md
        a(href="https://github.quasar.dev", target="_blank", rel="noopener")
          q-icon(:name="fabGithub")

        a(href="https://blog.quasar.dev", target="_blank", rel="noopener")
          q-icon(:name="mdiPost")

        a(href="https://chat.quasar.dev", rel="noopener", target="_blank")
          q-icon(:name="mdiChat")

        a(href="https://forum.quasar.dev/", rel="noopener", target="_blank")
          q-icon(:name="mdiForum")

        a(href="https://twitter.quasar.dev", target="_blank", rel="noopener")
          q-icon(:name="fabTwitter")

        a(href="https://facebook.quasar.dev", target="_blank", rel="noopener")
          q-icon(:name="fabFacebook")

        a(href="https://donate.quasar.dev", rel="sponsored", target="_blank")
          q-icon(:name="fasSuitcaseMedical")

      div.q-mt-lg
        | <doc-link to="https://github.com/quasarframework/quasar/blob/dev/LICENSE">MIT LICENSE</doc-link> | <doc-link to="https://www.iubenda.com/privacy-policy/40685560">Privacy Policy</doc-link> | <doc-link to="https://github.com/quasarframework/quasar-art">Quasar Artwork</doc-link>

      div Copyright © 2015 - {{ year }} PULSARDEV SRL, Razvan Stoenescu
</template>

<script>
import { useMeta } from 'quasar'

import Sponsor from 'components/page-parts/sponsors-and-backers/Sponsor.vue'
import SponsorList from 'components/page-parts/sponsors-and-backers/SponsorList.vue'
import IntroductionVideo from 'components/page-parts/introduction-to-quasar/IntroductionVideo.vue'
// import SurveyCountdown from '../components/SurveyCountdown.vue'

import {
  fabGithub, fabTwitter, fabFacebook, fasSuitcaseMedical,
  fabApple, fabWindows, fabLinux, fabAndroid, fabChrome,
  fabFirefox, fabEdge, fabSafari, fabGoogle
} from '@quasar/extras/fontawesome-v6'

import {
  mdiChevronDown, mdiLaunch, mdiPost,
  mdiChat, mdiForum
} from '@quasar/extras/mdi-v6'

import { useDocStore } from 'assets/doc-store.js'
import features from 'assets/features.js'

export default {
  name: 'Landing',

  components: {
    Sponsor,
    SponsorList,
    // SurveyCountdown,
    IntroductionVideo
  },

  setup () {
    useMeta({
      title: 'Quasar Framework',
      titleTemplate: ''
    })

    const $store = useDocStore()
    $store.toc = []

    return {
      year: (new Date()).getFullYear(),
      features,

      fabGithub,
      fabTwitter,
      fabFacebook,
      fasSuitcaseMedical,
      fabApple,
      fabWindows,
      fabLinux,
      fabAndroid,
      fabChrome,
      fabFirefox,
      fabEdge,
      fabSafari,
      fabGoogle,

      mdiChevronDown,
      mdiLaunch,
      mdiPost,
      mdiChat,
      mdiForum
    }
  }
}
</script>

<style lang="sass">
.landing

  &__title
    font-size: 0
    line-height: 0
    opacity: 0
    margin: 0 !important

  > section
    display: flex
    justify-content: center
    padding: 70px 16px 100px

    > div
      position: relative
      max-width: 1040px
      width: 100%

  &__hero
    min-height: 400px

    &-inner
      max-width: 650px !important

    &-text-main
      font-size: 24px

    &-quote
      padding-top: 70px
      font-size: 16px

    .text-h1
      font-size: 5.2rem
      line-height: 5.2rem

  &__logo-image
    width: 280px
    height: 280px

  &__icongenie-logo
    max-width: 220px !important

  &__front

    > div
      max-width: 700px !important

  &__video
    width: 530px
    max-width: 100%

  &__logo
    max-width: 170px
    max-height: 170px

  &__features

    h4, h6
      margin: 26px 0

    h6
      margin-top: 18px

    p
      opacity: .6
      font-size: 16px

    &-icons
      font-size: 64px

    &-link
      color: $grey-9
      text-decoration: none !important
      padding: 2px 3px

      &:hover
        color: $brand-primary

  &__footer
    padding-top: 72px !important
    padding-bottom: 72px !important

  &__footer-icons
    font-size: 28px

    a
      text-decoration: none
      outline: 0
      color: $brand-primary
      transition: color .28s

      &:hover
        color: $teal

@media (max-width: 1092px)
  .landing
    &__hero
      &-quote
        padding-top: 40px
      .text-h1
        font-size: 3.5rem
        line-height: 4.05rem

@media (max-width: 1023px)
  .landing

    &__logo-image
      width: 190px
      height: 190px

    &__hero
      text-align: center

      &-row
        justify-content: center

      &-logo
        padding-right: 0
        justify-content: center

      &-text
        text-align: center

      &-quote
        margin-left: auto
        margin-right: auto

    > section.padding
      padding-top: 90px
      padding-bottom: 90px

    .landing__feature-item
      text-align: center
</style>
