<template>
  <div>
    <h1>{{ title }}</h1>
    <vj-markdown>{{ content }}</vj-markdown>
  </div>
</template>

<script>
import DontForkConnectionPool from '../../../../../contents/articles/dont-fork-connection-pools.md'

const articles = {
  'dont-fork-connection-pools': DontForkConnectionPool
}

export default {
  data () {
    const article = articles[this.$route.params.slug]
    return {
      title: article.data.title,
      content: article.content
    }
  }
}
</script>
