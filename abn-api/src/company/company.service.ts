import { Injectable } from "@nestjs/common";
import type { Company } from "./types";
import * as fs from "fs";
import * as path from "path";
import { SearchDto } from "./search.dto";

@Injectable()
export class CompanyService {
  private readonly data: Company[];
  constructor() {
    const p = path.join(__dirname, "sample.json");
    this.data = JSON.parse(fs.readFileSync(p, "utf-8"));
  }
  search(q: SearchDto) {
    const page = Number(q.page || 1),
      pageSize = Number(q.pageSize || 20);
    const order = q.order === "desc" ? -1 : 1,
      sort = q.sort || "legal_name";
    const needle = (q.q || "").toLowerCase();
    let items = this.data.filter((c) => {
      const hay = [c.abn, c.legal_name, ...(c.business_names || [])]
        .join(" ")
        .toLowerCase();
      const matchQ = !needle || hay.includes(needle);
      const matchSt = !q.state || c.state === q.state;
      const matchEnt = !q.entityType || c.entity_type === q.entityType;
      const matchGst = !q.gst || c.gst_status === q.gst;
      const matchStatus = !q.status || c.abn_status === q.status;
      return matchQ && matchSt && matchEnt && matchGst && matchStatus;
    });
    items.sort(
      (a: any, b: any) =>
        order *
        (a[sort] || "")
          .toString()
          .toLowerCase()
          .localeCompare((b[sort] || "").toString().toLowerCase())
    );
    const total = items.length,
      start = (page - 1) * pageSize;
    return {
      total,
      page,
      pageSize,
      items: items.slice(start, start + pageSize),
    };
  }
  getByAbn(abn: string) {
    return this.data.find((c) => c.abn === abn) || null;
  }
}
