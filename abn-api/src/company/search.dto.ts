export class SearchDto {
  q?: string;
  state?: string;
  entityType?: string;
  gst?: "Registered" | "Not Registered";
  status?: "Active" | "Cancelled";
  sort?: "legal_name" | "state" | "postcode" | "entity_type" | "abn" =
    "legal_name";
  order?: "asc" | "desc" = "asc";
  page?: number = 1;
  pageSize?: number = 20;
}
