<template>
  <div v-html="html"/>
</template>

<script>
import markdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'

import links from '../assets/links.json'

const linksText = Object.entries(links).map(([title, url]) => `[${title}]: ${url}`).join('\n')

const renderer = markdownIt({ html: true, typographer: true })
renderer.use(markdownItAttrs)

export default {
  props: ['md'],
  computed: {
    html () {
      return renderer.render(this.markdown + '\n\n' + linksText)
    },
    markdown () {
      if (this.md) {
        return this.md
      } else {
        return this.$slots.default && this.$slots.default[0].text
      }
    }
  }
}
</script>
