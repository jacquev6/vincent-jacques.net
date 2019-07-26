<template>
  <div v-html="html" /><!-- eslint-disable-line vue/no-v-html (https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-v-html.md) -->
</template>

<script>
import dedent from 'dedent-js'
import markdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'

import links from '../contents/links.json'

const linksText = Object.entries(links).map(([title, url]) => `[${title}]: ${url}`).join('\n')

const renderer = markdownIt({ html: true, typographer: true })
renderer.use(markdownItAttrs)

export default {
  props: {
    md: { type: String, required: false, default: null }
  },
  computed: {
    html () {
      return renderer.render(this.markdown + '\n\n' + linksText)
    },
    markdown () {
      return this.md || dedent(this.$slots.default[0].text)
    }
  }
}
</script>
