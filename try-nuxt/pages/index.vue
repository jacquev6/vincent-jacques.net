<template>
  <b-container lang="en">

     <div id="header" class="row"><div class="col">
        <div class="row"><div class="col">
<p id="vjnet"><a href="/">vincent-jacques.net</a></p>
        </div></div>
        <div class="row">
          <div class="col-md-6">
<p id="citation">« S’il n’y a pas de solution,<br>c’est qu’il n’y a pas de problème. »</p>
<p id="citation-origin">Devise <a href="https://en.wikipedia.org/wiki/Les_Shadoks">Shadock</a></p>
          </div>
          <div class="header-links col-md-2">
<p><a href="mailto:vincent@vincent-jacques.net">e-mail</a><br>
<a href="https://github.com/jacquev6/">GitHub</a>, <a href="https://travis-ci.org/jacquev6/">Travis CI</a><br>
<a href="https://pypi.org/user/jacquev6/">PyPi</a>, <a href="https://github.com/ocaml/opam-repository/search?q=author%3Ajacquev6&amp;type=Issues">OPAM</a></p>
          </div>
          <div class="header-links col-md-4">
<p><a href="https://www.linkedin.com/in/jacquev6/">LinkedIn</a><br>
<a href="https://stackoverflow.com/users/905845/jacquev6/">StackOverflow</a></p>
          </div>
        </div>
      </div></div>

      <div id="content" class="row text-justify"><div class="col">
        <div class="row"><div class="col">
          <h1 class="px-1" id="introduction">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">¶</a></h1>

        </div></div>

        <div class="row">
          <div class="col-md">
<p>I’m Vincent Jacques, alias <a href="https://www.google.com/search?q=jacquev6">@jacquev6</a> on the web.
I’m a 35 years old, French, passionate software engineer.
I started programming when I was 12 on a <a href="http://www.rskey.org/fx790p">Casio calculator</a>,
and haven’t stopped learning since.</p>
<p>I studied general engineering at <a href="https://en.wikipedia.org/wiki/%C3%89cole_Centrale_Paris">Ecole Centrale Paris</a>
(2006) and I specialized on software as a very enthusiastic career choice.</p>
          </div><div class="col-md">
<p>After eleven years of professional software engineering, I value maintainable and evolutive source code
and the use of tools and automation to create working, reliable software.</p>
<p>As of October 2018, I’m working as a Software Engineer at <a href="https://www.datadoghq.com/">Datadog</a>.</p>
          </div>
        </div>

        <div class="row"><div class="col">
<h1 class="px-1" id="portfolio">Portfolio <a class="header-anchor" href="#portfolio" aria-hidden="true">¶</a></h1>
<p>Most of my projects are hosted on <a href="https://github.com/jacquev6/">GitHub</a>
and have continuous build on <a href="https://travis-ci.org/jacquev6/">Travis CI</a>.</p>
<p>My projects are documented using <a href="http://www.sphinx-doc.org/">Sphinx</a> and the <a href="https://alabaster.readthedocs.io/">Alabaster</a> theme.
Reference documentation is generated from <a href="https://www.python.org/">Python</a> source code by <a href="www.sphinx-doc.org/en/master/usage/extensions/autodoc.html">autodoc</a>,
form <a href="https://isocpp.org/">C++</a> source code by <a href="http://www.doxygen.nl/">Doxygen</a> and <a href="https://breathe.readthedocs.io/">Breathe</a>,
and from <a href="https://ocaml.org/">OCaml</a> source code by a preliminary version of my <a href="https://github.com/jacquev6/sphinxcontrib-ocaml/">Sphinx extension for OCaml</a></p>
<p>My <a href="https://www.python.org/">Python</a> projects are distributed on the <a href="https://pypi.org/user/jacquev6/">Python package index</a>, and my <a href="https://ocaml.org/">OCaml</a> projects are published on <a href="https://github.com/ocaml/opam-repository/search?q=author%3Ajacquev6&amp;type=Issues">OPAM</a>.</p>
<p>Projects filter: <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="python" data-toggle="tooltip" title="Display projects implemented in Python">Python</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="cpp" data-toggle="tooltip" title="Display projects implemented in C++">C++</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="ocaml" data-toggle="tooltip" title="Display projects implemented in OCaml">OCaml</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="javascript" data-toggle="tooltip" title="Display projects implemented in JavaScript">JavaScript</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="library" data-toggle="tooltip" title="Display projects providing a reusable library">Library</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="program" data-toggle="tooltip" title="Display projects providing a desktop program">Program</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="mobile" data-toggle="tooltip" title="Display projects providing a mobile application">Mobile</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="web" data-toggle="tooltip" title="Display projects targeting the web environment">Web</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="demo" data-toggle="tooltip" title="Display projects are just a technology demonstration">Demo</button> <button class="tag-filter btn btn-sm btn-tag my-1 active" data-tag="visual" data-toggle="tooltip" title="Display projects drawing something">Visualization</button></p>
        </div></div>

        <div class="row">
          <div class="col-md-6 col-lg-4 project tag-python tag-library">
