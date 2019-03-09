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
  modules: [
    'bootstrap-vue/nuxt', // https://bootstrap-vue.js.org/docs#nuxtjs-plugin-module
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }
}
