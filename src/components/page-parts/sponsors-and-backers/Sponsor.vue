<template lang="pug">
.quasar-sponsor(@click="openWebsite" :style="style")
  q-img(:alt="name" height="100%" fit="contain" :src="logoUrl")
</template>

<script>
import { computed } from 'vue'
import { openURL } from 'quasar'

export default {
  name: 'Sponsor',

  props: {
    img: String,
    name: String,
    url: String
  },

  setup (props) {
    return {
      style: computed(() => ({
        cursor: props.url ? 'pointer' : 'default'
      })),

      logoUrl: computed(() => `https://cdn.quasar.dev/sponsors/${props.img}`),

      openWebsite () {
        props.url && openURL(props.url)
      }
    }
  }
}
</script>

<style lang="sass">
.quasar-sponsor
  width: 100%
  max-width: 11rem
  height: 120px
  padding: 8px

@media (max-width: 720px)
  .quasar-sponsor
    height: 80px
</style>
