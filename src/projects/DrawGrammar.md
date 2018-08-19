---
title: DrawGrammar
display_order: 300
tags:
    - ocaml
    - visual
    - web
    - program
---
[DrawGrammar](https://github.com/jacquev6/DrawGrammar/) is a tool to draw [railroad diagrams](https://en.wikipedia.org/wiki/Syntax_diagram) of an [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) grammar.
It is available as an [interactive demo](https://jacquev6.github.io/DrawGrammar/) and as a command-line tool.

<div class="text-center">
<img class="img-fluid" src="http://jacquev6.github.io/DrawGrammar/logo.png">
</div>

It is written in [OCaml](http://ocaml.org/).
The OCaml bytecode is translated to JavaScript using [js_of_ocaml](https://ocsigen.org/js_of_ocaml/).
My library [JsOfOCairo](http://github.com/jacquev6/JsOfOCairo/) is used to share the Cairo-based drawing code between HTML5 canvases and PNG files.
The parsers for [ISO-14977 EBNF](http://www.cl.cam.ac.uk/~mgk25/iso-14977.pdf) and the EBNF variant used to specify the [Python grammar](https://github.com/python/cpython/blob/master/Grammar/Grammar) are written using the [Menhir parser generator](http://gallium.inria.fr/~fpottier/menhir/).
