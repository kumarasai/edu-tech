import { createContext, useContext, useEffect, useMemo, useState } from "react";
import mockCourses from "@/data/courses.js";

// Create the context (default empty - we'll always wrap with provider)
const CourseContext = createContext(null);

// page size for pagination - keeping it small so the UI feels alive
const PAGE_SIZE = 6;

export function CourseProvider({ children }) {
  // raw data coming from the "API"
  const [courses, setCourses] = useState([]);

  // ui states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filters
  const [search, setSearch] = useState("");        // free text on name / instructor
  const [category, setCategory] = useState("All"); // dropdown filter
  const [instructor, setInstructor] = useState("All");
  const [sortBy, setSortBy] = useState("popular"); // popular | name | rating

  // pagination - just the current page number, page size is constant
  const [page, setPage] = useState(1);

  // simulate an API call once on mount, with a tiny delay so the
  // loading skeleton actually has a chance to show up.
  useEffect(() => {
    let alive = true;
    setLoading(true);

    const timer = setTimeout(() => {
      try {
        if (!alive) return;
        setCourses(mockCourses);
        setError(null);
      } catch (e) {
        // in real life this would be a failed fetch
        setError("Something went wrong while loading courses.");
      } finally {
        if (alive) setLoading(false);
      }
    }, 600);

    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, []);

  // unique categories / instructors for the dropdowns
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(courses.map((c) => c.category)))],
    [courses]
  );
  const instructors = useMemo(
    () => ["All", ...Array.from(new Set(courses.map((c) => c.instructor)))],
    [courses]
  );

  // apply filters + sort. memoised so we don't redo this on every render.
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    let list = courses.filter((c) => {
      // name OR instructor matches the search box
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.instructor.toLowerCase().includes(q);

      const matchesCategory = category === "All" || c.category === category;
      const matchesInstructor = instructor === "All" || c.instructor === instructor;

      return matchesSearch && matchesCategory && matchesInstructor;
    });

    // sorting
    if (sortBy === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }
    // "popular" = original order, nothing to do

    return list;
  }, [courses, search, category, instructor, sortBy]);

  // reset to page 1 whenever the filter set changes,
  // otherwise users get stuck on an empty page 4.
  useEffect(() => {
    setPage(1);
  }, [search, category, instructor, sortBy]);

  // slice for the current page
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  // bundle everything we want to expose
  const value = {
    // data
    courses,
    filtered,
    paged,
    // ui state
    loading,
    error,
    // filters
    search, setSearch,
    category, setCategory,
    instructor, setInstructor,
    sortBy, setSortBy,
    categories,
    instructors,
    // pagination
    page: safePage,
    setPage,
    totalPages,
    pageSize: PAGE_SIZE,
  };

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

// little helper hook so components don't need to import the context directly
export function useCourses() {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error("useCourses must be used inside <CourseProvider>");
  return ctx;
}
