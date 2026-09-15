<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{ prev: string; next: string; prevLabel?: string; nextLabel?: string }>()
</script>

<template>
  <nav class="exercise-footer" aria-label="เส้นทางกิจกรรม">
    <a :href="withBase(prev)"><span>กิจกรรมก่อนหน้า</span><strong>{{ prevLabel || 'เส้นทางการเรียน' }}</strong></a>
    <a :href="withBase('/')"><span>กลับสู่เส้นทางการเรียน</span><strong>ตารางเรียน 09:00–16:00</strong></a>
    <a :href="withBase(next)"><span>กิจกรรมถัดไป</span><strong>{{ nextLabel || 'เส้นทางการเรียน' }}</strong></a>
  </nav>
</template>
