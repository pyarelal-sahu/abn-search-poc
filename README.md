# ABN Search POC — React (JS) + Tailwind + RTK + axios (NestJS stub)

A **front‑end–first** proof of concept that provides a ZoomInfo/Lusha/Apollo‑style search experience over **Australian Business Register (ABR)** data.

> **Attribution:** Data source — _ABN Bulk Extract_ from the **Australian Business Register** via **data.gov.au** (CC BY 3.0 AU). This repo ships with a small **synthetic sample** for instant UX.

---

## ✨ Highlights

- 🔎 **Search** across ABN, legal name, business names
- 🧭 **Facets**: State, Entity Type, GST status, ABN Status
- ↕️ **Sort** + **Pagination**
- 🌓 **Dark/Light** theme (system‑aware) with persistent toggle
- 🧰 **Common components** with **variants** and **animations**
- 🧽 **Clear All Filters** button (Redux: `resetFilters()`)
- 🪟 **Details modal** on card click with full company info (API + graceful fallback)
- 🧱 **Layered architecture**: RTK slices/thunks, axios service, utils
- 🧪 **Backend‑free demo**: falls back to `/sample.json`

---

## 🚀 Quick start

### Front‑end (React + Tailwind + RTK + axios — JavaScript)

```bash
cd abn-ui
npm i
cp .env.example .env   # optionally set VITE_API_URL=http://localhost:3000
npm run dev            # http://localhost:5173
```

### Optional stub API (NestJS)

```bash
cd abn-api
npm i
npm run start:dev      # http://localhost:3000
```

---

## 🗂️ Project structure

```
abn-ui/
  src/
    app/                # RTK store
    components/
      common/           # Button, Input, Select, Badge, Card, ToggleTheme, Modal, etc.
      Filters.jsx       # Search + facets + sort + Clear
      CompanyCard.jsx   # Click to open DetailsModal
      DetailsModal.jsx  # fetches /company/:abn (or sample fallback)
      Pagination.jsx
      Header.jsx, Footer.jsx
    features/search/    # searchSlice.js + thunks.js
    services/api.js     # axios + fallback logic
    utils/              # abn.js (mod‑89), debounce.js, theme.js
    pages/Home.jsx
  public/sample.json
```

---

## 🔗 API contract

- `GET /search?q=&state=&entityType=&gst=&status=&sort=&order=&page=&pageSize=`  
  → `{ "total": number, "page": number, "pageSize": number, "items": Company[] }`

- `GET /company/:abn`  
  → `Company | { error: string }`

---

## 👤 Author / Maintainer

**Pyarelal Sahu**  
✉️ pyarelalsahu7264@gmail.com  
🔗 [Portfolio](https://pyarelal-portfolio.netlify.app/) · [GitHub](https://github.com/pyarelal-sahu) · [LinkedIn](https://www.linkedin.com/in/pyarelal-sahu/)
