"use client";
import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load heavy components
const Hero = lazy(() => import("./Hero"));
const About = lazy(() => import("./About"));
const Approach = lazy(() => import("./Approach"));
const Services = lazy(() => import("./Service"));
const WorkExperience = lazy(() => import("./WorkExperience"));
const Projects = lazy(() => import("./Projects"));
const BentoGrid = lazy(() => import("./BentoGrid"));
const Testimonials = lazy(() => import("./Testimonials"));
const Resume = lazy(() => import("./Resume"));
const Contact = lazy(() => import("./Contact"));
const CanvasEffect = lazy(() => import("./CanvasEffect"));

export default function Land() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-amber-900 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Main content with suspense fallbacks */}
      <main className="relative z-10">
        <Suspense fallback={<LoadingSpinner text="Loading Hero Section..." />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading About Section..." />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading Approach..." />}>
          <Approach />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading Services..." />}>
          <Services />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading Experience..." />}>
          <WorkExperience />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading Projects..." />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading Bento Grid..." />}>
          <BentoGrid />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading Testimonials..." />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading Resume..." />}>
          <Resume />
        </Suspense>

        <Suspense fallback={<LoadingSpinner text="Loading Contact..." />}>
          <Contact />
        </Suspense>
      </main>

      {/* Canvas background effect */}
      <Suspense fallback={null}>
        <CanvasEffect />
      </Suspense>
    </div>
  );
}