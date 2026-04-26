# Portfolio Website

ยินดีต้อนรับสู่เว็บพอร์ตโฟลิโอของคุณ!

## 📁 โครงสร้างไฟล์

```
Port/
├── index.html              # ไฟล์ HTML หลัก
├── css/
│   └── styles.css         # ไฟล์ CSS ทั้งหมด
├── js/
│   └── script.js          # ไฟล์ JavaScript
└── img/
    └── profile.jpg        # ใส่รูปโปรไฟล์ของคุณที่นี่
```

## 🎯 วิธีการใช้งาน

### 1. เพิ่มรูปโปรไฟล์
- ใส่รูปของคุณในโฟลเดอร์ `img/` 
- ตั้งชื่อไฟล์เป็น `profile.jpg` หรือ `profile.png`
- หรือแก้ไขบรรทัดที่ 36 ใน `index.html` เพื่อให้ชื่อไฟล์ตรงกับรูปของคุณ

### 2. แก้ไขข้อมูล
แก้ไขข้อมูลต่อไปนี้ใน `index.html`:

#### Hero Section (หน้าแรก)
```html
<h1 class="hero-title">สวัสดี! ผมคือ [ชื่อของคุณ]</h1>
<p class="hero-subtitle">Web Developer & Designer</p>
<p class="hero-description">ฉันสร้างเว็บไซต์ที่สวยงามและมีประสิทธิภาพ</p>
```

#### About Section
แก้ไขข้อมูลเกี่ยวกับตัวคุณในส่วนนี้

#### Projects Section
เพิ่ม/แก้ไขโปรเจคของคุณในส่วน Projects

#### Skills Section
- ปรับเปลี่ยนทักษะและเปอร์เซ็นต์ตามความสามารถจริง
- แก้ไขประเภททักษะตามต้องการ

#### Contact Section
แก้ไขข้อมูลติดต่อ:
- Email
- Phone
- Location

### 3. ปรับแต่งสีและลักษณะ
แก้ไขสีใน `css/styles.css` ที่ส่วนตัวแปร (Variables):

```css
:root {
    --primary-color: #667eea;      /* สีหลัก */
    --secondary-color: #764ba2;    /* สีรอง */
    --text-dark: #333;             /* สีข้อความ */
}
```

## ✨ ฟีเจอร์

✅ Navigation Bar คงที่  
✅ Smooth Scrolling  
✅ Responsive Design (Mobile Friendly)  
✅ Animations  
✅ Contact Form  
✅ Skills Progress Bars  
✅ Projects Grid  

## 🎨 Sections

1. **Home** - หน้าแรกกับรูปโปรไฟล์
2. **About** - เกี่ยวกับตัวคุณ
3. **Projects** - โปรเจคที่ทำไว้
4. **Skills** - ทักษะและความเชี่ยวชาญ
5. **Contact** - ติดต่อและฟอร์ม

## 📝 เคล็ดลับ

- ใช้รูปสี่เหลี่ยมจัตุรัส (1:1 ratio) เพื่อให้เหมาะสม
- รูปสำหรับ Hero section ควรมีขนาด 400x400 pixel
- ใช้รูปคุณภาพสูง JPG หรือ PNG
- เปอร์เซ็นต์ทักษะควรเป็นจำนวนเต็ม (0-100%)

## 🚀 การเปิดใช้งาน

เพียงแค่เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ ไม่ต้องติดตั้งอะไรเพิ่มเติม!

---

Happy Coding! 🎉
