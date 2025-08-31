import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../features/search/thunks";
import { setPage } from "../features/search/searchSlice";
import { Filters } from "../components/Filters";
import { CompanyCard } from "../components/CompanyCard";
import { Pagination } from "../components/Pagination";
import { EmptyState } from "../components/common/EmptyState";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { DetailsModal } from "../components/DetailsModal";

export default function Home() {
  const dispatch = useDispatch();
  const { params, data, loading } = useSelector((s) => s.search);
  const [open, setOpen] = useState(false);
  const [abn, setAbn] = useState(null);

  useEffect(() => {
    dispatch(fetchSearch(params));
  }, [params, dispatch]);

  const openDetails = (abn) => {
    setAbn(abn);
    setOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Filters />
        <div className="mt-4 items-center text-sm text-slate-500 dark:text-slate-400">
          {loading ? "Loading…" : `${data.total} results`}
        </div>

        <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {!data.items.length && !loading ? (
            <EmptyState />
          ) : (
            data.items.map((c) => (
              <CompanyCard key={c.abn} c={c} onOpen={openDetails} />
            ))
          )}
        </section>

        <div className="mt-6 flex items-center justify-center">
          <Pagination
            total={data.total}
            page={data.page}
            pageSize={data.pageSize}
            onPage={(p) => dispatch(setPage(p))}
          />
        </div>
      </main>
      <Footer />
      <DetailsModal open={open} abn={abn} onClose={() => setOpen(false)} />
    </div>
  );
}
