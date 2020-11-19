(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{314:function(e){e.exports=JSON.parse('[{"slug":"python","title":"Python","description":"implemented in Python"},{"slug":"cpp","title":"C++","description":"implemented in C++"},{"slug":"ocaml","title":"OCaml","description":"implemented in OCaml"},{"slug":"javascript","title":"JavaScript","description":"implemented in JavaScript"},{"slug":"library","title":"Library","description":"providing a reusable library"},{"slug":"program","title":"Program","description":"providing a desktop program"},{"slug":"mobile","title":"Mobile","description":"providing a mobile application"},{"slug":"web","title":"Web","description":"targeting the web environment"},{"slug":"visual","title":"Visual","description":"drawing something"}]')},315:function(e,t,n){var content=n(318);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(90).default)("849ab0de",content,!0,{sourceMap:!1})},316:function(e,t,n){"use strict";n.r(t);var o={props:{lvl:{type:String,required:!0},id:{type:String,required:!0}},computed:{highlighted:function(){return this.$route.hash==="#"+this.id}}},r=(n(317),n(58)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return"1"===e.lvl?n("h1",{staticClass:"px-1",class:{highlighted:e.highlighted},attrs:{id:e.id}},[e._t("default"),n("no-ssr",[e._v(" "),n("a",{staticClass:"header-anchor",attrs:{href:"#"+e.id}},[e._v("¶")])])],2):"2"===e.lvl?n("h2",{staticClass:"px-1",class:{highlighted:e.highlighted},attrs:{id:e.id}},[e._t("default"),n("no-ssr",[e._v(" "),n("a",{staticClass:"header-anchor",attrs:{href:"#"+e.id}},[e._v("¶")])])],2):"3"===e.lvl?n("h3",{staticClass:"px-1",class:{highlighted:e.highlighted},attrs:{id:e.id}},[e._t("default"),n("no-ssr",[e._v(" "),n("a",{staticClass:"header-anchor",attrs:{href:"#"+e.id}},[e._v("¶")])])],2):e._e()}),[],!1,null,null,null);t.default=component.exports},317:function(e,t,n){"use strict";n(315)},318:function(e,t,n){(t=n(89)(!1)).push([e.i,"#content h1{background-color:#2e457b;color:#fff}#content h1.highlighted{color:#dfb562}#content h2{background-color:#495b83;color:#fff}#content h2.highlighted{color:#dfb562}#content h3{background-color:#bec9e4;color:#000}#content h3.highlighted{color:#2e457b}#content a.header-anchor{visibility:hidden;color:inherit;text-decoration:none}#content a.header-anchor:hover{text-decoration:underline}#content .highlighted a.header-anchor,#content :hover>a.header-anchor{visibility:visible}",""]),e.exports=t},319:function(e,t,n){"use strict";n.r(t);n(2),n(15),n(25),n(13),n(20),n(34),n(3);var o=n(314),r={};o.forEach((function(e){var t=e.slug,title=e.title;r[t]=title}));var l={props:{name:{type:String,required:!0},tags:{type:Array,required:!0},description:{type:String,required:!0}},data:function(){return{tagTitles:r}},computed:{slug:function(){return String(this.name).trim().normalize("NFD").replace(/[\u0300-\u036F]/g,"").toLowerCase().replace(/[.\s]+/g,"-").replace(/[^-a-z]/g,"")},classes:function(){return this.tags.map((function(e){return"tag-"+e}))}}},c=n(58),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-col",{staticClass:"project",class:e.classes,attrs:{md:"6",lg:"4"}},[n("vj-hdr",{attrs:{id:e.slug,lvl:"2"}},[e._v("\n    "+e._s(e.name)+"\n  ")]),e._v(" "),n("p",{staticClass:"text-left"},[e._l(e.tags,(function(t){return[n("span",{key:t,staticClass:"badge badge-tag"},[e._v(e._s(e.tagTitles[t]||"TAG NOT FOUND: "+t))]),e._v(e._s(" ")+"\n    ")]}))],2),e._v(" "),n("vj-markdown",{attrs:{md:e.description}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VjHdr:n(316).default,VjMarkdown:n(210).default})},320:function(e,t,n){"use strict";n.r(t);n(88),n(2),n(15),n(44),n(3);var o=n(314),r={content:'[ActionTree] is a [Python] library to execute (long) actions in parallel, respecting dependencies between those actions.\n\n<div class="text-center">\n<img class="img-fluid" src="https://jacquev6.github.io/ActionTree/_static/logo.png">\n</div>\n\nTo ensure that side-effects from an action don\'t affect others, it uses Python\'s [multiprocessing] module to launch each action in its own subprocess.\n\n[multiprocessing]: https://docs.python.org/3/library/multiprocessing.html\n\nIt also uses [Graphviz][Graphviz] (through the [graphviz][python-gv] Python module)\nand [matplotlib] to produce visual reports of the execution.\n\n[python-gv]: https://pypi.python.org/pypi/graphviz\n',data:{tags:["python","library"]},isEmpty:!1,excerpt:""},l={content:'[Collide] is an [event-based simulation] of [elastic collisions] between two-dimensional balls.\nAn [interactive demo][Collide-demo] is available.\n\n[event-based simulation]: https://en.wikipedia.org/wiki/Discrete_event_simulation\n[elastic collisions]: https://en.wikipedia.org/wiki/Elastic_collision\n\n<div class="embed-responsive embed-responsive-4by3">\n<iframe class="embed-responsive-item" src="//www.youtube.com/embed/SrFui5G5VQw" allowfullscreen></iframe>\n</div>\n\nIt\'s written in [OCaml].\nThe same core code is used to produce several applications:\n\n- native [Gtk] and command-line applications\n- a [browser application][Collide-demo]\n- a [mobile application]\n\n[mobile application]: https://play.google.com/store/apps/details?id=net.jacquev6.Collide\n\nThe [cairo]-based drawing code is used on HTML5 canvases, PNG files and Gtk Cairo contexts thanks to my library [JsOfOCairo].\nThe OCaml bytecode is translated to JavaScript using [js_of_ocaml] and\nthe resulting browser-based application is packaged using [Cordova] to produce the mobile application.\n\nA [prototype][MarblesCollide] was written in [C++].\n',data:{tags:["ocaml","visual","program","mobile"]},isEmpty:!1,excerpt:""},c={content:'[DrawGrammar] is a tool to draw [railroad diagrams] of [EBNF] grammars.\nIt is available as an [interactive demo][DrawGrammar-demo] and as a command-line tool.\n\n[railroad diagrams]: https://en.wikipedia.org/wiki/Syntax_diagram\n[EBNF]: https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form\n\n<div class="text-center">\n<img class="img-fluid" src="https://jacquev6.github.io/DrawGrammar/logo.png">\n</div>\n\nIt is written in [OCaml].\nThe OCaml bytecode is translated to JavaScript using [js_of_ocaml].\nMy library [JsOfOCairo] is used to share the Cairo-based drawing code between HTML5 canvases and PNG files.\nThe parsers for [ISO-14977 EBNF] (and the variant used for the [Python grammar]) are written using the [Menhir parser generator][Menhir].\n\n[ISO-14977 EBNF]: https://www.cl.cam.ac.uk/~mgk25/iso-14977.pdf\n[Python grammar]: https://github.com/python/cpython/blob/master/Grammar/Grammar\n',data:{tags:["ocaml","visual","web","program"]},isEmpty:!1,excerpt:""},d={content:'[DrawTurksHead] is a [Python] library to draw [Turk’s head knots].\r\nYou can try the [interactive demo][DrawTurksHead-demo].\r\n\r\n[Turk’s head knots]: https://en.wikipedia.org/wiki/Turk%27s_head_knot\r\n\r\n<div class="text-center">\r\n<img class="img-fluid" src="https://dyn.vincent-jacques.net/turkshead?leads=4&bights=5&line_width=20&inner_radius=25&width=270&height=270">\r\n</div>\r\n\r\nIts core functionality is written in [C++] and exposed as a Python library using [Boost.Python].\r\nTwo-way integration between C++ and Python code allows a Python callback computing the colors to be called by the C++ code.\r\n\r\nDrawings are made using [Cairo].\r\nThe Cairo context is created in Python using [PyCairo] and passed to the C++ layer.\r\nThe C++ code uses [Cairomm] to do the actual drawing.\r\n\r\nThe [algorithm] is documented using [MathJax].\r\n\r\n[algorithm]: https://jacquev6.github.io/DrawTurksHead/algorithm.html\r\n',data:{tags:["python","cpp","library","program","visual"]},isEmpty:!1,excerpt:""},h={content:"[hashids-ocaml] is an [OCaml] implementation of [hashids].\n\nHashids, by [Ivan Akimov], is a [successful] small library to obfuscate integers,\nmainly used to hide growing sequences when generating public URLs.\nIt's been ported to a wide variety of programming languages by the community.\n\n[Ivan Akimov]: https://github.com/ivanakimov\n[successful]: http://ivanakimov.com/1m-downloads-of-an-open-source-project/\n",data:{tags:["ocaml","library"]},isEmpty:!1,excerpt:""},m={content:"My [infrastructure] repository holds my... infrastructure, as code.\n\nIt uses [Terraform] to maintain my DNS records at [Gandi],\nand point them at a [Kubernetes]+[Helm] cluster on [Google Cloud Platform].\n(I left [Amazon Web Services] when I adopted Kubernetes because of the GKE pricing).\n\nPrivate credential files are kept securely in the public git repository using [git-crypt].\n\nI use a single IP address for all my (sub-)domains and use [HAProxy] to dispatch requests accordingly.\n",data:{tags:["web"]},isEmpty:!1,excerpt:""},y={content:'[IpMap] is a browsable map of the IPv4 address space inspired by [xkcd 195, Map of the Internet][xkcd-195].\nYou can try the [interactive demo][IpMap-demo].\n\n[xkcd-195]: https://xkcd.com/195/\n\n<div class="text-center">\n<img class="img-fluid" src="https://jacquev6.github.io/IpMap/logo.png">\n</div>\n\nIt\'s implemented in HTML5 and [JavaScript], purely on the client side, using [jQuery] and [jquery-mousewheel].\n\n[jquery-mousewheel]: https://github.com/jquery/jquery-mousewheel\n\nI\'ve recently improved my knowledge of the JavaScript language and ecosystem.\nI think this project would deserve some work to improve its code quality and maintainability.\nI keep it here because it\'s still working software.\n',data:{tags:["javascript","visual","web"]},isEmpty:!1,excerpt:""},v={content:"[JsOfOCairo] is a [OCaml] library to reuse Cairo-based drawing code in web browsers.\n\nIt's an adapter, implementing (a reasonable subset of) the interface of [ocaml-cairo]\ntargeting HTML5 canvas elements as exposed to OCaml by [js_of_ocaml].\n",data:{tags:["ocaml","web","library"]},isEmpty:!1,excerpt:""},f={content:"[Polyglot] is a collection of examples of how to interface pieces of code written in different languages,\nand/or execute code in a runtime environment that's not traditional for its language.\nCalling a C++ library from a Python program, or executing OCaml code in a web browser,\nare two examples amongst what *Polyglot* demonstrates.\n\nIt uses [many different technologies] to interface a few languages like C, [C++], [Python], [OCaml] and [JavaScript].\n\n[many different technologies]: https://github.com/jacquev6/Polyglot/blob/master/README.md\n",data:{tags:["cpp","python","javascript","ocaml"]},isEmpty:!1,excerpt:""},w={content:"[PyGithub] is a [Python] client library for the [GitHub REST API v3].\nIt's widely used (2400+ stars on GitHub) and is now maintained by the community.\n\n[GitHub REST API v3]: https://developer.github.com/v3/\n\nThe main challenge is the size of the API: there are hundreds of endpoints, each with one to six HTTP verbs.\nPyGithub provides a specialized interface for each combination; this makes client code safe.\nSome other libraries let their user write the name of the endpoints: mistakes are only discovered when the HTTP request is sent.\nIn PyGithub, if the method exists, then the endpoint exists.\n",data:{tags:["python","library"]},isEmpty:!1,excerpt:""},k={content:"\n[QuadProgMm] is a [C++] library providing a domain specific language to express [Quadratic programming] problems as literal C++ equations on named variables.\n\n[Quadratic programming]: http://en.wikipedia.org/wiki/Quadratic_programming\n\nIt leverages the C++ type system to create a small domains specific language, and [QuadProg++] to actually solve QP problems.\n",data:{tags:["cpp","library"]},isEmpty:!1,excerpt:""},C={content:"[variadic] is a [Python][Python] [function decorator] to write variadic functions accepting a mix of arguments and iterables of those arguments.\n\n[function decorator]: https://docs.python.org/2/glossary.html#term-decorator\n\nIts main added value is that decorated functions keep their [signature], so tools doing introspection (Sphinx doc, IDEs, etc.) will work like there is no decorator.\n\n[signature]: https://docs.python.org/3/library/inspect.html#inspect.signature\n\nThe wrapper function is generated using Python's [ast] module.\nThis avoids using `eval` on generated code.\n\n[ast]: https://docs.python.org/3/library/ast.html\n",data:{tags:["python","library"]},isEmpty:!1,excerpt:""},_={content:"[vincent-jacques.net] is my personal website, the one you're looking at.\n\nIt's generated as a static website using [Nuxt.js] (thus [Vue.js], [Vue Router], [webpack], etc.)\nand is hosted on [GitHub Pages].\n\nOn the client side, it uses [Bootstrap] (throught [BootstrapVue]), [Sass] and a little bit of [Font Awesome].\n",data:{tags:["web","javascript"]},isEmpty:!1,excerpt:""},x={layout:"default",data:function(){var e={};return o.forEach((function(t){var n=t.slug;e[n]=!0})),{tags:o,tagsVisibility:e}},computed:{projects:function(){var e=this,t={ActionTree:r,Collide:l,DrawGrammar:c,DrawTurksHead:d,"hashids-ocaml":h,infrastructure:m,IpMap:y,JsOfOCairo:v,Polyglot:f,PyGithub:w,QuadProgMm:k,variadic:C,"vincent-jacques.net":_};return["PyGithub","DrawTurksHead","DrawGrammar","Collide","vincent-jacques.net","infrastructure","IpMap","ActionTree","variadic","JsOfOCairo","hashids-ocaml","Polyglot","QuadProgMm"].map((function(n){var o=t[n],r=o.data.tags,l=o.content,c=r.some((function(t){return e.tagsVisibility[t]}));return{name:n,tags:r,description:l,visible:c}}))}},methods:{toggleFilter:function(e){var t=this;this.tags.every((function(e){var n=e.slug;return t.tagsVisibility[n]}))?(this.tags.forEach((function(e){var n=e.slug;t.tagsVisibility[n]=!1})),this.tagsVisibility[e]=!0):(this.tagsVisibility[e]=!this.tagsVisibility[e],this.tags.some((function(e){var n=e.slug;return t.tagsVisibility[n]}))||this.tags.forEach((function(e){var n=e.slug;t.tagsVisibility[n]=!0})))}}},P=n(58),component=Object(P.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",[n("b-col",[n("vj-hdr",{attrs:{id:"introduction",lvl:"1"}},[e._v("\n        Introduction\n      ")])],1)],1),e._v(" "),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("vj-markdown",[e._v("\n        I'm Vincent Jacques, alias [@jacquev6] on the web.\n        I'm a 36 years old, French, passionate software engineer.\n        I started programming when I was 12 on a [Casio calculator],\n        and I haven't stopped learning.\n\n        [@jacquev6]: https://www.google.com/search?q=jacquev6\n        [Casio calculator]: http://www.rskey.org/fx790p\n\n        I studied general engineering at [Ecole Centrale Paris][ECP]\n        (2006) and I specialized on software as a very enthusiastic career choice.\n      ")])],1),e._v(" "),n("b-col",{attrs:{md:"6"}},[n("vj-markdown",[e._v("\n        After twelve years of professional software engineering, I value maintainable and evolutive source code\n        and the use of tools and automation to create working, reliable software.\n      ")])],1)],1),e._v(" "),n("b-row",[n("b-col",[n("vj-hdr",{attrs:{id:"portfolio",lvl:"1"}},[e._v("\n        Portfolio\n      ")])],1)],1),e._v(" "),n("b-row",[n("b-col",[n("vj-markdown",[e._v("\n        Most of my projects are hosted on [GitHub][my-github] and have continuous build on [Travis CI][my-travis].\n\n        My projects are documented using [Sphinx] and the [Alabaster] theme.\n        Reference documentation is generated from [Python] source code by [autodoc],\n        form [C++] source code by [Doxygen] and [Breathe],\n        and from [OCaml] source code by a preliminary version of my [Sphinx extension for OCaml][sphinxcontrib-ocaml]\n\n        My [Python] libraries are distributed on the [Python package index][my-pypi], and my [OCaml] ones are published on [OPAM][my-opam].\n      ")])],1)],1),e._v(" "),n("b-row",[n("b-col",[n("p",[e._v("\n        Projects filter: "),e._l(e.tags,(function(t){return n("span",{key:t.slug},[n("b-btn",{staticClass:"my-1",attrs:{size:"sm",variant:"tag",pressed:e.tagsVisibility[t.slug]},on:{click:function(n){return e.toggleFilter(t.slug)}}},[e._v("\n            "+e._s(t.title)+"\n          ")]),e._v(e._s(" ")+"\n        ")],1)}))],2)])],1),e._v(" "),n("b-row",[e._l(e.projects,(function(t){return[t.visible?[n("vj-project",{key:t.name,attrs:{name:t.name,tags:t.tags,description:t.description}})]:e._e()]}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VjHdr:n(316).default,VjMarkdown:n(210).default,VjProject:n(319).default})}}]);