<h2 class="px-1" id="pygithub">PyGithub <a class="header-anchor" href="#pygithub" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">Python</span> <span class="badge badge-tag">Library</span></p>
            <div><p><a href="https://github.com/PyGithub/PyGithub/">PyGithub</a> is a <a href="https://www.python.org/">Python</a> client library for the <a href="https://developer.github.com/v3/">GitHub REST API v3</a>.
It’s widely used (2000+ stars on GitHub) and is now maintained by the community.</p>
<p>The main challenge is the size of the API: there are hundreds of endpoints, each with one to six HTTP verbs.
PyGithub provides a specialized interface for each combination; this makes client code safe.
Some other libraries let their user write the name of the endpoints: mistakes are only discovered when the HTTP request is sent.
In PyGithub, if the method exists, then the endpoint exists.</p>
</div>
          </div>
          <div class="col-md-6 col-lg-4 project tag-python tag-cpp tag-library tag-program tag-visual">
<h2 class="px-1" id="drawturkshead">DrawTurksHead <a class="header-anchor" href="#drawturkshead" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">Python</span> <span class="badge badge-tag">C++</span> <span class="badge badge-tag">Library</span> <span class="badge badge-tag">Program</span> <span class="badge badge-tag">Visualization</span></p>
            <div><p><a href="https://github.com/jacquev6/DrawTurksHead/">DrawTurksHead</a> is a <a href="https://www.python.org/">Python</a> library to draw <a href="https://en.wikipedia.org/wiki/Turk%27s_head_knot">Turk’s head knots</a>.
An <a href="https://jacquev6.github.io/DrawTurksHead/demo.html">interactive demo</a> is available.</p>
<div class="text-center">
<img class="img-fluid" src="https://dyn.vincent-jacques.net/turkshead?leads=4&bights=5&line_width=20&inner_radius=25&width=270&height=270">
</div>
<p>Its core functionality is written in <a href="https://isocpp.org/">C++</a> and exposed as a Python library using <a href="https://www.boost.org/doc/libs/release/libs/python/">Boost.Python</a>.
A Python callback for computing the colors is called from the C++ code.
This required two-way integration of C++ and Python code.
Drawings are made using <a href="https://www.cairographics.org/">Cairo</a>.
The Cairo context is created in Python using <a href="https://cairographics.org/pycairo/">PyCairo</a> and passed to the C++ layer.
The C++ code uses <a href="https://www.cairographics.org/cairomm/">Cairomm</a> to do the actual drawing.</p>
<p>The <a href="https://jacquev6.github.io/DrawTurksHead/algorithm.html">algorithm</a> is documented using <a href="https://www.mathjax.org/">MathJax</a>.</p>
</div>
          </div>
          <div class="col-md-6 col-lg-4 project tag-ocaml tag-visual tag-web tag-program">
