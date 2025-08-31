import { useDispatch, useSelector } from "react-redux";
import { ENTITIES, STATES } from "../constants";
import {
  resetFilters,
  setFilters,
  setOrder,
  setQuery,
  setSort,
} from "../features/search/searchSlice";
import { debounce } from "../utils/debounce";
import { Button } from "./common/Button";
import { Input } from "./common/Input";
import { Select } from "./common/Select";

export function Filters() {
  const dispatch = useDispatch();
  const params = useSelector((s) => s.search.params);
  const updateQuery = debounce((v) => dispatch(setQuery(v)), 300);

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
      <div className="flex flex-col md:flex-row gap-3">
        <Input
          value={params.q || ""}
          placeholder="Search ABN, legal or business name…"
          onChange={(e) => updateQuery(e.target.value)}
        />
        <div className="flex gap-2">
          <Button onClick={() => dispatch(setQuery(params.q || ""))}>
            Search
          </Button>
          <Button variant="outline" onClick={() => dispatch(resetFilters())}>
            Clear
          </Button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-5 gap-3">
        <Select
          value={params.state || ""}
          onChange={(e) => dispatch(setFilters({ state: e.target.value }))}
          options={STATES}
          placeholder="State"
        />
        <Select
          value={params.entityType || ""}
          onChange={(e) => dispatch(setFilters({ entityType: e.target.value }))}
          options={ENTITIES}
          placeholder="Entity type"
        />
        <Select
          value={params.gst || ""}
          onChange={(e) => dispatch(setFilters({ gst: e.target.value }))}
          options={[
            { label: "Registered", value: "Registered" },
            { label: "Not Registered", value: "Not Registered" },
          ]}
          placeholder="GST"
        />
        <Select
          value={params.status || ""}
          onChange={(e) => dispatch(setFilters({ status: e.target.value }))}
          options={[
            { label: "Active", value: "Active" },
            { label: "Cancelled", value: "Cancelled" },
          ]}
          placeholder="ABN Status"
        />
        <div className="flex gap-2">
          <Select
            value={params.sort}
            onChange={(e) => dispatch(setSort(e.target.value))}
            options={[
              { label: "Sort: Name", value: "legal_name" },
              { label: "State", value: "state" },
              { label: "Postcode", value: "postcode" },
              { label: "Entity Type", value: "entity_type" },
              { label: "ABN", value: "abn" },
            ]}
          />
          <Select
            value={params.order}
            onChange={(e) => dispatch(setOrder(e.target.value))}
            options={[
              { label: "Asc", value: "asc" },
              { label: "Desc", value: "desc" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
Filters.propTypes = {};
