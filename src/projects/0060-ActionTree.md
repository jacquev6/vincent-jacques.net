---
tags:
    - python
    - library
---
[ActionTree] is a [Python] library to execute (long) actions in parallel, respecting dependencies between those actions.

<div class="text-center">
<img class="img-fluid" src="https://jacquev6.github.io/ActionTree/_static/logo.png">
</div>

To ensure that side-effects from an action don't affect others, it uses Python's [multiprocessing] module to launch each action in its own subprocess.

[multiprocessing]: https://docs.python.org/3/library/multiprocessing.html

It also uses [Graphviz][Graphviz] (through the [graphviz][python-gv] Python module)
and [matplotlib] to produce visual reports of the execution.

[python-gv]: https://pypi.python.org/pypi/graphviz
