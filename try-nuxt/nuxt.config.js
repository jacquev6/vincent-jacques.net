import assert from 'assert'
import fs from 'fs-extra'
import md5 from 'md5'
import pdfjs from 'pdfjs-dist'

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
  },
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        use: [{ loader: "gray-matter-loader" }]
      })
    }
  },
  hooks: {
    build: {
      async before (builder) {
        const resumeAssetOdt = 'assets/Vincent Jacques - resume.odt'
        const resumeAssetPdf = 'assets/Vincent Jacques - resume.' + md5(fs.readFileSync(resumeAssetOdt)) + '.pdf'
        const resumeStaticPdf = 'static/Vincent Jacques - resume.pdf'
        if (fs.existsSync(resumeAssetPdf)) {
          fs.copySync(resumeAssetPdf, resumeStaticPdf)
        } else {
          console.log('Please run:')
          console.log(`libreoffice --convert-to pdf "${resumeAssetOdt}"; mv "Vincent Jacques - resume.pdf" "${resumeAssetPdf}"`)
          process.exit(0)
        }
        assert.equal((await pdfjs.getDocument(resumeStaticPdf)).numPages, 2)
      }
    }
  }
}
