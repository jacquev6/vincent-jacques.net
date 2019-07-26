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
