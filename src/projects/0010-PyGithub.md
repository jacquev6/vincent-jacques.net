---
tags:
    - python
    - library
---
[PyGithub] is a [Python] client library for the [GitHub REST API v3].
It's widely used (1900+ stars on GitHub) and is now maintained by the community.

[GitHub REST API v3]: https://developer.github.com/v3/

The main challenge is the size of the API: there are hundreds of endpoints, each with one to six HTTP verbs.
PyGithub provides a specialized interface for each combination; this makes client code safe.
Some other libraries let their user write the name of the endpoints: mistakes are only discovered when the HTTP request is sent.
In PyGithub, if the method exists, then the endpoint exists.
