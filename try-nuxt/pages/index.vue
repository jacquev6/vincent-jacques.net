<template>
  <b-container lang="en">

     <b-row id="header"><b-col>
        <b-row><b-col>
          <p id="vjnet"><a href="/">vincent-jacques.net</a></p>
        </b-col></b-row>
        <b-row>
          <b-col md="6">
            <p id="citation">« S’il n’y a pas de solution,<br>c’est qu’il n’y a pas de problème. »</p>
            <p id="citation-origin">Devise <a href="https://en.wikipedia.org/wiki/Les_Shadoks">Shadock</a></p>
          </b-col>
          <b-col class="header-links" md="2">
            <p><a href="mailto:vincent@vincent-jacques.net">e-mail</a><br>
            <a href="https://github.com/jacquev6/">GitHub</a>,
            <a href="https://travis-ci.org/jacquev6/">Travis CI</a><br>
            <a href="https://pypi.org/user/jacquev6/">PyPi</a>,
            <a href="https://github.com/ocaml/opam-repository/search?q=author%3Ajacquev6&amp;type=Issues">OPAM</a></p>
          </b-col>
          <b-col class="header-links" md="4">
            <p><a href="https://www.linkedin.com/in/jacquev6/">LinkedIn</a><br>
            <a href="https://stackoverflow.com/users/905845/jacquev6/">StackOverflow</a></p>
          </b-col>
        </b-row>
      </b-col></b-row>

      <b-row id="content" class="text-justify"><b-col>
        <b-row><b-col>
          <vj-hdr lvl="1" id="introduction">Introduction</vj-hdr>
        </b-col></b-row>

        <b-row>
          <b-col md="6">
            <p>I’m Vincent Jacques, alias <a href="https://www.google.com/search?q=jacquev6">@jacquev6</a> on the web.
            I’m a 35 years old, French, passionate software engineer.
            I started programming when I was 12 on a <a href="http://www.rskey.org/fx790p">Casio calculator</a>,
            and haven’t stopped learning since.</p>
            <p>I studied general engineering at <a href="https://en.wikipedia.org/wiki/%C3%89cole_Centrale_Paris">Ecole Centrale Paris</a>
            (2006) and I specialized on software as a very enthusiastic career choice.</p>
          </b-col>
          <b-col md="6">
            <p>After eleven years of professional software engineering, I value maintainable and evolutive source code
            and the use of tools and automation to create working, reliable software.</p>
            <p>As of October 2018, I’m working as a Software Engineer at <a href="https://www.datadoghq.com/">Datadog</a>.</p>
          </b-col>
        </b-row>

        <b-row><b-col>
          <vj-hdr lvl="1" id="portfolio">Portfolio</vj-hdr>
          <p>Most of my projects are hosted on <a href="https://github.com/jacquev6/">GitHub</a>
          and have continuous build on <a href="https://travis-ci.org/jacquev6/">Travis CI</a>.</p>
          <p>My projects are documented using <a href="http://www.sphinx-doc.org/">Sphinx</a> and the <a href="https://alabaster.readthedocs.io/">Alabaster</a> theme.
          Reference documentation is generated from <a href="https://www.python.org/">Python</a> source code by <a href="www.sphinx-doc.org/en/master/usage/extensions/autodoc.html">autodoc</a>,
          form <a href="https://isocpp.org/">C++</a> source code by <a href="http://www.doxygen.nl/">Doxygen</a> and <a href="https://breathe.readthedocs.io/">Breathe</a>,
          and from <a href="https://ocaml.org/">OCaml</a> source code by a preliminary version of my <a href="https://github.com/jacquev6/sphinxcontrib-ocaml/">Sphinx extension for OCaml</a></p>
          <p>My <a href="https://www.python.org/">Python</a> projects are distributed on the <a href="https://pypi.org/user/jacquev6/">Python package index</a>, and my <a href="https://ocaml.org/">OCaml</a> projects are published on <a href="https://github.com/ocaml/opam-repository/search?q=author%3Ajacquev6&amp;type=Issues">OPAM</a>.</p>
          <p>Projects filter: <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="python" data-toggle="tooltip" title="Display projects implemented in Python">Python</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="cpp" data-toggle="tooltip" title="Display projects implemented in C++">C++</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="ocaml" data-toggle="tooltip" title="Display projects implemented in OCaml">OCaml</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="javascript" data-toggle="tooltip" title="Display projects implemented in JavaScript">JavaScript</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="library" data-toggle="tooltip" title="Display projects providing a reusable library">Library</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="program" data-toggle="tooltip" title="Display projects providing a desktop program">Program</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="mobile" data-toggle="tooltip" title="Display projects providing a mobile application">Mobile</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="web" data-toggle="tooltip" title="Display projects targeting the web environment">Web</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="demo" data-toggle="tooltip" title="Display projects are just a technology demonstration">Demo</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="visual" data-toggle="tooltip" title="Display projects drawing something">Visualization</button></p>
        </b-col></b-row>

        <b-row>
          <vj-project v-for="project in projects" :key="project.name" v-bind="project"/>
        </b-row>
      </b-col></b-row>

      <b-row id="footer"><b-col>
        <p class="text-center">&copy; <a href="https://github.com/jacquev6/vincent-jacques.net/">Vincent Jacques</a> 2010-2019</p>
      </b-col></b-row>
  </b-container>
</template>

<script>
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
    return {
      projects: [
        { name: 'PyGithub', tags: PyGithub.data.tags, description: PyGithub.content },
        { name: 'DrawTurksHead', tags: DrawTurksHead.data.tags, description: DrawTurksHead.content },
        { name: 'DrawGrammar', tags: DrawGrammar.data.tags, description: DrawGrammar.content },
        { name: 'Collide', tags: Collide.data.tags, description: Collide.content },
        { name: 'IpMap', tags: IpMap.data.tags, description: IpMap.content },
        { name: 'ActionTree', tags: ActionTree.data.tags, description: ActionTree.content },
        { name: 'variadic', tags: variadic.data.tags, description: variadic.content },
        { name: 'JsOfOCairo', tags: JsOfOCairo.data.tags, description: JsOfOCairo.content },
        { name: 'hashids-ocaml', tags: hashidsOCaml.data.tags, description: hashidsOCaml.content },
        { name: 'Polyglot', tags: Polyglot.data.tags, description: Polyglot.content },
        { name: 'QuadProgMm', tags: QuadProgMm.data.tags, description: QuadProgMm.content },
      ]
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

  background-image: url("/try-nuxt/banner.png");
  background-position: bottom right;
  background-repeat: no-repeat;
  min-height: 150px;

  #vjnet {
    font-size: 40px;
  }

  #citation {
    margin-left: 5em;
    margin-bottom: 0;
  }

  #citation-origin {
    margin-left: 10em;
    margin-top: 0;
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
