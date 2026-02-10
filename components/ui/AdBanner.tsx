"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export default function AdBanner() {
  const adRef = useRef<HTMLModElement | null>(null);
  const hasLoadedAd = useRef(false);

  useEffect(() => {
    if (adRef.current && !hasLoadedAd.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        hasLoadedAd.current = true;
      } catch (e) {
        console.error("Error loading ad:", e);
        console.log("Error loading ad:", e);
      }
    }
  }, []);

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4217692983616180"
        data-ad-slot="9233231728"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
