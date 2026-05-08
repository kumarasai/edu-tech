// ------------------------------------------------------------------
// One course card. Pure presentational - takes a `course` prop and
// renders it. No state, no context.
// ------------------------------------------------------------------

export default function CourseCard({ course }) {
  return (
    <article
      className="
        group relative flex flex-col overflow-hidden rounded-2xl
        border border-border bg-card p-6 shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:border-primary/30
        animate-pop
      "
    >
      {/* category pill + rating row */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          {course.category}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground">
          <span className="text-accent">★</span>
          {course.rating.toFixed(1)}
        </span>
      </div>

      {/* title */}
      <h3 className="mt-4 text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
        {course.name}
      </h3>

      {/* instructor */}
      <p className="mt-1 text-sm text-muted-foreground">
        by <span className="font-medium text-foreground">{course.instructor}</span>
      </p>

      {/* meta row */}
      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="inline-flex items-center gap-1 text-muted-foreground">
          ⏱ {course.duration}
        </span>
        <span className="font-bold text-foreground">₹{course.price}</span>
      </div>

      {/* enroll CTA - just a visual flourish, not wired up to anything */}
      <button
        className="
          mt-6 w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold
          text-primary-foreground transition-all duration-300
          hover:bg-primary/90 hover:shadow-md active:scale-[0.98]
        "
      >
        Enroll now
      </button>
    </article>
  );
}
