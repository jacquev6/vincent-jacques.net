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
          <b-col cols="7" md="5" lg="6">
            <vj-markdown>
              &laquo;&nbsp;S'il n'y a pas de solution, c'est qu'il n'y a pas de problème.&nbsp;&raquo; {#citation}

              Devise [Shadock] {#citation-origin}

              [Shadock]: https://en.wikipedia.org/wiki/Les_Shadoks
            </vj-markdown>
          </b-col>
          <b-col cols="7" md="4">
            <p class="contact">
              <a href="mailto:vincent@vincent-jacques.net">e-mail <fa-icon :icon="['far', 'envelope']" /></a>
              <a href="https://github.com/jacquev6/">GitHub <fa-icon :icon="['fab', 'github']" /></a>
              <a href="https://travis-ci.org/jacquev6/">Travis CI <img height="15px" src="/travis.svg"></img></a>
              <a href="https://pypi.org/user/jacquev6/">PyPi <fa-icon :icon="['fab', 'python']" /></a>
              <a href="https://github.com/ocaml/opam-repository/search?q=author%3Ajacquev6&amp;type=Issues">OPAM <img height="15px" src="/ocaml.svg"></img></a>
              <a href="https://www.linkedin.com/in/jacquev6/">LinkedIn <fa-icon :icon="['fab', 'linkedin']" /></a>
              <a href="https://stackoverflow.com/users/905845/jacquev6/">StackOverflow <fa-icon :icon="['fab', 'stack-overflow']" /></a>
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row id="content" class="text-justify">
      <b-col>
        <nuxt />
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
    word-spacing: 400%;

    a {
      word-spacing: normal;
      white-space: nowrap;
    }
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

  a[href^='https://github.com/jacquev6/']::after, a[href='https://github.com/PyGithub/PyGithub/']::after {
    font-family: "Font Awesome 5 Brands";
    content: "\2009\f09b"; // Thin space followed by GitHub
  }

  // @todo Add wikipedia icon to wikipedia links

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

  .strong-attention {
    background-color: $color_complementary_lightest;
    border: solid 3px $color_primary_base;
    padding: 3px
  }
}

#footer {
  @extend %head-foot;
}
</style>
