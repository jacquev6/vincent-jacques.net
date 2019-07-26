---
tags:
  - web
  - javascript
---
[Splight] is a web application I'm building with my father, to gather and display a calendar of cultural events in his city.
The data we have so far is not ready for production, so you can have a look at the [demo of the admin][splight-demo] (all in French).

Splight is architectured around a [GraphQL] API served by an [Apollo] server.
Data is stored in [MongoDB].

Its public and admin front-ends are written in [JavaScript] using [Vue.js] with [Vue Router] and [Vue Apollo],
built as a static web application and served by [Nginx].

Its services are packaged as [Docker] images and run on a [Kubernetes] cluster described in my [infrastructure](#infrastructure) project.
