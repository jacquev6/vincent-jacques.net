---
title: Summary
projects:
  - name: Pynamixel
    language: Python
  - name: LowVoltage
    language: Python
  - name: variadic
    language: Python
  - name: ActionTree
    language: Python
  - name: MockMockMock
    language: Python
  - name: DrawTurksHead
    language: Python
  - name: MiniParse
    language: Python
  - name: InteractiveCommandLine
    language: Python
  - name: RecursiveDocument
    language: Python
  - name: AnotherPyGraphvizAgain
    language: Python
  - name: IpMap
    language: Javascript
  - name: QuadProgMm
    language: C++
  - name: MarblesCollide
    language: C++
  - name: JellyNoSolver
    language: Haskell
  - name: Boost.HierarchicalEnum
    language: C++
---

{% for project in page.projects %}

{{ project.name }}
---------------------------

({{ project.language }}) <span id="{{ project.name }}_desc"><del>{{ project.name }}'s description</del></span>.
<a id="{{ project.name }}_home" href="/"><del>{{ project.name }}'s homepage</a>.

[![github](/GitHub-Mark-16px.png)](http://github.com/jacquev6/{{ project.name }})
[![travis](https://img.shields.io/travis/jacquev6/{{ project.name }}/master.svg?label=travis)](https://travis-ci.org/jacquev6/{{ project.name }})
[![coveralls](https://img.shields.io/coveralls/jacquev6/{{ project.name }}/master.svg?label=coveralls)](https://coveralls.io/r/jacquev6/{{ project.name }})
[![codeclimate](https://img.shields.io/codeclimate/github/jacquev6/{{ project.name }}.svg?label=codeclimate)](https://codeclimate.com/github/jacquev6/{{ project.name }})
[![scrutinizer](https://img.shields.io/scrutinizer/g/jacquev6/{{ project.name }}.svg?label=scrutinizer)](https://scrutinizer-ci.com/g/jacquev6/{{ project.name }})
{% if project.language == "Python" %}<a href="http://jacquev6.github.io/{{ project.name }}"><img alt="ghpages" id="{{ project.name }}_ghpages" src="https://img.shields.io/badge/github_pages-unknown-lightgrey.svg" /></a>
<a href="http://pythonhosted.org/{{ project.name }}"><img alt="pythonhosted" id="{{ project.name }}_pythonhosted" src="https://img.shields.io/badge/pythonhosted-unknown-lightgrey.svg" /></a>
[![python versions](https://img.shields.io/pypi/pyversions/{{ project.name }}.svg)](https://pypi.python.org/pypi/{{ project.name }})
[![status](https://img.shields.io/pypi/status/{{ project.name }}.svg)](https://pypi.python.org/pypi/{{ project.name }})
[![downloads/month](https://img.shields.io/pypi/dm/{{ project.name }}.svg)](https://pypi.python.org/pypi/{{ project.name }})
[![license](https://img.shields.io/pypi/l/{{ project.name }}.svg)](https://pypi.python.org/pypi/{{ project.name }})
[![version](https://img.shields.io/pypi/v/{{ project.name }}.svg)](https://pypi.python.org/pypi/{{ project.name }})
{% endif %}[![issues](https://img.shields.io/github/issues/jacquev6/{{ project.name }}.svg)](https://github.com/jacquev6/{{ project.name }}/issues)
[![waffle.io](https://badge.waffle.io/jacquev6/{{ project.name }}.png?label=ready&title=ready)](https://waffle.io/jacquev6/{{ project.name }})
[![forks](https://img.shields.io/github/forks/jacquev6/{{ project.name }}.svg)](https://github.com/jacquev6/{{ project.name }}/network)
[![stars](https://img.shields.io/github/stars/jacquev6/{{ project.name }}.svg)](https://github.com/jacquev6/{{ project.name }}/stargazers)

{% endfor %}

<script type="text/javascript" src="https://raw.githubusercontent.com/k33g/gh3/master/gh3.js"></script>

<script type="text/javascript">
    var user = new Gh3.User("jacquev6");
{% for project in page.projects %}

    new Gh3.Repository("{{ project.name }}", user).fetch(function (err, res) {
        $("#{{ project.name }}_desc").html(res.description);
        $("#{{ project.name }}_home").html(res.homepage);
        $("#{{ project.name }}_home").attr("href", res.homepage);
    });

{% if project.language == "Python" %}
    $.ajax({
        url: "http://dyn.vincent-jacques.net/exists?url=http://jacquev6.github.io/{{ project.name }}",
        success: function(message, text, response) {
            if(message.status == 200) {
                $("#{{ project.name }}_ghpages").attr("src", "https://img.shields.io/badge/github_pages-200-red.svg");
            } else if(message.status == 404) {
                $("#{{ project.name }}_ghpages").attr("src", "https://img.shields.io/badge/github_pages-404-green.svg");
            }
        }
    });
    $.ajax({
        url: "http://dyn.vincent-jacques.net/exists?url=http://pythonhosted.org/{{ project.name }}",
        success: function(message, text, response) {
            if(message.status == 200) {
                $("#{{ project.name }}_pythonhosted").attr("src", "https://img.shields.io/badge/pythonhosted-200-green.svg");
            } else if(message.status == 404) {
                $("#{{ project.name }}_pythonhosted").attr("src", "https://img.shields.io/badge/pythonhosted-404-red.svg");
            }
        }
    });
{% endif %}
{% endfor %}
</script>
