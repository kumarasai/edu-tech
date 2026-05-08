// ------------------------------------------------------------------
// Pulls everything together: filter bar, grid of cards, loading and
// error states, and pagination at the bottom.
// ------------------------------------------------------------------

import { useCourses } from "@/context/CourseContext.jsx";
import Filters from "./Filters.jsx";
import CourseCard from "./CourseCard.jsx";
import Pagination from "./Pagination.jsx";

export default function CoursesSection() {
  const { paged, filtered, loading, error, page, totalPages } = useCourses();

  return (
    <section id="courses" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-8">
      {/* section heading */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore our courses
          </h2>
          <p className="mt-2 text-muted-foreground">
            Use the filters below to narrow down the perfect course for you.
          </p>
        </div>

        {/* tiny result counter - only show once data is loaded */}
        {!loading && !error && (
          <span className="text-sm text-muted-foreground">
            Showing <strong className="text-foreground">{paged.length}</strong> of{" "}
            <strong className="text-foreground">{filtered.length}</strong> courses
            {totalPages > 1 && (
              <> · page {page} / {totalPages}</>
            )}
          </span>
        )}
      </div>

      {/* filters bar */}
      <Filters />

      {/* main content area - one of: loading / error / empty / grid */}
      <div className="mt-8">
        {loading && <LoadingGrid />}

        {!loading && error && (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-8 text-center text-destructive">
            <p className="font-semibold">⚠ {error}</p>
            <p className="mt-2 text-sm opacity-80">
              Please refresh the page and try again.
            </p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="text-lg font-semibold text-foreground">No courses found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try changing your search or clearing the filters.
            </p>
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paged.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>

      {/* pagination - hidden internally if there's only 1 page */}
      {!loading && !error && <Pagination />}
    </section>
  );
}

// little skeleton grid for the loading state
function LoadingGrid() {
  // render 6 grey cards while we pretend to fetch from an API
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-64 rounded-2xl border border-border bg-muted animate-pulse"
        />
      ))}
    </div>
  );
}
