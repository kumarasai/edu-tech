import { createContext, useContext, useEffect, useMemo, useState } from "react";
import mockCourses from "@/data/courses.js";

const CourseContext = createContext(null);
const PAGE_SIZE = 6;

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [instructor, setInstructor] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [page, setPage] = useState(1);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    const timer = setTimeout(() => {
      if (!alive) return;
      try {
        setCourses(mockCourses);
        setError(null);
      } catch (e) {
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

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(courses.map((c) => c.category)))],
    [courses]
  );

  const instructors = useMemo(
    () => ["All", ...Array.from(new Set(courses.map((c) => c.instructor)))],
    [courses]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = courses.filter((c) => {
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.instructor.toLowerCase().includes(q);
      const matchesCategory = category === "All" || c.category === category;
      const matchesInstructor = instructor === "All" || c.instructor === instructor;
      return matchesSearch && matchesCategory && matchesInstructor;
    });

    if (sortBy === "name") {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "rating") {
      return [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [courses, search, category, instructor, sortBy]);

  useEffect(() => {
    setPage(1);
  }, [search, category, instructor, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const value = {
    courses,
    filtered,
    paged,
    loading,
    error,
    search,
    setSearch,
    category,
    setCategory,
    instructor,
    setInstructor,
    sortBy,
    setSortBy,
    categories,
    instructors,
    page: safePage,
    setPage,
    totalPages,
    pageSize: PAGE_SIZE,
  };

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

export function useCourses() {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error("useCourses must be used inside <CourseProvider>");
  return ctx;
}
