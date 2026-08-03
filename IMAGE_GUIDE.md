# 📸 How to Add or Change Images for Products & Services (Step-by-Step Guide)

Yeh guide kisi bhi non-technical banda ya content editor ke liye hai jo **InfoTech Website** par kisi bhi Product ya Service ki images add ya change karna chahta hai.

---

## 🛠️ Step 1: Image File Copy Karein

1. Apni nayi image file (PNG, JPG, ya JPEG format mein) tayyar karein.
2. Is image file ko project ke is folder mein paste karein:
   📁 `infotech-next/public/images/`

3. **Example Name:** Man lijiye aapne image ka naam rakha `new-hrms-banner.png`.

---

## 📝 Step 2: `lib/data.json` File Open Karein

1. VS Code ya kisi bhi text editor mein yeh file kholein:
   📁 `infotech-next/lib/data.json`

2. Is file mein 2 main sections hain:
   - **`PRODUCTS_FULL`**: Sabhi 12 Products ki details.
   - **`SERVICES_FULL`**: Sabhi Services ki details.

---

## 📦 Case A: Agar Product ki Image change/add karni hai

`lib/data.json` mein us Product ka naam (slug) dhundein, maslan `"hrms-&-payroll-management-system"`:

```json
"hrms-&-payroll-management-system": {
  "title": "HRMS & Payroll Management System",
  "subtitle": "Complete HRMS platform to manage your workforce.",
  "heroImage": "/images/new-hrms-banner.png",
  "secImage": "/images/new-hrms-secondary.png"
}
```

- **`heroImage`**: Main banner image jo page ke top par dikhegi.
- **`secImage`**: Doosri screenshot image (optional).

---

## 🛠️ Case B: Agar Service ki Image change/add karni hai

`lib/data.json` mein us Service ka naam dhundein, maslan `"web-development"`:

```json
"web-development": {
  "title": "Web Application Development",
  "subtitle": "Custom high-performance web applications.",
  "heroImage": "/images/my-web-dev-banner.png",
  "architectureImage": "/images/my-web-dev-arch.png"
}
```

- **`heroImage`**: Main Service Banner Image.
- **`architectureImage`**: System Architecture Blueprint Image.

---

## 🚫 Step 3: Agar Kisi Product/Service ki Image Hatani Ho (Remove)

Agar aap chahte hain ki kisi Product ya Service par koi image na dikhe aur page clean rahe:

`heroImage` ki value ko `null` kar dein:

```json
"ai-and-machine-learning": {
  "title": "AI & Machine Learning",
  "heroImage": null,
  "architectureImage": null
}
```

---

## 🚀 Step 4: Live Website Par Push / Update Karna

Image change karne ke baad terminal mein yeh 2 simple commands chalayein:

```bash
git add .
git commit -m "Update product and service images"
git push origin main
```

Aapki nayi images live website par update ho jayengi! 🎉
