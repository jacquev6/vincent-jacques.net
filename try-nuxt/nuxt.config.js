module.exports = {
  router: {
    base: '/try-nuxt/'
  },
  generate: {
    dir: 'docs'
  },
  head: {
    title: 'vincent-jacques.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
    ]
  },
  plugins: [
    '~/plugins/global.js', // https://github.com/nuxt/nuxt.js/issues/421#issuecomment-288671748
  ],
  modules: [
    'bootstrap-vue/nuxt', // https://bootstrap-vue.js.org/docs#nuxtjs-plugin-module
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }
}
