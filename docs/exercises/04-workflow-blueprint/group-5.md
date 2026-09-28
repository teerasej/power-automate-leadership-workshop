---
title: "Group 5: Teams service-request routing"
description: "Thai Flow-card challenge for Group 5"
---

# Group 5: Teams service-request routing

## สถานการณ์

ทีมใช้ Channel `Service Intake` รับคำขอบริการภายใน ข้อความที่ขึ้นต้นด้วย `[URGENT]` ต้องแจ้งบทบาทเวรรับผิดชอบทางอีเมล ส่วนข้อความปกติต้องถูกส่งต่อไปยัง Channel `Service Queue`

ห้ามใช้ข้อความหรือข้อมูลผู้ใช้จริงในการทดสอบ

## Challenge

จัด Flow cards ให้ตรวจข้อความใหม่ระดับบนสุดใน Channel แล้วแยกเส้นทางตาม tag `[URGENT]` โดยต้องไม่สร้างวงจรที่ workflow เรียกตัวเองซ้ำ

> **ขอบเขต:** ใช้เฉพาะ node cards ในชุดจริง ห้ามเพิ่ม Action สำหรับสร้าง ticket มอบหมายบุคคล หรือแก้ไขข้อความ เพราะไม่มีการ์ดเหล่านั้นในชุด

## ข้อมูลทดสอบ

### กรณีปกติ

- Channel ต้นทาง: `Service Intake`
- ข้อความระดับบนสุด: `Please review the new internal request.`
- ผลที่คาดหวัง: ข้อความถูกส่งไป `Service Queue` ซึ่งเป็นคนละ Channel

### กรณียกเว้น

- Channel ต้นทาง: `Service Intake`
- ข้อความระดับบนสุด: `[URGENT] Service interruption reported.`
- ผลที่คาดหวัง: บทบาทเวรรับผิดชอบได้รับอีเมล

### ข้อจำกัดที่ต้องลองอธิบาย

- หากข้อความเป็น **Reply** ใต้โพสต์เดิม Trigger ในชุดนี้จะไม่เริ่ม workflow

## ก่อนเริ่มเรียงการ์ด

1. เขียนคำถาม Yes/No ที่ตรวจ tag ต้นข้อความ
2. ระบุ Channel ต้นทางและ Channel ปลายทางให้ต่างกัน
3. ใช้ post-it ระบุบทบาทเวรรับผิดชอบและผู้ดูแล Channel
4. ติด `Needs verification` ข้างสิทธิ์ Teams และการเปิดใช้ Workflows app

## Checkpoint

กลุ่มเดินทดสอบข้อความปกติและเร่งด่วนได้ อธิบายกรณี Reply ได้ และไม่มีเส้นทางใดโพสต์กลับไปยัง Channel ที่ Trigger เฝ้าดูอยู่

[ไป Group 4](/exercises/04-workflow-blueprint/group-4) · [กลับไป Practice 1](/exercises/04-workflow-blueprint#practice-1) · [ไป Group 6](/exercises/04-workflow-blueprint/group-6)
