<script setup lang="ts">
import { withBase } from 'vitepress'

const sections = [
  { number: '1', time: '09:00–10:30', title: 'Demystifying Power Automate', detail: 'Explore suitable tasks, boundaries, and human responsibility', links: [['Exercise 1', '/exercises/01-understand-automation']] },
  { number: '2', time: '10:45–12:00', title: 'Understanding and bottlenecks', detail: 'Complete the knowledge check, then map the current process', links: [['Exercise 1 · Practice 3', '/exercises/01-understand-automation#practice-3'], ['Exercise 2', '/exercises/02-map-work-friction']] },
  { number: '3', time: '13:00–14:30', title: 'Opportunity and initial Blueprint', detail: 'Select one opportunity, learn the concepts, then arrange the normal path', links: [['Exercise 3', '/exercises/03-prioritize-opportunity'], ['Exercise 4 · Practice 1', '/exercises/04-workflow-blueprint#practice-1']] },
  { number: '4', time: '14:45–16:00', title: 'Flow map, review, and presentation', detail: 'Draw and photograph the map, improve it with Generative AI, then present the handover', links: [['Exercise 5 · Practice 1', '/exercises/05-leadership-handover#practice-1'], ['Exercise 5 · Practice 5', '/exercises/05-leadership-handover#practice-5']] }
]
</script>

<template>
  <div class="journey-grid">
    <article v-for="section in sections" :key="section.number" class="journey-card">
      <div class="journey-card__top"><span class="journey-number">{{ section.number }}</span><time>{{ section.time }}</time></div>
      <h2>{{ section.title }}</h2>
      <p>{{ section.detail }}</p>
      <div class="journey-links">
        <a v-for="link in section.links" :key="link[1]" :href="withBase(link[1])">{{ link[0] }}</a>
      </div>
    </article>
  </div>
</template>
