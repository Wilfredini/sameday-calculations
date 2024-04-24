"use client";

import { FadeLoader } from "react-spinners";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <div className="w-full h-dvh dark:flex hidden justify-center items-center z-50">
        <FadeLoader color="#67E8F9" radius={8} />
      </div>
      <div className="w-full h-dvh flex dark:hidden justify-center items-center z-50">
        <FadeLoader color="#000" radius={8} />
      </div>
    </>
  );
}
