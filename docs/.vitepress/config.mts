import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  lang: 'en-GB',
  title: 'Strategic Automation Leadership',
  description: 'English Power Automate leadership workshop guide',
  base: '/power-automate-leadership-workshop/',
  cleanUrls: true,
  lastUpdated: false,
  head: [
    ['meta', { name: 'theme-color', content: '#0b2a4a' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  themeConfig: {
    logo: '/images/workshop-illustration.png',
    siteTitle: 'Automation Leadership',
    nav: [
      { text: 'Learning journey', link: '/' },
      { text: 'Exercises', link: '/exercises/01-understand-automation' },
      { text: 'Resources', items: [
        { text: 'Fictional case pack', link: '/resources/case-pack' },
        { text: 'Worksheets', link: '/resources/worksheets' },
        { text: 'Presentation outline', link: '/resources/presentation-outline' }
      ] }
    ],
    sidebar: [
      {
        text: 'Learning journey',
        items: [{ text: 'Timetable 09:00–16:00', link: '/' }]
      },
      {
        text: 'Five exercises',
        items: [
          { text: '1. Benefits and boundaries', link: '/exercises/01-understand-automation' },
          { text: '2. Work friction map', link: '/exercises/02-map-work-friction' },
          { text: '3. Select an opportunity', link: '/exercises/03-prioritize-opportunity' },
          { text: '4. Workflow Blueprint', link: '/exercises/04-workflow-blueprint' },
          { text: '5. Leadership Handover', link: '/exercises/05-leadership-handover' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Fictional case pack', link: '/resources/case-pack' },
          { text: 'Worksheets', link: '/resources/worksheets' },
        { text: 'Presentation outline', link: '/resources/presentation-outline' }
        ]
      }
    ],
    outline: { level: [2, 3], label: 'On this page' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
          modal: {
            displayDetails: 'Show details',
            resetButtonTitle: 'Reset search',
            backButtonTitle: 'Close search',
            noResultsText: 'No results for',
            footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
          }
        }
      }
    },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme'
  },
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' }
  },
  mermaid: {
    theme: 'base',
    themeVariables: {
      primaryColor: '#e7f0fb',
      primaryTextColor: '#0b2a4a',
      primaryBorderColor: '#2f6fab',
      lineColor: '#2f6fab',
      secondaryColor: '#d7e8f8',
      tertiaryColor: '#f5f8fc'
    }
  }
}))
