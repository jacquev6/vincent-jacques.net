---
tags:
    - python
    - library
---
[variadic] is a [Python][Python] [function decorator] to write variadic functions accepting a mix of arguments and iterables of those arguments.

[function decorator]: https://docs.python.org/2/glossary.html#term-decorator

Its main added value is that decorated functions keep their [signature], so tools doing introspection (Sphinx doc, IDEs, etc.) will work like there is no decorator.

[signature]: https://docs.python.org/3/library/inspect.html#inspect.signature

The wrapper function is generated using Python's [ast] module.
This avoids using `eval` on generated code.

[ast]: https://docs.python.org/3/library/ast.html
