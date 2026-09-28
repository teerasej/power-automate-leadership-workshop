<script setup lang="ts">
import { withBase } from 'vitepress'

const props = defineProps<{ current: number }>()
const exercises = [
  ['Benefits and boundaries', '/exercises/01-understand-automation'],
  ['Work friction map', '/exercises/02-map-work-friction'],
  ['Select an opportunity', '/exercises/03-prioritize-opportunity'],
  ['Workflow Blueprint', '/exercises/04-workflow-blueprint'],
  ['Improve and present', '/exercises/05-leadership-handover']
]
</script>

<template>
  <nav class="course-progress" aria-label="Exercise progress">
    <p><strong>Exercise {{ props.current }} of 5</strong><span>Open any exercise directly</span></p>
    <ol>
      <li v-for="(exercise, index) in exercises" :key="exercise[1]">
        <a :href="withBase(exercise[1])" :aria-label="`Exercise ${index + 1}: ${exercise[0]}`" :aria-current="index + 1 === props.current ? 'step' : undefined">
          <span>{{ index + 1 }}</span><span class="progress-label">{{ exercise[0] }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>
