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
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <vj-markdown>
          Since June, 2019, I've become a freelancer. What can I do for you?
        </vj-markdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <vj-markdown>
          For absolutely everyone:

          - custom software development
        </vj-markdown>
      </b-col>
      <b-col>
        <vj-markdown>
          For companies with Software Development Engineers (SDEs), large or small:

          - technical interviews
          - trainings
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
        <vj-hdr id="custom-software-development" lvl="2">
          Custom software development
        </vj-hdr>

        <vj-markdown>
          Whether you're a start-up developing your first product,
          an academic wanting to simulate a model or explore and visualize data,
          or an individual with a task that "a computer should be able to do",
          you have a choice between off-the-shelf software, and custom-made software.

          With custom software, you are sure to get something that:

          - is easy to learn and use (because *you* envisioned it)
          - does exactly what you want (and you can make it evolve the way you want)

          My contribution starts with understanding what you need, and giving you a price estimate.
          For that, we have to agree on something just formal enough to avoid misunderstandings.
          In most cases, it will be a specification document.
          Either you can provide one, or I can interview you and write it for you.
          In that case, we explore your functional requirements (what you need),
          your non-functional requirements if any (how you need it done),
          and your administrative requirements (do you need the software itself or just its result? should the project be kept secret? etc.).

          I advocate developing software in small slices that bring value immediately.
          We'll typically extract a first part of your project and agree on making it real.
          When I deliver this first working software, we'll discuss how you want it to evolve, and we'll iterate.
          This way you always have a clear view of what I'm doing, how much it will cost and what it will bring you.
          No surprises.

          If you have a technical background, you can have a look at my [open-source portfolio](#portfolio) below to get a sense of the quality of my work.

          My fee starts at 500€ per day (before taxes), for independent software development,
          if I can keep my author's rights and talk freely about the project.
          I can absolutely integrate into an existing technical and methodological environment,
          sell you the intellectual property and/or agree on confidentiality, for an additional cost.
          You pay for what you need.
        </vj-markdown>
      </b-col>

      <b-col>
        <vj-hdr id="technical-interviews" lvl="2">
          Technical interviews
        </vj-hdr>

        <vj-markdown>
          Conducting interviews to evaluate SDE candidates for your company is time consuming,
          and often frowned upon by your current engineers because it diverts them from their project tasks.

          With my experience interviewing candidates for Criteo and Amazon,
          I can conduct technical interviews and write synthetic reports, based on your hiring criteria.
          This way, you get an external opinion, unbiased by a personal wish to work (or not) with a candidate,
          and based solely on their performance.
        </vj-markdown>

        <vj-hdr id="trainings" lvl="2">
          Trainings
        </vj-hdr>

        <vj-markdown>
          If you've just hired a few or many (junior) SDEs,
          you probably want to ensure they share a basic understanding of software development methods and tools.

          I can animate synthetic and practical trainings about a set of topics I master:

          - basic and advanced use of Git and GitHub
          - basic and intermediate use of the Unix command-line and its tools
          - general software design principles (SOLID, GRASP, KISS, YAGNI)
          - basic and advanced object-oriented programming Design Patterns
          - the Python programming language and ecosystem (for people who already know a programming language)

          I can personalize these trainings to your specific requirements.
          In particular, I can discuss beforehand with your more senior engineers to make sure my advice is compatible with their vision.
        </vj-markdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <vj-hdr id="portfolio" lvl="1">
          Portfolio
        </vj-hdr>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
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
  }
}
</script>
