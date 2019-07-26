---
tags:
    - ocaml
    - visual
    - web
    - program
---
[DrawGrammar] is a tool to draw [railroad diagrams] of [EBNF] grammars.
It is available as an [interactive demo][DrawGrammar-demo] and as a command-line tool.

[railroad diagrams]: https://en.wikipedia.org/wiki/Syntax_diagram
[EBNF]: https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form

<div class="text-center">
<img class="img-fluid" src="https://jacquev6.github.io/DrawGrammar/logo.png">
</div>

It is written in [OCaml].
The OCaml bytecode is translated to JavaScript using [js_of_ocaml].
My library [JsOfOCairo] is used to share the Cairo-based drawing code between HTML5 canvases and PNG files.
The parsers for [ISO-14977 EBNF] (and the variant used for the [Python grammar]) are written using the [Menhir parser generator][Menhir].

[ISO-14977 EBNF]: https://www.cl.cam.ac.uk/~mgk25/iso-14977.pdf
[Python grammar]: https://github.com/python/cpython/blob/master/Grammar/Grammar