<h2 class="px-1" id="drawgrammar">DrawGrammar <a class="header-anchor" href="#drawgrammar" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">OCaml</span> <span class="badge badge-tag">Visualization</span> <span class="badge badge-tag">Web</span> <span class="badge badge-tag">Program</span></p>
            <div><p><a href="https://github.com/jacquev6/DrawGrammar/">DrawGrammar</a> is a tool to draw <a href="https://en.wikipedia.org/wiki/Syntax_diagram">railroad diagrams</a> of an <a href="https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form">EBNF</a> grammar.
It is available as an <a href="https://jacquev6.github.io/DrawGrammar/">interactive demo</a> and as a command-line tool.</p>
<div class="text-center">
<img class="img-fluid" src="https://jacquev6.github.io/DrawGrammar/logo.png">
</div>
<p>It is written in <a href="https://ocaml.org/">OCaml</a>.
The OCaml bytecode is translated to JavaScript using <a href="https://ocsigen.org/js_of_ocaml/">js_of_ocaml</a>.
My library <a href="https://github.com/jacquev6/JsOfOCairo/">JsOfOCairo</a> is used to share the Cairo-based drawing code between HTML5 canvases and PNG files.
The parsers for <a href="https://www.cl.cam.ac.uk/~mgk25/iso-14977.pdf">ISO-14977 EBNF</a> and the EBNF variant used to specify the <a href="https://github.com/python/cpython/blob/master/Grammar/Grammar">Python grammar</a> are written using the <a href="http://gallium.inria.fr/~fpottier/menhir/">Menhir parser generator</a>.</p>
</div>
          </div>
          <div class="col-md-6 col-lg-4 project tag-ocaml tag-visual tag-program tag-mobile">
<h2 class="px-1" id="collide">Collide <a class="header-anchor" href="#collide" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">OCaml</span> <span class="badge badge-tag">Visualization</span> <span class="badge badge-tag">Program</span> <span class="badge badge-tag">Mobile</span></p>
            <div><p><a href="https://github.com/jacquev6/Collide/">Collide</a> is an <a href="https://en.wikipedia.org/wiki/Discrete_event_simulation">event-based simulation</a> of <a href="https://en.wikipedia.org/wiki/Elastic_collision">elastic collisions</a> between two-dimensional balls.
An <a href="https://jacquev6.github.io/Collide/">interactive demo</a> is available.</p>
<div class="embed-responsive embed-responsive-4by3">
<iframe class="embed-responsive-item" src="//www.youtube.com/embed/SrFui5G5VQw" allowfullscreen></iframe>
</div>
<p>It’s written in <a href="https://ocaml.org/">OCaml</a>.
The same core code is used to produce several applications:</p>
<ul>
<li>native <a href="https://www.gtk.org/">Gtk</a> and command-line applications</li>
<li>a <a href="https://jacquev6.github.io/Collide/">browser application</a></li>
<li>a <a href="https://play.google.com/store/apps/details?id=net.jacquev6.Collide">mobile application</a></li>
</ul>
<p>The <a href="https://www.cairographics.org/">cairo</a>-based drawing code is used on HTML5 canvases, PNG files and Gtk Cairo contexts thanks to my library <a href="https://github.com/jacquev6/JsOfOCairo/">JsOfOCairo</a>.
The OCaml bytecode is translated to JavaScript using <a href="https://ocsigen.org/js_of_ocaml/">js_of_ocaml</a> and
the resulting browser-based application is packaged using <a href="https://cordova.apache.org/">Cordova</a> to produce the mobile application.</p>
<p>A <a href="https://github.com/jacquev6/MarblesCollide">prototype</a> was written in <a href="https://isocpp.org/">C++</a>.</p>
</div>
          </div>
          <div class="col-md-6 col-lg-4 project tag-javascript tag-visual tag-web">
<h2 class="px-1" id="ipmap">IpMap <a class="header-anchor" href="#ipmap" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">JavaScript</span> <span class="badge badge-tag">Visualization</span> <span class="badge badge-tag">Web</span></p>
            <div><p><a href="https://github.com/jacquev6/IpMap/">IpMap</a> is a browsable map of the IPv4 address space inspired by <a href="https://xkcd.com/195/">xkcd 195, Map of the Internet</a>.
