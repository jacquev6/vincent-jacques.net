<template>
  <b-col md="6" lg="4" class="project" :class="classes">
    <vj-hdr lvl="2" :id="slug">{{ name }}</vj-hdr>
    <p class="text-left">
      <template v-for="tag in tags"><span class="badge badge-tag">{{ tagTitles[tag] }}</span>{{ ' ' }}</template>
    </p>
    <div v-html="htmlDescription"/>
  </b-col>
</template>

<script>
import markdownIt from 'markdown-it'

import tags from '../assets/tags.json'
import links from '../assets/links.json'

const tagTitles = {}
tags.forEach(({slug, title}) => {
  tagTitles[slug] = title
})

const linksText = Object.entries(links).map(([title, url]) => `[${title}]: ${url}`).join('\n')

const markdown = markdownIt({ html: true, typographer: true })

export default {
  props: ['name', 'tags', 'description'],
  data () {
    return {
      tagTitles
    }
  },
  computed: {
    slug () {
      return String(this.name).trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '-').replace(/[^-a-z]/g, '')
    },
    classes () {
      return this.tags.map(tag => 'tag-' + tag)
    },
    htmlDescription () {
      return markdown.render(this.description + '\n\n' + linksText)
    }
  }
}
</script>
