<template>
  <a v-if="show" href="#" class="scrollToTop"></a>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      show: false
    }
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      this.show = window.scrollY > 100
    }
  }
}
</script>

<style scoped></style>
