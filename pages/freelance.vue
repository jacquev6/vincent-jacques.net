<template>
  <div>
    <b-row>
      <b-col>
        <vj-hdr id="services" lvl="1">
          Services
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

        <p>
          Whether you're a start-up developing your first product,
          an academic wanting to simulate a model or explore and visualize data,
          or an individual with a task that "a computer should be able to do",
          you have a choice between off-the-shelf software, and custom-made software.
        </p>

        <p>
          With custom software, you are sure to get something that:
        </p>
        <ul>
          <li>is easy to learn and use (because <em>you</em> envisioned it)</li>
          <li>does exactly what you want (and you can make it evolve the way you want)</li>
        </ul>
        </p>

        <p>
          My contribution starts with understanding what you need, and giving you a price estimate.
          For that, we have to agree on something just formal enough to avoid misunderstandings.
          In most cases, it will be a specification document.
          Either you can provide one, or I can interview you and write it for you.
          In that case, we explore your functional requirements (what you need),
          your non-functional requirements if any (how you need it done),
          and your administrative requirements (do you need the software itself or just its result? should the project be kept secret? etc.).
        </p>

        <p>
          I advocate developing software in small slices that bring value immediately.
          We'll typically extract a first part of your project and agree on making it real.
          When I deliver this first working software, we'll discuss how you want it to evolve, and we'll iterate.
          This way you always have a clear view of what I'm doing, how much it will cost and what it will bring you.
          No surprises.
        </p>

        <p>
          If you have a technical background, you can have a look at my <NuxtLink to="/portfolio">open-source portfolio</NuxtLink> to get a sense of the quality of my work.
        </p>

        <p>
          See my <NuxtLink to="#custom-software-development-pricing">pricing policy</NuxtLink> below; you pay for what you need.
        </p>
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
        <vj-hdr id="custom-software-development-pricing" lvl="1">
          Custom software development pricing
        </vj-hdr>
        <vj-hdr id="fixed-price" lvl="2">
          Fixed-price
        </vj-hdr>
        <p>
          Whenever possible, I assume the risk of cost overrun by providing you with a cost estimate.
          On my sales quote, I mention a definition of the deliverables, a price and a delivery date.
          When I deliver, I bill you exactly what was estimated regardless of the time I actually spent.
          No surprise.
        </p>

        <vj-hdr id="daily-rate" lvl="2">
          Daily rate
        </vj-hdr>
        <p>
          In a few cases, it's not possible for me to work on a fixed-price basis.
          This is the case for example when we need to refine your requirements before an actual development: there is no way to tell beforehand how long it will take.
          This is also the case for investigative or research missions where acceptance criteria for the deliverables are difficult to define.
          In that case, we agree on an daily rate and on a work duration range over a given period.
        </p>

        <!-- @todo Should I mention meetings and synchronous tasks? Or is it overkill? -->

        <p>My daily rate is composed of a base rate and add-ons corresponding to your needs.</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <vj-hdr id="base-rate" lvl="3">
          Base rate
        </vj-hdr>
        <p>
          My base rate is 500€/day (before taxes) for individuals, non-profits, universities, and small businesses.
          Other customers, please contact me.
        </p>
        <p>
          My base rate applies to development of new software with no imposed dependencies, if I can keep my author's rights and talk freely about the project.
          Add-ons are applied as an additional percentage of that base rate.
        </p>
      </b-col>

      <b-col>
        <vj-hdr id="add-ons" lvl="3">
          Add-ons
        </vj-hdr>
        <p>
          <ul>
            <li>Non-disclosure agreement and non-competition clause: +25% to +50% based on how restrictive and punitive they are</li>
            <li>Full session of my author's rights: +25%</li>
            <li>Publication as free software: +12.5%</li>
            <li>Integration with existing systems or software: +0% to +25% based on how well it was designed to be integrated</li>
            <li>Coding guidelines: +0% to +25% based on how constraining they are</li>
          </ul>
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Vincent Jacques - Freelancing'
  }
}
</script>
