---
tags:
    - python
    - cpp
    - library
    - program
    - visual
---
[DrawTurksHead] is a [Python] library to draw [Turk’s head knots].
You can try the [interactive demo][DrawTurksHead-demo].

[Turk’s head knots]: https://en.wikipedia.org/wiki/Turk%27s_head_knot

<div class="text-center">
<img class="img-fluid" src="https://dyn.vincent-jacques.net/turkshead?leads=4&bights=5&line_width=20&inner_radius=25&width=270&height=270">
</div>

Its core functionality is written in [C++] and exposed as a Python library using [Boost.Python].
Two-way integration between C++ and Python code allows a Python callback computing the colors to be called by the C++ code.

Drawings are made using [Cairo].
The Cairo context is created in Python using [PyCairo] and passed to the C++ layer.
The C++ code uses [Cairomm] to do the actual drawing.

The [algorithm] is documented using [MathJax].

[algorithm]: https://jacquev6.github.io/DrawTurksHead/algorithm.html
