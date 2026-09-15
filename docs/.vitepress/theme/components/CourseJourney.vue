<script setup lang="ts">
import { withBase } from 'vitepress'

const sections = [
  { number: '1', time: '09:00–10:30', title: 'Demystifying Power Automate', detail: 'เข้าใจงานที่ระบบช่วยได้ ขอบเขต และบทบาทของคน', links: [['Exercise 1', '/exercises/01-understand-automation']] },
  { number: '2', time: '10:45–12:00', title: 'เข้าใจให้ชัด แล้วมองหาจุดติดขัด', detail: 'จบ knowledge-check ก่อนทำแผนที่งานปัจจุบัน', links: [['Exercise 1 · Practice 3', '/exercises/01-understand-automation#practice-3-knowledge-check-และตรวจเหตุผล-20-นาที'], ['Exercise 2', '/exercises/02-map-work-friction']] },
  { number: '3', time: '13:00–14:30', title: 'เลือกโอกาสและเริ่มร่าง Workflow', detail: 'ให้คะแนนโอกาสหนึ่งเรื่อง แล้วกำหนด Trigger กับผลลัพธ์', links: [['Exercise 3', '/exercises/03-prioritize-opportunity'], ['Exercise 4 · Practice 1', '/exercises/04-workflow-blueprint#practice-1']] },
  { number: '4', time: '14:45–16:00', title: 'พัฒนา Blueprint และส่งต่องาน', detail: 'เติม Actions, Condition, จุดตรวจของคน และบทสนทนาถัดไป', links: [['Exercise 4 · Practices 2–3', '/exercises/04-workflow-blueprint#practice-2'], ['Exercise 5', '/exercises/05-leadership-handover']] }
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
