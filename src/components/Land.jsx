import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Testimonials from "@/components/Testimonials";
import WorkExperience from "@/components/WorkExperience";
import Approach from "./Approach";
// import Footer from "./Layout/Footer";
// import Navbar from "./Layout/Navbar";
import LoadingSpinner from "@/components/LoadingSpinner";
import Resume from "./Resume";

// Lazy load heavy components
// const LazyGlobe = lazy(() => import("./Globe"));
const LazyCanvasEffect = lazy(() => import("./CanvasEffect"));
const LazyProjects = lazy(() => import("./Projects"));

export default function Land() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Background elements that don't need suspense */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-amber-900 rounded-full filter blur-3xl"></div>
      </div>

      {/* <Navbar /> */}

      <main className="relative z-10">
        
        <Hero />
        <Resume/>
        <BentoGrid />

        <Suspense fallback={<LoadingSpinner text="Loading Projects..." />}>
          <LazyProjects />
        </Suspense>

        {/* <Suspense fallback={<LoadingSpinner text="Loading 3D Globe..." />}>
          <LazyGlobe />
        </Suspense> */}

        <Testimonials />
        <WorkExperience />
        <Approach />
      </main>

      <Suspense fallback={null}>
        <LazyCanvasEffect />
      </Suspense>

      {/* <Footer /> */}
    </div>
  );
}
