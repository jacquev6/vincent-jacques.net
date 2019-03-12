<template>
  <b-container lang="en">
    <b-row id="header">
      <b-col>
        <b-row>
          <b-col>
            <vj-markdown>
              [vincent-jacques.net](/) {#vjnet}
            </vj-markdown>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="7" md="5" lg="5">
            <vj-markdown>
              &laquo;&nbsp;S'il n'y a pas de solution, c'est qu'il n'y a pas de problème.&nbsp;&raquo; {#citation}

              Devise [Shadock] {#citation-origin}

              [Shadock]: https://en.wikipedia.org/wiki/Les_Shadoks
            </vj-markdown>
          </b-col>
          <b-col cols="7" md="4" xl="5">
            <vj-markdown>
              [e-mail][my-email] [GitHub][my-github] [TravisCI][my-travis] [PyPi][my-pypi] [OPAM][my-opam] [LinkedIn][my-linkedin] [StackOverflow][my-stackoverflow] {.contact}
            </vj-markdown>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row id="content" class="text-justify">
      <b-col>
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
              and haven't stopped learning since.

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

              My [Python] projects are distributed on the [Python package index][my-pypi], and my [OCaml] projects are published on [OPAM][my-opam].
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
      </b-col>
    </b-row>

    <b-row id="footer">
      <b-col>
        <p class="text-center">
          &copy; <a href="https://github.com/jacquev6/vincent-jacques.net/">Vincent Jacques</a> 2010-2019
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import tags from '../assets/tags.json'

import PyGithub from '../assets/PyGithub.md'
import DrawTurksHead from '../assets/DrawTurksHead.md'
import DrawGrammar from '../assets/DrawGrammar.md'
import Collide from '../assets/Collide.md'
import IpMap from '../assets/IpMap.md'
import ActionTree from '../assets/ActionTree.md'
import variadic from '../assets/variadic.md'
import JsOfOCairo from '../assets/JsOfOCairo.md'
import hashidsOCaml from '../assets/hashids-ocaml.md'
import Polyglot from '../assets/Polyglot.md'
import QuadProgMm from '../assets/QuadProgMm.md'

export default {
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
        PyGithub,
        DrawTurksHead,
        DrawGrammar,
        Collide,
        IpMap,
        ActionTree,
        variadic,
        JsOfOCairo,
        'hashids-ocaml': hashidsOCaml,
        Polyglot,
        QuadProgMm
      }

      return [
        'PyGithub', 'DrawTurksHead', 'DrawGrammar', 'Collide', 'IpMap', 'ActionTree', 'variadic',
        'JsOfOCairo', 'hashids-ocaml', 'Polyglot', 'QuadProgMm'
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

<style lang="scss">
@import "../assets/colors";

// Copy-pasted from Bootstrap 4.3.1
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/code";
@import "../node_modules/bootstrap/scss/grid";
// @import "../node_modules/bootstrap/scss/tables";
// @import "../node_modules/bootstrap/scss/forms";
@import "../node_modules/bootstrap/scss/buttons";
// @import "../node_modules/bootstrap/scss/transitions";
// @import "../node_modules/bootstrap/scss/dropdown";
// @import "../node_modules/bootstrap/scss/button-group";
// @import "../node_modules/bootstrap/scss/input-group";
// @import "../node_modules/bootstrap/scss/custom-forms";
// @import "../node_modules/bootstrap/scss/nav";
// @import "../node_modules/bootstrap/scss/navbar";
// @import "../node_modules/bootstrap/scss/card";
// @import "../node_modules/bootstrap/scss/breadcrumb";
// @import "../node_modules/bootstrap/scss/pagination";
@import "../node_modules/bootstrap/scss/badge";
// @import "../node_modules/bootstrap/scss/jumbotron";
// @import "../node_modules/bootstrap/scss/alert";
// @import "../node_modules/bootstrap/scss/progress";
// @import "../node_modules/bootstrap/scss/media";
// @import "../node_modules/bootstrap/scss/list-group";
// @import "../node_modules/bootstrap/scss/close";
// @import "../node_modules/bootstrap/scss/toasts";
// @import "../node_modules/bootstrap/scss/modal";
@import "../node_modules/bootstrap/scss/tooltip";
// @import "../node_modules/bootstrap/scss/popover";
// @import "../node_modules/bootstrap/scss/carousel";
// @import "../node_modules/bootstrap/scss/spinners";
@import "../node_modules/bootstrap/scss/utilities";
// @import "../node_modules/bootstrap/scss/print";

body {
  background-color: $color_primary_lighter;
}

%head-foot {
  background-color: $color_primary_darkest;
  margin-top: 15px;
  margin-bottom: 15px;
  color: white;

  a {
    color: inherit;
  }
}

#header {
  @extend %head-foot;

  background-image: url("/banner.png");
  background-position: bottom right;
  background-repeat: no-repeat;
  min-height: 150px;

  #vjnet {
    font-size: 40px;
  }

  #citation {
    margin-bottom: 0;
  }

  #citation-origin {
    margin-left: 2em;
    margin-top: 0;
  }

  p.contact {
    text-shadow: -1px 0 $color_primary_darkest, 0 1px $color_primary_darkest, 1px 0 $color_primary_darkest, 0 -1px $color_primary_darkest;
    word-spacing: 200%;
  }
}

#content {
  background-color: white;
  border: solid 2px $color_complementary_base;
  padding-top: 15px;
  padding-bottom: 15px;
  hyphens: auto;

  a {
    color: $color_primary_darkest;
    text-decoration: underline $color_primary_lightest;
  }

  a:hover {
    text-decoration-color: $color_primary_darkest;
  }

  .btn-tag {
    @include button-variant(
      white, $color_complementary_base, // Normal (background, border)
      $color_complementary_lightest, $color_complementary_base, // Hover (background, border)
      $color_complementary_lighter, $color_complementary_base, // Active (background, border)
    );
  }

  .badge-tag {
    @include badge-variant($color_complementary_lighter)
  }
}

#footer {
  @extend %head-foot;
}
</style>
