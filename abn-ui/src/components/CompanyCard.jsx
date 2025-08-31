import { Badge } from "./common/Badge";
import { Card } from "./common/Card";
import { Button } from "./common/Button";
import PropTypes from "prop-types";

export function CompanyCard({ c, onOpen }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <article className="rounded-[inherit] p-4 h-full flex flex-col justify-between">
        <div>
          <header className="flex items-start justify-between">
            <h3 className="text-lg font-semibold leading-tight">
              {c.legal_name}
            </h3>
            <Badge>{c.entity_type}</Badge>
          </header>
          <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <div>
              <dt className="text-slate-500 dark:text-slate-400">ABN</dt>
              <dd className="font-mono">{c.abn}</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Status</dt>
              <dd>{c.abn_status}</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">GST</dt>
              <dd>{c.gst_status}</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Location</dt>
              <dd>
                {c.state} {c.postcode || ""}
              </dd>
            </div>
          </dl>
          <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            <strong>Business names:</strong>{" "}
            {c.business_names?.length ? c.business_names.join(", ") : "—"}
          </div>
        </div>
        <Button className="w-full mt-4" onClick={() => onOpen?.(c.abn)}>
          View details
        </Button>
      </article>
    </Card>
  );
}
CompanyCard.propTypes = {
  c: PropTypes.object.isRequired,
  onOpen: PropTypes.func,
};
