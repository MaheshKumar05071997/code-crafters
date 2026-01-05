"use client";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";

export default function HeroAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // This is a reliable URL for a coding animation
    fetch("/hero-anim.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Animation Error:", err));
  }, []);

  // Show a placeholder while loading (so you know it's working)
  if (!animationData) {
    return (
      <div className="flex items-center justify-center w-full h-64 bg-slate-900/50 rounded-xl border border-gray-800">
        <p className="text-teal-400 animate-pulse">Loading Animation...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-full h-full drop-shadow-2xl"
      />
    </div>
  );
}
