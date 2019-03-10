<template>
  <div v-html="html"/>
</template>

<script>
import markdownIt from 'markdown-it'

import links from '../assets/links.json'

const linksText = Object.entries(links).map(([title, url]) => `[${title}]: ${url}`).join('\n')

const markdown = markdownIt({ html: true, typographer: true })

export default {
  props: ['md'],
  computed: {
    html () {
      return markdown.render(this.md + '\n\n' + linksText)
    }
  }
}
</script>
