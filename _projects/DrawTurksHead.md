---
title: DrawTurksHead
display_order: 100
---
[DrawTurksHead](http://jacquev6.github.io/DrawTurksHead/) is a [Python](https://www.python.org/) library to draw [Turk’s head knots](http://en.wikipedia.org/wiki/Turk%27s_head_knot).
An [interactive demo](http://jacquev6.github.io/DrawTurksHead/demo.html) is available.

<div class="text-center">
<img class="img-fluid" src="http://dyn.vincent-jacques.net/turkshead?leads=4&bights=7&line_width=20&inner_radius=25&width=270&height=270">
</div>

Its core functionality is written in [C++](https://isocpp.org/) and exposed as a Python library using [Boost.Python](http://www.boost.org/doc/libs/release/libs/python/).
A Python callback for computing the colors is called from the C++ code.
This required two-way integration of C++ and Python code.
Drawings are made using [Cairo](https://www.cairographics.org/).
The Cairo context is created in Python using [PyCairo](https://cairographics.org/pycairo/) and passed to the C++ layer.
The C++ code uses [Cairomm](https://www.cairographics.org/cairomm/) to do the actual drawing.

DrawTurksHead's [documentation](http://jacquev6.github.io/DrawTurksHead/) is built with [Sphinx](http://www.sphinx-doc.org/) and the [Alabaster](https://alabaster.readthedocs.io/) theme.
The [algorithm](http://jacquev6.github.io/DrawTurksHead/algorithm.html) is documented using [MathJax](https://www.mathjax.org/).
