<script setup lang="ts">
import { withBase } from 'vitepress'

const props = defineProps<{ current: number }>()
const exercises = [
  ['ประโยชน์และขอบเขต', '/exercises/01-understand-automation'],
  ['แผนที่จุดติดขัด', '/exercises/02-map-work-friction'],
  ['เลือกโอกาส', '/exercises/03-prioritize-opportunity'],
  ['Workflow Blueprint', '/exercises/04-workflow-blueprint'],
  ['Leadership Handover', '/exercises/05-leadership-handover']
]
</script>

<template>
  <nav class="course-progress" aria-label="ความคืบหน้ากิจกรรม">
    <p><strong>กิจกรรม {{ props.current }} จาก 5</strong><span>เลือกไปยังทุกกิจกรรมได้โดยตรง</span></p>
    <ol>
      <li v-for="(exercise, index) in exercises" :key="exercise[1]">
        <a :href="withBase(exercise[1])" :aria-current="index + 1 === props.current ? 'step' : undefined">
          <span>{{ index + 1 }}</span><span class="progress-label">{{ exercise[0] }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>
