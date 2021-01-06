<template>
  <div>
    <b-row>
      <b-col>
        <vj-hdr id="introduction" lvl="1">
          Introduction
        </vj-hdr>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6">
        <vj-markdown>
          I'm Vincent Jacques, alias [jacquev6] on the web.
          I'm a 36 years old, French, passionate software development engineer.
          I started programming when I was 12 on a [Casio calculator],
          and I haven't stopped learning.

          [jacquev6]: https://www.google.com/search?q=jacquev6
          [Casio calculator]: http://www.rskey.org/fx790p

          I acquired a broad engineering education at [Ecole Centrale Paris][ECP] (2006)
          and specialized in Software as a very enthusiastic career choice.
        </vj-markdown>
      </b-col>
      <b-col md="6">
        <vj-markdown>
          After twelve years of professional software engineering, I value maintainable and evolutive source code
          and the use of tools and automation to create working, reliable software.
        </vj-markdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <vj-hdr id="freelancing" lvl="1">
          Freelancing
        </vj-hdr>
        <vj-markdown>
          Since June, 2019, I've become a freelancer. What can I do for you?
        </vj-markdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <vj-markdown>
          For absolutely everyone:

          - [custom software development (more details)](/freelance#custom-software-development)
        </vj-markdown>
      </b-col>
      <b-col>
        <vj-markdown>
          For companies with Software Development Engineers (SDEs), large or small:

          - [technical interviews (more details)](/freelance#technical-interviews)
          - [trainings (more details)](/freelance#trainings)
        </vj-markdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <vj-markdown>
          Feel free to [contact me (vincent@vincent-jacques.net)](mailto:vincent@vincent-jacques.net) and let's find out how I can help you.
          First discussions are always free, with no commitment. {.strong-attention}
        </vj-markdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <vj-hdr id="portfolio" lvl="1">
          Portfolio
        </vj-hdr>
        <vj-markdown>
          Here are my most significant open-source software projects.
          You can view more in [my complete portfolio](/portfolio).
        </vj-markdown>
      </b-col>
    </b-row>

    <b-row>
      <template v-for="project in projects">
        <vj-project :key="project.name" :name="project.name" :tags="project.tags" :description="project.description" />
      </template>
    </b-row>
  </div>
</template>

<script>
import DrawGrammar from '../contents/projects/DrawGrammar.md'
import hashidsOCaml from '../contents/projects/hashids-ocaml.md'
import PyGithub from '../contents/projects/PyGithub.md'

export default {
  computed: {
    projects () {
      const projects = {
        DrawGrammar,
        'hashids-ocaml': hashidsOCaml,
        PyGithub
      }

      return [
        'PyGithub',
        'DrawGrammar',
        'hashids-ocaml'
      ].map((name) => {
        const project = projects[name]
        const tags = project.data.tags
        const description = project.content
        return { name, tags, description, visible: true }
      })
    }
  },
  head: {
    title: 'Vincent Jacques - Home'
  }
}
</script>
