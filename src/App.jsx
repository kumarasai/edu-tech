// ------------------------------------------------------------------
// Main App - composes the Hero + CoursesSection inside the
// CourseProvider so they all share the same global state.
// ------------------------------------------------------------------

import { CourseProvider } from "@/context/CourseContext.jsx";
import Hero from "@/components/Hero.jsx";
import CoursesSection from "@/components/CoursesSection.jsx";

export default function App() {
  return (
    <CourseProvider>
      <main className="min-h-screen bg-background">
        {/* hero with the big CTA */}
        <Hero />

        {/* the actual course directory */}
        <CoursesSection />

        {/* tiny footer */}
        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          © 2026  Edutech, All Rights Reserved.
        </footer>
      </main>
    </CourseProvider>
  );
}
