---
tags:
    - python
    - library
---
[variadic](https://jacquev6.github.io/variadic/) is a [Python](https://www.python.org/) [function decorator](https://docs.python.org/2/glossary.html#term-decorator) to write variadic functions accepting a mix of arguments and iterables of those arguments.

Its main added value is that decorated functions keep their [signature](https://docs.python.org/3/library/inspect.html#inspect.signature), so tools doing introspection (Sphinx doc, IDEs, etc.) will work like there is no decorator.

The wrapper function is generated using Python's [ast](https://docs.python.org/3/library/ast.html) module.
This avoids using `eval` on generated code.
