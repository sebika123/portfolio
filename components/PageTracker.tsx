"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // @ts-ignore
    if (typeof window.gtag !== "undefined") {
      // @ts-ignore
      window.gtag("config", "G-8PVB9LVSH8", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
