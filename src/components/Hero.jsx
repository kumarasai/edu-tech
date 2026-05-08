// ------------------------------------------------------------------
// Big colourful hero section. The CTA smooth-scrolls to the courses
// list lower on the page (the user asked for: "if i clicked then it
// moves courses").
// ------------------------------------------------------------------

import { useCourses } from "@/context/CourseContext.jsx";

export default function Hero() {
  const { courses } = useCourses();

  // Scroll the page to the #courses section. Smooth scrolling is
  // already enabled globally in styles.css via `html { scroll-behavior }`.
  const goToCourses = () => {
    const el = document.getElementById("courses");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-br from-hero-from via-hero-via to-hero-to
        text-primary-foreground
      "
    >
      {/* soft floating blobs for depth - purely decorative */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float [animation-delay:2s]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-wide backdrop-blur animate-fade-up">
          🎓 Learn from {courses.length || "20+"} curated courses
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight animate-fade-up [animation-delay:80ms]">
          Level up your skills with the{" "}
          <span className="text-accent">Edutech</span> course directory.
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/80 animate-fade-up [animation-delay:160ms]">
          Browse, filter and discover hand-picked courses across web, mobile,
          design, data science and more. Find the perfect course in seconds.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:240ms]">
          {/* Primary CTA - scrolls to courses */}
          <button
            onClick={goToCourses}
            className="
              group inline-flex items-center gap-2 rounded-xl
              bg-accent px-6 py-3 text-accent-foreground font-semibold
              shadow-lg shadow-black/20
              transition-all duration-300
              hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]
            "
          >
            Browse Courses
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          {/* Secondary CTA - also scrolls, just styled differently */}
          <button
            onClick={goToCourses}
            className="
              inline-flex items-center gap-2 rounded-xl
              border border-white/30 bg-white/5 px-6 py-3 font-medium
              backdrop-blur transition-colors duration-300
              hover:bg-white/10
            "
          >
            See what's popular
          </button>
        </div>

        {/* tiny stats strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg animate-fade-up [animation-delay:320ms]">
          <Stat label="Courses" value={`${courses.length || 20}+`} />
          <Stat label="Instructors" value="10+" />
          <Stat label="Avg. rating" value="4.7★" />
        </div>
      </div>
    </section>
  );
}

// small presentational helper - kept local since it's only used here
function Stat({ label, value }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold">{value}</div>
      <div className="text-xs uppercase tracking-wider text-primary-foreground/70">
        {label}
      </div>
    </div>
  );
}
