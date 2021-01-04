<template>
  <div>
    <b-row>
      <b-col>
        <vj-hdr id="custom-software-development" lvl="1">
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
            <li>Non-disclosure agreement: +25% to +50% based on forbidden topics</li>
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
