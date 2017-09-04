---
title: PyGithub
display_order: 100
tags:
    - python
    - library
---
[PyGithub](https://github.com/PyGithub/PyGithub) is a [Python](https://www.python.org/) client library for the [GitHub REST API v3](https://developer.github.com/v3/).
It's widely used (1300+ stars on GitHub) and now maintained by the community.

The main challenge is the size of the API: there are hundreds of endpoints with one to six HTTP verbs each.
PyGithub provides a specialized interface for each combination; this makes client code safe.
Some other libraries let their user write the name of the endpoints: mistakes are only discovered when the HTTP request is sent.
In PyGithub, if the method exists, then the endpoint exists.
