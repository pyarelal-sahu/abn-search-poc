import axios from "axios";
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  timeout: 10000,
});
api.interceptors.response.use(
  (r) => r,
  (e) => {
    if (import.meta.env.DEV)
      console.warn("API error", e?.response?.status, e?.message);
    return Promise.reject(e);
  }
);

export async function searchCompanies(params) {
  try {
    const res = await api.get("/search", { params });
    return res.data;
  } catch {
    const local = await fetch("/sample.json").then((r) => r.json());
    const q = (params.q || "").toLowerCase();
    let items = local.filter((c) => {
      const hay = [c.abn, c.legal_name, ...(c.business_names || [])]
        .join(" ")
        .toLowerCase();
      const matchQ = !q || hay.includes(q);
      const matchState = !params.state || c.state === params.state;
      const matchEntity =
        !params.entityType || c.entity_type === params.entityType;
      const matchGst = !params.gst || c.gst_status === params.gst;
      const matchStatus = !params.status || c.abn_status === params.status;
      return matchQ && matchState && matchEntity && matchGst && matchStatus;
    });
    const sortKey = params.sort || "legal_name";
    const order = params.order === "desc" ? -1 : 1;
    items.sort(
      (a, b) =>
        order *
        (a[sortKey] || "")
          .toString()
          .localeCompare((b[sortKey] || "").toString())
    );
    const page = params.page ?? 1,
      pageSize = params.pageSize ?? 12;
    const start = (page - 1) * pageSize;
    return {
      total: items.length,
      page,
      pageSize,
      items: items.slice(start, start + pageSize),
    };
  }
}
export async function getCompany(abn) {
  try {
    const res = await api.get(`/company/${abn}`);
    return res.data;
  } catch {
    const local = await fetch("/sample.json").then((r) => r.json());
    return local.find((x) => x.abn === abn) || null;
  }
}
