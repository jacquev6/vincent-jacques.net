---
tags:
    - ocaml
    - visual
    - program
    - mobile
---
[Collide](https://github.com/jacquev6/Collide) is an [event-based simulation](https://en.wikipedia.org/wiki/Discrete_event_simulation) of [elastic collisions](https://en.wikipedia.org/wiki/Elastic_collision) between two-dimensional balls.
An [interactive demo](https://jacquev6.github.io/Collide/) is available.

<div class="embed-responsive embed-responsive-4by3">
<iframe class="embed-responsive-item" src="//www.youtube.com/embed/SrFui5G5VQw" allowfullscreen></iframe>
</div>

It's written in [OCaml](https://ocaml.org/).
The same core code is used to produce several applications:

- native [Gtk](https://www.gtk.org/) and command-line applications
- a [browser application](https://jacquev6.github.io/Collide/)
- a [mobile application](https://play.google.com/store/apps/details?id=net.jacquev6.Collide)

The [cairo](https://www.cairographics.org/)-based drawing code is used on HTML5 canvases, PNG files and Gtk Cairo contexts thanks to my library [JsOfOCairo](https://github.com/jacquev6/JsOfOCairo/).
The OCaml bytecode is translated to JavaScript using [js_of_ocaml](https://ocsigen.org/js_of_ocaml/) and
the resulting browser-based application is packaged using [Cordova](https://cordova.apache.org/) to produce the mobile application.

A [prototype](https://github.com/jacquev6/MarblesCollide) was written in [C++](https://isocpp.org/).
