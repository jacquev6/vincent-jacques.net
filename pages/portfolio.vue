<template>
  <div>
    <b-row>
      <b-col>
        <vj-hdr id="oss" lvl="1">
          Open-source software
        </vj-hdr>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <!--
          @todo Say something about what OSS is and why it's a Good Thing (TM).
          @todo Give general context ("learning opportunities", "hobby projects")
          @todo Remove Travis? I'm using GitHub Actions more nowadays.
          @todo How can I express my knowledge of technologies I don't use anymore?
        -->
        <vj-markdown>
          My projects are hosted on [GitHub][my-github]. They are documented using [Sphinx] and the [Alabaster] theme.
          Reference documentation is generated from [Python] source code by [autodoc],
          form [C++] source code by [Doxygen] and [Breathe],
          and from [OCaml] source code by a preliminary version of my [Sphinx extension for OCaml][sphinxcontrib-ocaml]

          My [Python] libraries are distributed on the [Python package index][my-pypi], and my [OCaml] ones are published on [OPAM][my-opam].
        </vj-markdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>
          Projects filter: <span v-for="tag in tags" :key="tag.slug">
            <b-btn size="sm" variant="tag" :pressed="tagsVisibility[tag.slug]" class="my-1" @click="toggleFilter(tag.slug)">
              {{ tag.title }}
            </b-btn>{{ ' ' }}
          </span>
        </p>
      </b-col>
    </b-row>

    <b-row>
      <template v-for="project in projects">
        <template v-if="project.visible">
          <vj-project :key="project.name" :name="project.name" :tags="project.tags" :description="project.description" />
        </template>
      </template>
    </b-row>
  </div>
</template>

<script>
import tags from '../contents/tags.json'

import ActionTree from '../contents/projects/ActionTree.md'
import Collide from '../contents/projects/Collide.md'
import DrawGrammar from '../contents/projects/DrawGrammar.md'
import DrawTurksHead from '../contents/projects/DrawTurksHead.md'
import hashidsOCaml from '../contents/projects/hashids-ocaml.md'
import infrastructure from '../contents/projects/infrastructure.md'
import IpMap from '../contents/projects/IpMap.md'
import JsOfOCairo from '../contents/projects/JsOfOCairo.md'
import Polyglot from '../contents/projects/Polyglot.md'
import PyGithub from '../contents/projects/PyGithub.md'
import QuadProgMm from '../contents/projects/QuadProgMm.md'
import variadic from '../contents/projects/variadic.md'
import vjnet from '../contents/projects/vjnet.md'

export default {
  layout: 'default',
  data () {
    const tagsVisibility = {}
    tags.forEach(({ slug }) => { tagsVisibility[slug] = true })
    return {
      tags,
      tagsVisibility
    }
  },
  head: {
    title: 'Vincent Jacques - Portfolio'
  },
  computed: {
    projects () {
      const projects = {
        ActionTree,
        Collide,
        DrawGrammar,
        DrawTurksHead,
        'hashids-ocaml': hashidsOCaml,
        infrastructure,
        IpMap,
        JsOfOCairo,
        Polyglot,
        PyGithub,
        QuadProgMm,
        variadic,
        'vincent-jacques.net': vjnet
      }

      return [
        'PyGithub',
        'DrawTurksHead',
        'DrawGrammar',
        'Collide',
        'vincent-jacques.net',
        'infrastructure',
        'IpMap',
        'ActionTree',
        'variadic',
        'JsOfOCairo',
        'hashids-ocaml',
        'Polyglot',
        'QuadProgMm'
      ].map((name) => {
        const project = projects[name]
        const tags = project.data.tags
        const description = project.content

        const visible = tags.some(tag => this.tagsVisibility[tag])

        return { name, tags, description, visible }
      })
    }
  },
  methods: {
    toggleFilter (tag) {
      // const tag = click.target.getAttribute('data-tag-slug')
      if (this.tags.every(({ slug }) => this.tagsVisibility[slug])) {
        this.tags.forEach(({ slug }) => {
          this.tagsVisibility[slug] = false
        })
        this.tagsVisibility[tag] = true
      } else {
        this.tagsVisibility[tag] = !this.tagsVisibility[tag]
        if (!this.tags.some(({ slug }) => this.tagsVisibility[slug])) {
          this.tags.forEach(({ slug }) => {
            this.tagsVisibility[slug] = true
          })
        }
      }
    }
  }
}
</script>
