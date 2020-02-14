<template>
  <div>
    <b-row>
      <b-col>
        <vj-hdr id="introduction" lvl="1">
          Introduction
        </vj-hdr>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6">
        <vj-markdown>
          I'm Vincent Jacques, alias [@jacquev6] on the web.
          I'm a 36 years old, French, passionate software engineer.
          I started programming when I was 12 on a [Casio calculator],
          and I haven't stopped learning.

          [@jacquev6]: https://www.google.com/search?q=jacquev6
          [Casio calculator]: http://www.rskey.org/fx790p

          I studied general engineering at [Ecole Centrale Paris][ECP]
          (2006) and I specialized on software as a very enthusiastic career choice.
        </vj-markdown>
      </b-col>
      <b-col md="6">
        <vj-markdown>
          After twelve years of professional software engineering, I value maintainable and evolutive source code
          and the use of tools and automation to create working, reliable software.
        </vj-markdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <vj-hdr id="portfolio" lvl="1">
          Portfolio
        </vj-hdr>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <vj-markdown>
          Most of my projects are hosted on [GitHub][my-github] and have continuous build on [Travis CI][my-travis].

          My projects are documented using [Sphinx] and the [Alabaster] theme.
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
