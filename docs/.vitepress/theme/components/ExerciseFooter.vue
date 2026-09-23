<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{ prev: string; next: string; prevLabel?: string; nextLabel?: string }>()
</script>

<template>
  <nav class="exercise-footer" aria-label="Exercise navigation">
    <a :href="withBase(prev)"><span>Previous exercise</span><strong>{{ prevLabel || 'Learning journey' }}</strong></a>
    <a :href="withBase('/')"><span>Back to the learning journey</span><strong>Timetable 09:00–16:00</strong></a>
    <a :href="withBase(next)"><span>Next exercise</span><strong>{{ nextLabel || 'Learning journey' }}</strong></a>
  </nav>
</template>
