# ABN Search POC

A front‑end–first search experience over the **Australian Business Register (ABR)** data, inspired by ZoomInfo/Lusha/Apollo. Built with **React + Tailwind CSS**, state managed by **Redux Toolkit (RTK)**, and an **axios** service layer. An optional **NestJS** stub API is included for local testing.

> **Data Source:** [ABN Bulk Extract — data.gov.au](https://data.gov.au/data/dataset/abn-bulk-extract)

---

## 🔗 Repository & Author

- **Author:** `Pyarelal Sahu`
- **Repo:** https://github.com/pyarelal-sahu/abn-search-poc
- **LinkedIn:** https://www.linkedin.com/in/pyarelal-sahu/
- **Portfolio:** https://pyarelal-portfolio.netlify.app/

---

## ✨ Features

- 🔎 **Search & Facets**: query, State, Entity Type, GST status, ABN status
- ↕️ **Sort & Order**: name, state, postcode, entity type, ABN
- 📄 **Pagination**: numbers + ellipses + first/prev/next/last
- 🪟 **Details Modal**: ABN, status/date, GST & registration date, ACN/ARBN, DGR, names, location
- 🧽 **Clear All Filters** (Redux action)
- 🌓 **Dark/Light** theme (system-aware toggle)
- 🧭 **Resilient UX**: UI falls back to `/public/sample.json` if API is offline
- 🫧 **Button ripple** (MUI-like) & subtle animations
- 🧰 **Common components**: Button (variants), Select (options prop), Input, Card, Badge, Modal, Spinner, EmptyState

---

## 🔌 API Contract

**Search**

```
GET /search?q=&state=&entityType=&gst=&status=&sort=&order=&page=&pageSize=
→ { "total": number, "page": number, "pageSize": number, "items": Company[] }
```

**Company detail**

```
GET /company/:abn
→ Company | { "error": string }
```

A `Company` item includes:

```json
{
  "abn": "string",
  "legal_name": "string",
  "entity_type": "string",
  "abn_status": "Active | Cancelled",
  "abn_status_date": "YYYY-MM-DD",
  "state": "ACT|NSW|NT|QLD|SA|TAS|VIC|WA",
  "postcode": "string",
  "acn": "string",
  "arbn": "string",
  "gst_status": "Registered | Not Registered",
  "gst_registration_date": "YYYY-MM-DD",
  "dgr_status": "Yes | No",
  "dgr_start_date": "YYYY-MM-DD",
  "dgr_end_date": "YYYY-MM-DD",
  "business_names": ["string", "..."],
  "trading_names": ["string", "..."]
}
```

---

## 📦 Installation

### Clone the repo and navigate into it:

```bash
git clone https://github.com/pyarelal-sahu/abn-search-poc.git
cd abn-search-poc
```

---

## 🚀 Getting Started

### Front‑end (React + Tailwind + RTK + axios)

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

When the API is down, the UI automatically serves results from `public/sample.json`.

---

## 🧪 Development Notes

- Use **Select** by passing an `options` prop: `[{ label, value }]`
- `Button` supports variants (`primary | outline | ghost`) and a MUI-like **ripple** on click
- **Clear All Filters** via `resetFilters()` (Redux)
- **Theming** is persisted in `localStorage` and respects system preference
- **Pagination** uses numeric pages with ellipses + first/prev/next/last

### UI polish — uniform card height

If you see uneven card heights, ensure cards stretch to the same height in the grid:

```jsx
// grid container
<section className="grid ... items-stretch">
// card container
<Card className="h-full">
  <article className="h-full flex flex-col ...">
    {/* content */}
    <Button className="w-full mt-auto">View details</Button>
  </article>
</Card>
```

This keeps the CTA pinned to the bottom for every card.
