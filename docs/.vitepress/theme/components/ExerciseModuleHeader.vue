<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  module: 1 | 2 | 3
}>()

const modules = {
  1: {
    title: 'Demystifying Power Automate',
    image: '/images/workshop-illustration.png',
    alt: 'Three colleagues discuss a workflow drawn on a whiteboard.'
  },
  2: {
    title: 'Unlocking Operational Bottlenecks',
    image: '/images/module-2-operational-bottlenecks.png',
    alt: 'Colleagues pass work across a busy office process with documents waiting between them.'
  },
  3: {
    title: 'Strategic Workflow Blueprinting',
    image: '/images/module-3-workflow-blueprinting.png',
    alt: 'Colleagues arrange workflow steps and branches with cards on a table.'
  }
} as const

const moduleDetails = computed(() => modules[props.module])
</script>

<template>
  <figure class="exercise-module-header">
    <img :src="withBase(moduleDetails.image)" :alt="moduleDetails.alt">
    <figcaption>
      <span>Module {{ module }}</span>
      <strong>{{ moduleDetails.title }}</strong>
    </figcaption>
  </figure>
</template>
