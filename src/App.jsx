import { CourseProvider } from "@/context/CourseContext.jsx";
import Hero from "@/components/Hero.jsx";
import CoursesSection from "@/components/CoursesSection.jsx";

export default function App() {
  return (
    <CourseProvider>
      <main className="min-h-screen bg-background">
        <Hero />
        <CoursesSection />
        <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
          © 2026 Edutech, All Rights Reserved.
        </footer>
      </main>
    </CourseProvider>
  );
}
