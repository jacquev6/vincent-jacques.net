---
tags:
    - ocaml
    - visual
    - program
    - mobile
---
[Collide] is an [event-based simulation] of [elastic collisions] between two-dimensional balls.
An [interactive demo][Collide-demo] is available.

[event-based simulation]: https://en.wikipedia.org/wiki/Discrete_event_simulation
[elastic collisions]: https://en.wikipedia.org/wiki/Elastic_collision

<div class="embed-responsive embed-responsive-4by3">
<iframe class="embed-responsive-item" src="//www.youtube.com/embed/SrFui5G5VQw" allowfullscreen></iframe>
</div>

It's written in [OCaml].
The same core code is used to produce several applications:

- native [Gtk] and command-line applications
- a [browser application][Collide-demo]
- a [mobile application]

[mobile application]: https://play.google.com/store/apps/details?id=net.jacquev6.Collide

The [cairo]-based drawing code is used on HTML5 canvases, PNG files and Gtk Cairo contexts thanks to my library [JsOfOCairo].
The OCaml bytecode is translated to JavaScript using [js_of_ocaml] and
the resulting browser-based application is packaged using [Cordova] to produce the mobile application.

A [prototype][MarblesCollide] was written in [C++].
