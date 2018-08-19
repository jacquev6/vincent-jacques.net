---
tags:
    - python
    - library
---
[ActionTree](https://jacquev6.github.io/ActionTree/) is a [Python](https://www.python.org/) library to execute (long) actions in parallel, respecting dependencies between those actions.

<div class="text-center">
<img class="img-fluid" src="https://jacquev6.github.io/ActionTree/_static/logo.png">
</div>

To ensure that side-effects from an action don't affect others, it uses Python's [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) module to launch each action in its own subprocess.

It also uses [Graphviz](https://graphviz.org/) (through the [graphviz](https://pypi.python.org/pypi/graphviz) Python module)
and [matplotlib](https://matplotlib.org/) to produce visual reports of the execution.
