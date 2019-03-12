import assert from 'assert'
import childProcess from 'child_process'
import fs from 'fs-extra'
import md5 from 'md5'
import pdfjs from 'pdfjs-dist'

module.exports = {
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
        if (!fs.existsSync(resumeAssetPdf)) {
          childProcess.spawnSync('/usr/bin/libreoffice', ['--convert-to', 'pdf', resumeAssetOdt])
          fs.moveSync("Vincent Jacques - resume.pdf", resumeAssetPdf)
        }
        assert.equal((await pdfjs.getDocument(resumeAssetPdf)).numPages, 2)
        fs.copySync(resumeAssetPdf, resumeStaticPdf)
      }
    }
  }
}
