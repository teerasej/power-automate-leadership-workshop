import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import CourseJourney from './components/CourseJourney.vue'
import CourseProgress from './components/CourseProgress.vue'
import ExerciseFooter from './components/ExerciseFooter.vue'
import DownloadDeck from './components/DownloadDeck.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CourseJourney', CourseJourney)
    app.component('CourseProgress', CourseProgress)
    app.component('ExerciseFooter', ExerciseFooter)
    app.component('DownloadDeck', DownloadDeck)
  }
} satisfies Theme
