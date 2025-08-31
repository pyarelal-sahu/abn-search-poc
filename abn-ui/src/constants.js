export const STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"].map(
  (s) => ({ label: s, value: s })
);
export const ENTITIES = [
  "Private Company",
  "Public Company",
  "Sole Trader",
  "Trust",
  "Partnership",
  "Other Incorporated Entity",
].map((s) => ({ label: s, value: s }));
