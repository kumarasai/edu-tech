// ------------------------------------------------------------------
// Filter bar: search input + category / instructor dropdowns + sort.
// All state lives in the CourseContext, this component is just a UI.
// ------------------------------------------------------------------

import { useCourses } from "@/context/CourseContext.jsx";

export default function Filters() {
  const {
    search, setSearch,
    category, setCategory,
    instructor, setInstructor,
    sortBy, setSortBy,
    categories, instructors,
  } = useCourses();

  // shared classes for the dropdowns / inputs - keeps the JSX tidy
  const fieldClass =
    "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm " +
    "text-foreground placeholder:text-muted-foreground " +
    "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent " +
    "transition-all duration-200";

  return (
    <div className="rounded-2xl border border-border bg-card p-4 md:p-6 shadow-sm animate-fade-up">
      <div className="grid gap-3 md:grid-cols-12">
        {/* Search - takes most of the row on desktop */}
        <div className="md:col-span-5">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Search
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by course name or instructor..."
            className={fieldClass}
          />
        </div>

        {/* Category dropdown */}
        <div className="md:col-span-3">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={fieldClass}
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Instructor dropdown */}
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Instructor
          </label>
          <select
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            className={fieldClass}
          >
            {instructors.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Sort by
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={fieldClass}
          >
            <option value="popular">Popular</option>
            <option value="name">Name (A-Z)</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
      </div>
    </div>
  );
}
