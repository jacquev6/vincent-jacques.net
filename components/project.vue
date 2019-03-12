<template>
  <b-col md="6" lg="4" class="project" :class="classes">
    <vj-hdr :id="slug" lvl="2">
      {{ name }}
    </vj-hdr>
    <p class="text-left">
      <template v-for="tag in tags">
        <span :key="tag" class="badge badge-tag">{{ tagTitles[tag] }}</span>{{ ' ' }}
      </template>
    </p>
    <vj-markdown :md="description" />
  </b-col>
</template>

<script>
import tags from '../assets/tags.json'

const tagTitles = {}
tags.forEach(({ slug, title }) => {
  tagTitles[slug] = title
})

export default {
  props: {
    name: { type: String, required: true },
    tags: { type: Array, required: true },
    description: { type: String, required: true }
  },
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
    }
  }
}
</script>
