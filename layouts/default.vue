<template>
  <b-container lang="en">
    <b-row id="header">
      <b-col>
        <b-row>
          <b-col>
            <p id="vjnet">
              <NuxtLink to="/">
                vincent-jacques.net
              </NuxtLink>
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lang="fr">
            <p id="citation">
              &laquo;&nbsp;S'il n'y a pas de solution, c'est qu'il n'y a pas de problème.&nbsp;&raquo;
            </p>

            <p id="citation-origin">
              Devise <a href="https://en.wikipedia.org/wiki/Les_Shadoks">Shadock</a>
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
          &copy; <a href="https://github.com/jacquev6/vincent-jacques.net/">Vincent Jacques</a> 2010-2020
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss">
@import "../assets/colors";

// Copy-pasted from Bootstrap 4.5.3's node_modules/bootstrap/scss/bootstrap.scss file
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
