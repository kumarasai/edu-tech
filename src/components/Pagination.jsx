// ------------------------------------------------------------------
// Simple numeric pagination. Reads/writes the current page from
// CourseContext. Keeps it short - we're not paginating millions of rows.
// ------------------------------------------------------------------

import { useCourses } from "@/context/CourseContext.jsx";

export default function Pagination() {
  const { page, setPage, totalPages } = useCourses();

  // nothing to do if we only have one page
  if (totalPages <= 1) return null;

  // build the array of page numbers [1..totalPages]
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // helpers to move pages, clamped to valid range
  const prev = () => setPage(Math.max(1, page - 1));
  const next = () => setPage(Math.min(totalPages, page + 1));

  // shared button styles
  const btn =
    "min-w-[40px] rounded-lg border border-border bg-card px-3 py-2 text-sm " +
    "transition-all duration-200 hover:border-primary hover:text-primary " +
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border " +
    "disabled:hover:text-foreground";

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
      <button onClick={prev} disabled={page === 1} className={btn}>
        ← Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={
            p === page
              ? "min-w-[40px] rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow"
              : btn
          }
        >
          {p}
        </button>
      ))}

      <button onClick={next} disabled={page === totalPages} className={btn}>
        Next →
      </button>
    </div>
  );
}
