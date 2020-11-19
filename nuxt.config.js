import assert_ from 'assert'
import childProcess from 'child_process'
import fs from 'fs-extra'
import md5 from 'md5'
import pdfjs from 'pdfjs-dist'

const assert = assert_.strict

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
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/brands.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/fontawesome.css' }
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
  },

  hooks: {
    build: {
      async before (builder) {
        const resumeAssetOdt = 'assets/Vincent Jacques - resume.odt'
        const resumeAssetPdf = 'assets/Vincent Jacques - resume.' + md5(fs.readFileSync(resumeAssetOdt)) + '.pdf'
        const resumeStaticPdf = 'static/Vincent Jacques - resume.pdf'
        if (!fs.existsSync(resumeAssetPdf)) {
          childProcess.spawnSync('/usr/bin/libreoffice', ['--convert-to', 'pdf', resumeAssetOdt])
          fs.moveSync('Vincent Jacques - resume.pdf', resumeAssetPdf)
        }
        assert.equal((await pdfjs.getDocument(resumeAssetPdf)).numPages, 2)
        fs.copySync(resumeAssetPdf, resumeStaticPdf)
      }
    }
  }
}
