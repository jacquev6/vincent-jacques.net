export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  generate: {
    dir: 'docs',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'vincent-jacques.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/brands.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/fontawesome.css' }
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    { path: '~/components', prefix: 'vj' }
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'qonfucius-nuxt-fontawesome',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],
  fontAwesome: {
    packs: [
      {
        package: '@fortawesome/free-brands-svg-icons',
        icons: ['faGithub', 'faPython', 'faLinkedin', 'faStackOverflow'],
      },
      {
        package: '@fortawesome/free-regular-svg-icons',
        icons: ['faEnvelope'],
      }
    ],
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        use: [{ loader: 'gray-matter-loader' }]
      })
    }
  }
}
