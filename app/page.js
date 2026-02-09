"use client";

import { useState } from "react";
import Link from "next/link";
import RiveHero from "./rive-hero";
import { GooglePlayButton } from "react-mobile-app-button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=YOUR.PACKAGE.NAME";

function FullscreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
    </div>
  );
}

export default function HomePage() {
  const [riveReady, setRiveReady] = useState(false);

  // Show ONLY loader until Rive is ready
  if (!riveReady) {
    return (
      <main className="min-h-screen bg-black">
        <FullscreenLoader />
        {/* Keep Rive mounted so it can load, but hide it */}
        <div className="absolute left-[-99999px] top-[-99999px] h-[1px] w-[1px] overflow-hidden">
          <RiveHero onReady={() => setRiveReady(true)} />
        </div>
      </main>
    );
  }

  // Actual site only renders after Rive is ready
  return (
    <main className="min-h-screen bg-black text-white px-[5%]">
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-[min(520px,100%)] flex flex-col items-center gap-[clamp(16px,3vh,28px)]">
          
          {/* Rive Hero (60vh) */}
          <div className="w-full h-[60vh] max-h-[600px] min-h-[260px]">
            <RiveHero />
          </div>

          {/* Google Play Button */}
          <div className="w-full flex justify-center">
            <GooglePlayButton
              url={PLAY_STORE_URL}
              theme="light"
              height={56}
              width={220}
              className="max-w-full"
            />
          </div>

          <Link
            href="/privacy"
            className="text-xs text-neutral-500 hover:text-neutral-300 pt-2"
          >
            Privacy & Terms
          </Link>
        </div>
      </section>
    </main>
  );
}
