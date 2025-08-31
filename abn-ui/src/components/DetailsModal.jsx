import { Modal } from "./common/Modal";
import { useEffect, useState } from "react";
import { getCompany } from "../services/api";
import PropTypes from "prop-types";

export function DetailsModal({ open, abn, onClose }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open || !abn) return;
    setLoading(true);
    getCompany(abn)
      .then(setData)
      .finally(() => setLoading(false));
  }, [open, abn]);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">Company details</h3>
          <button
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {!data && loading && (
          <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
            Loading…
          </div>
        )}
        {data && (
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
              <div className="text-lg font-semibold">{data.legal_name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                ABN: <span className="font-mono">{data.abn}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-900">
                <div className="text-slate-500 dark:text-slate-400">
                  Entity type
                </div>
                <div>{data.entity_type || "—"}</div>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-900">
                <div className="text-slate-500 dark:text-slate-400">
                  ABN status
                </div>
                <div>
                  {data.abn_status || "—"}{" "}
                  {data.abn_status_date ? `(${data.abn_status_date})` : ""}
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-900">
                <div className="text-slate-500 dark:text-slate-400">GST</div>
                <div>
                  {data.gst_status || "—"}{" "}
                  {data.gst_registration_date
                    ? `(${data.gst_registration_date})`
                    : ""}
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-900">
                <div className="text-slate-500 dark:text-slate-400">
                  Location
                </div>
                <div>
                  {data.state || "—"} {data.postcode || ""}
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-900">
                <div className="text-slate-500 dark:text-slate-400">
                  ACN / ARBN
                </div>
                <div>
                  {data.acn || "—"} {data.arbn ? ` / ${data.arbn}` : ""}
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-900">
                <div className="text-slate-500 dark:text-slate-400">DGR</div>
                <div>
                  {data.dgr_status || "—"}{" "}
                  {data.dgr_start_date
                    ? `(${data.dgr_start_date} – ${
                        data.dgr_end_date || "present"
                      })`
                    : ""}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 text-sm bg-white dark:bg-slate-900">
              <div className="text-slate-500 dark:text-slate-400">
                Business names
              </div>
              <div>
                {data.business_names && data.business_names.length
                  ? data.business_names.join(", ")
                  : "—"}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 text-sm bg-white dark:bg-slate-900">
              <div className="text-slate-500 dark:text-slate-400">
                Trading names
              </div>
              <div>
                {data.trading_names && data.trading_names.length
                  ? data.trading_names.join(", ")
                  : "—"}
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
DetailsModal.propTypes = {
  open: PropTypes.bool,
  abn: PropTypes.string,
  onClose: PropTypes.func,
};
