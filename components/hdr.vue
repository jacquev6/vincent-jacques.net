<template>
  <h1 v-if="lvl === '1'" :id="id" class="px-1" :class="{highlighted}">
    <slot /><no-ssr>&nbsp;<a class="header-anchor" :href="'#' + id">¶</a></no-ssr>
  </h1>
  <h2 v-else-if="lvl === '2'" :id="id" class="px-1" :class="{highlighted}">
    <slot /><no-ssr>&nbsp;<a class="header-anchor" :href="'#' + id">¶</a></no-ssr>
  </h2>
  <h3 v-else-if="lvl === '3'" :id="id" class="px-1" :class="{highlighted}">
    <slot /><no-ssr>&nbsp;<a class="header-anchor" :href="'#' + id">¶</a></no-ssr>
  </h3>
</template>

<script>
// @todo https://vuejs.org/v2/guide/render-function.html
export default {
  props: {
    lvl: { type: String, required: true },
    id: { type: String, required: true }
  },
  computed: {
    highlighted () {
      return this.$route.hash === '#' + this.id
    }
  }
}
</script>

<style lang="scss">
@import "../assets/colors";

#content { // @todo Remove (by making the style "scoped")
  h1 {
    background-color: $color_primary_darkest;
    color: white;
  }
  h1.highlighted {
    color: $color_complementary_base;
  }

  h2 {
    background-color: $color_primary_darker;
    color: white;
  }
  h2.highlighted {
    color: $color_complementary_base;
  }

  h3 {
    background-color: $color_primary_lightest;
    color: black;
  }
  h3.highlighted {
    color: $color_primary_darkest;
  }

  a.header-anchor {
    visibility: hidden;
    color: inherit;
    text-decoration: none;
  }

  a.header-anchor:hover {
    text-decoration: underline;
  }

  a.header-anchor:after {
    content: "";
  }

  :hover > a.header-anchor, .highlighted a.header-anchor {
    visibility: visible;
  }
}
</style>
