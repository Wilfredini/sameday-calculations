"use client";

import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-full h-dvh flex justify-center items-center z-50">
      <h1 className="bg-black">LOADING</h1>
    </div>
  );
}