An <a href="https://jacquev6.github.io/IpMap/">interactive demo</a> is available.</p>
<div class="text-center">
<img class="img-fluid" src="https://jacquev6.github.io/IpMap/logo.png">
</div>
<p>It’s implemented in HTML5 and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>, purely on the client side, using <a href="https://jquery.com/">jQuery</a> and <a href="https://github.com/jquery/jquery-mousewheel">jquery-mousewheel</a>.</p>
<p>I’ve recently improved my knowledge of the JavaScript language and ecosystem.
I think this project would deserve some work to improve its code quality and maintainability.
But I keep it here because it’s still working software.</p>
</div>
          </div>
          <div class="col-md-6 col-lg-4 project tag-python tag-library">
<h2 class="px-1" id="actiontree">ActionTree <a class="header-anchor" href="#actiontree" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">Python</span> <span class="badge badge-tag">Library</span></p>
            <div><p><a href="https://github.com/jacquev6/ActionTree/">ActionTree</a> is a <a href="https://www.python.org/">Python</a> library to execute (long) actions in parallel, respecting dependencies between those actions.</p>
<div class="text-center">
<img class="img-fluid" src="https://jacquev6.github.io/ActionTree/_static/logo.png">
</div>
<p>To ensure that side-effects from an action don’t affect others, it uses Python’s <a href="https://docs.python.org/3/library/multiprocessing.html">multiprocessing</a> module to launch each action in its own subprocess.</p>
<p>It also uses <a href="https://graphviz.org/">Graphviz</a> (through the <a href="https://pypi.python.org/pypi/graphviz">graphviz</a> Python module)
and <a href="https://matplotlib.org/">matplotlib</a> to produce visual reports of the execution.</p>
</div>
          </div>
          <div class="col-md-6 col-lg-4 project tag-python tag-library">
<h2 class="px-1" id="variadic">variadic <a class="header-anchor" href="#variadic" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">Python</span> <span class="badge badge-tag">Library</span></p>
            <div><p><a href="https://github.com/jacquev6/variadic">variadic</a> is a <a href="https://www.python.org/">Python</a> <a href="https://docs.python.org/2/glossary.html#term-decorator">function decorator</a> to write variadic functions accepting a mix of arguments and iterables of those arguments.</p>
<p>Its main added value is that decorated functions keep their <a href="https://docs.python.org/3/library/inspect.html#inspect.signature">signature</a>, so tools doing introspection (Sphinx doc, IDEs, etc.) will work like there is no decorator.</p>
<p>The wrapper function is generated using Python’s <a href="https://docs.python.org/3/library/ast.html">ast</a> module.
This avoids using <code>eval</code> on generated code.</p>
</div>
          </div>
          <div class="col-md-6 col-lg-4 project tag-ocaml tag-web tag-library">
<h2 class="px-1" id="jsofocairo">JsOfOCairo <a class="header-anchor" href="#jsofocairo" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">OCaml</span> <span class="badge badge-tag">Web</span> <span class="badge badge-tag">Library</span></p>
            <div><p><a href="https://github.com/jacquev6/JsOfOCairo/">JsOfOCairo</a> is a <a href="https://ocaml.org/">OCaml</a> library to reuse Cairo-based drawing code in web browsers.</p>
<p>It’s an adapter, implementing (a reasonable subset of) the interface of <a href="https://github.com/Chris00/ocaml-cairo/">ocaml-cairo</a>
targeting HTML5 canvas elements as exposed to OCaml by <a href="https://ocsigen.org/js_of_ocaml/">js_of_ocaml</a>.</p>
</div>
          </div>
          <div class="col-md-6 col-lg-4 project tag-ocaml tag-library">
