<script setup lang="ts">
import { withBase } from 'vitepress'

const outcomes = [
  'One selected opportunity',
  'One paper-tested Workflow Blueprint',
  'One human-reviewed decision record',
  'One Leadership Handover Card'
]
</script>

<template>
  <section class="landing-hero" aria-labelledby="landing-title">
    <div class="landing-hero__copy">
      <p class="landing-hero__eyebrow">Strategic Automation Leadership · Batch 1</p>
      <h1 id="landing-title">Power Automate<br>for leaders</h1>
      <p class="landing-hero__lead">Explore Power Automate, select a worthwhile improvement, and explain a workflow proposal to your team.</p>
      <p class="landing-hero__time">09:00–16:00 · Five exercises</p>
      <div class="landing-hero__actions">
        <a class="landing-button landing-button--primary" :href="withBase('/exercises/01-understand-automation')">Start Exercise 1</a>
        <a class="landing-button landing-button--secondary" :href="withBase('/about')">About the exercise</a>
      </div>
    </div>
    <img class="landing-hero__image" :src="withBase('/images/workshop-illustration.png')" alt="Three colleagues discussing a workflow on a whiteboard">
  </section>

  <section class="landing-outcomes" aria-labelledby="landing-outcomes-title">
    <div class="landing-outcomes__intro">
      <p class="landing-kicker">The result of the day</p>
      <h2 id="landing-outcomes-title">Leave with a plan your team can discuss</h2>
    </div>
    <ol>
      <li v-for="(outcome, index) in outcomes" :key="outcome"><span>{{ String(index + 1).padStart(2, '0') }}</span>{{ outcome }}</li>
    </ol>
  </section>
</template>
