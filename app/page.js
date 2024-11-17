"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Using the Next.js router for redirection

export default function Page() {
  const router = useRouter(); // Initialize Next.js router

  // Redirect function for click and Enter key
  const handleRedirect = () => {
    router.push("/pages/Home");
  };

  useEffect(() => {
    // Adding event listeners for click and Enter key
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleRedirect();
      }
    };

    // document.addEventListener("click", handleRedirect);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listeners on component unmount
    return () => {
      // document.removeEventListener("click", handleRedirect);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Full-screen video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/gojo.mp4" type="video/mp4" />
        {/* Provide other video formats as fallback if needed */}
        <source src="/gojo.mp4" type="video/webm" />
      </video>

      {/* Your content */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-white">Welcome to the Home Page</h1>
        </main>
      </div>
    </div>
  );
}
