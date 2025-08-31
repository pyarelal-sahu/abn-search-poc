export type Company = {
  abn: string;
  legal_name: string;
  entity_type: string;
  abn_status: string;
  abn_status_date?: string;
  state: string;
  postcode?: string;
  acn?: string;
  arbn?: string;
  gst_status: "Registered" | "Not Registered";
  gst_registration_date?: string;
  dgr_status?: string;
  dgr_start_date?: string;
  dgr_end_date?: string;
  business_names?: string[];
  trading_names?: string[];
};
