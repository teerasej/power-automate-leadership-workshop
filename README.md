# Strategic Automation Leadership

เว็บไซต์คู่มือผู้เรียนภาษาไทยสำหรับเวิร์กช็อป Power Automate ระดับผู้นำ สร้างด้วย VitePress และเผยแพร่ผ่าน GitHub Pages

## เริ่มใช้งานในเครื่อง

ต้องมี Node.js 24 และ npm

```bash
npm ci
npm run docs:dev
```

VitePress จะแสดง URL สำหรับเปิดเว็บไซต์ในเครื่อง

## ตรวจสอบไฟล์สำหรับเผยแพร่

```bash
npm run docs:build
npm run docs:preview
```

ผลลัพธ์สำหรับ GitHub Pages อยู่ที่ `docs/.vitepress/dist`

## การเผยแพร่

ทุกครั้งที่ push ไปยัง branch `main` workflow ใน `.github/workflows/deploy.yml` จะ build และเผยแพร่เว็บไซต์ผ่าน GitHub Pages

เนื้อหา แบบฝึกหัด และข้อมูลตัวอย่างใน repository นี้เป็นสื่อการเรียนทั่วไป ข้อมูลและตัวเลขในกรณีศึกษาเป็นข้อมูลสมมติ