<h2 class="px-1" id="hashids-ocaml">hashids-ocaml <a class="header-anchor" href="#hashids-ocaml" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">OCaml</span> <span class="badge badge-tag">Library</span></p>
            <div><p><a href="https://github.com/jacquev6/hashids-ocaml/">hashids-ocaml</a> is an <a href="https://ocaml.org/">OCaml</a> implementation of <a href="https://hashids.org/ocaml/">hashids</a>.</p>
<p>Hashids, by <a href="https://github.com/ivanakimov">Ivan Akimov</a>, is a <a href="http://ivanakimov.com/1m-downloads-of-an-open-source-project/">successful</a> small library to obfuscate integers,
mainly used to hide growing sequences when generating public URLs.
It’s been ported to a wide variety of programming languages by the community.</p>
</div>
          </div>
          <div class="col-md-6 col-lg-4 project tag-demo tag-cpp tag-python tag-javascript tag-ocaml">
<h2 class="px-1" id="polyglot">Polyglot <a class="header-anchor" href="#polyglot" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">Demo</span> <span class="badge badge-tag">C++</span> <span class="badge badge-tag">Python</span> <span class="badge badge-tag">JavaScript</span> <span class="badge badge-tag">OCaml</span></p>
            <div><p><a href="https://github.com/jacquev6/Polyglot/">Polyglot</a> is a collection of examples of how to interface pieces of code written in different languages,
and/or execute code in a runtime environment that’s not traditional for its language.
Calling a C++ library from a Python program, or executing OCaml code in a web browser,
are two examples amongst what <em>Polyglot</em> demonstrates.</p>
<p>It uses <a href="https://github.com/jacquev6/Polyglot/blob/master/README.md">many different technologies</a> to interface a few languages like C, <a href="https://isocpp.org/">C++</a>, <a href="https://www.python.org/">Python</a>, <a href="https://ocaml.org/">OCaml</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>.</p>
</div>
          </div>
          <div class="col-md-6 col-lg-4 project tag-cpp tag-library">
<h2 class="px-1" id="quadprogmm">QuadProgMm <a class="header-anchor" href="#quadprogmm" aria-hidden="true">¶</a></h2>
<p class="text-left"><span class="badge badge-tag">C++</span> <span class="badge badge-tag">Library</span></p>
            <div><p><a href="https://github.com/jacquev6/QuadProgMm/">QuadProgMm</a> is a <a href="https://isocpp.org/">C++</a> library providing a domain specific language to express <a href="http://en.wikipedia.org/wiki/Quadratic_programming">Quadratic programming</a> problems as literal C++ equations on named variables.</p>
<p>It leverages the C++ type system to create a small domains specific language, and <a href="https://github.com/liuq/QuadProgpp">QuadProg++</a> to actually solve QP problems.</p>
</div>
          </div>
        </div>
      </div></div>

      <div id="footer" class="row"><div class="col">
<p class="text-center">© <a href="https://github.com/jacquev6/vincent-jacques.net/">Vincent Jacques</a> 2010-2019</p>
      </div></div>

  </b-container>
</template>

<style lang="scss">
$color_primary_base: #4B6195;
$color_primary_darkest: #2E457B;
$color_primary_darker: #495B83;
$color_primary_lighter: #9CB2E4;
$color_primary_lightest: #BEC9E4;
$color_complementary_base: #DFB562;
$color_complementary_darkest: #B88F3D;
$color_complementary_darker: #C3A364;
$color_complementary_lighter: lighten($color_complementary_base, 10%);
$color_complementary_lightest: lighten($color_complementary_base, 25%);

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

  h5 {
    background-color: $color_primary_lightest;
    color: black;
  }
  h5.highlighted {
    color: $color_primary_darkest;
  }

  a {
    color: $color_primary_darkest;
    text-decoration: underline $color_primary_lightest;
  }

  a:hover {
    text-decoration-color: $color_primary_darkest;
  }

  a.header-anchor {
    visibility: hidden;
    color: inherit;
    text-decoration: none;
  }

  a.header-anchor:hover {
    text-decoration: underline;
  }

  :hover > a.header-anchor, .highlighted a.header-anchor {
    visibility: visible;
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
