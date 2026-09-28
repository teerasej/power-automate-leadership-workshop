<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  exercise: 1 | 2 | 3 | 4 | 5
}>()

const images = {
  1: {
    src: '/images/exercise-1-people-check-exceptions.png',
    alt: 'A chef checks an exception before serving a meal.'
  },
  2: {
    src: '/images/module-2-operational-bottlenecks.png',
    alt: 'Colleagues pass work across a busy office process with documents waiting between them.'
  },
  3: {
    src: '/images/workshop-illustration.png',
    alt: 'Three colleagues compare workflow ideas on a whiteboard.'
  },
  4: {
    src: '/images/module-3-workflow-blueprinting.png',
    alt: 'Colleagues arrange workflow steps and an exception branch with cards on a table.'
  },
  5: {
    src: '/images/exercise-5-generative-ai-review.png',
    alt: 'A leader reviews a workflow map while a Generative AI chat acts as a second reader.'
  }
} as const

const image = computed(() => images[props.exercise])
</script>

<template>
  <figure class="exercise-header-image">
    <img
      :src="withBase(image.src)"
      :alt="image.alt"
      width="1672"
      height="941"
    >
  </figure>
</template>
