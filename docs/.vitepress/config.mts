import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  lang: 'th-TH',
  title: 'Strategic Automation Leadership',
  description: 'คู่มือเวิร์กช็อป Power Automate สำหรับผู้นำ',
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
      { text: 'เส้นทางการเรียน', link: '/' },
      { text: 'กิจกรรม', link: '/exercises/01-understand-automation' },
      { text: 'เอกสารประกอบ', items: [
        { text: 'ชุดสถานการณ์สมมติ', link: '/resources/case-pack' },
        { text: 'แบบบันทึก', link: '/resources/worksheets' }
      ] }
    ],
    sidebar: [
      {
        text: 'เส้นทางการเรียน',
        items: [{ text: 'ตารางเรียน 09:00–16:00', link: '/' }]
      },
      {
        text: 'กิจกรรมทั้ง 5',
        items: [
          { text: '1. ประโยชน์และขอบเขต', link: '/exercises/01-understand-automation' },
          { text: '2. แผนที่จุดติดขัด', link: '/exercises/02-map-work-friction' },
          { text: '3. เลือกโอกาส', link: '/exercises/03-prioritize-opportunity' },
          { text: '4. Workflow Blueprint', link: '/exercises/04-workflow-blueprint' },
          { text: '5. Leadership Handover', link: '/exercises/05-leadership-handover' }
        ]
      },
      {
        text: 'เอกสารประกอบ',
        items: [
          { text: 'ชุดสถานการณ์สมมติ', link: '/resources/case-pack' },
          { text: 'แบบบันทึก', link: '/resources/worksheets' }
        ]
      }
    ],
    outline: { level: [2, 3], label: 'ในหน้านี้' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'ค้นหา', buttonAriaLabel: 'ค้นหา' },
          modal: {
            displayDetails: 'แสดงรายละเอียด',
            resetButtonTitle: 'ล้างคำค้นหา',
            backButtonTitle: 'ปิดการค้นหา',
            noResultsText: 'ไม่พบผลลัพธ์สำหรับ',
            footer: { selectText: 'เลือก', navigateText: 'เลื่อน', closeText: 'ปิด' }
          }
        }
      }
    },
    docFooter: { prev: 'หน้าก่อนหน้า', next: 'หน้าถัดไป' },
    returnToTopLabel: 'กลับขึ้นด้านบน',
    sidebarMenuLabel: 'เมนู',
    darkModeSwitchLabel: 'ธีม',
    lightModeSwitchTitle: 'เปลี่ยนเป็นธีมสว่าง',
    darkModeSwitchTitle: 'เปลี่ยนเป็นธีมมืด'
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
