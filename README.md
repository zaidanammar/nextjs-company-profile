<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). -->

# 🏢 Toko Satu — Company Profile Landing Page

A modern **company profile landing page** built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.  
This project is developed as part of a technical assessment, featuring a responsive design and server-side rendering (SSR) for better performance and SEO.

---

## 🚀 Tech Stack

- **Next.js 15** – React framework with App Router and SSR  
- **TypeScript** – Strongly typed JavaScript for scalable development  
- **Tailwind CSS** – Utility-first CSS framework for fast styling  
- **Framer Motion** – Animation library for smooth transitions  
- **Vercel** – Hosting and deployment  

---

## 📋 Features

✅ **Company Description Section**  
Creative hero section with text and image — fully responsive across all devices.  

✅ **Product Section (SSR + API Integration)**  
- Uses public APIs  
- Displays product **ID**, **Name**, and **Image**  
- Click to preview image in a modal  
- Responsive grid layout for desktop, tablet, and mobile  

---

## 🧠 API Source

Products and images are fetched from:

- 🧩 [https://www.giovankov.com/api/product.json](https://www.giovankov.com/api/product.json)  
- 🖼️ [https://www.giovankov.com/api/image.json](https://www.giovankov.com/api/image.json)

Example response:
```json
{
  "data": [
    { "id": "1", "name": "Kipas Angin" },
    { "id": "2", "name": "Pigura" }
  ]
}

