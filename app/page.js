"use client";

import { useState } from "react";
import Link from "next/link";
import RiveHero from "./rive-hero";
import { GooglePlayButton } from "react-mobile-app-button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=YOUR.PACKAGE.NAME";

/*
------------------------------------------------------------------------------
 FullscreenLoader
------------------------------------------------------------------------------
*/
function FullscreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
    </div>
  );
}

export default function HomePage() {
  // Global loading state controlled by Rive readiness (rive-hero)
  const [riveReady, setRiveReady] = useState(false);

  /*
  ---------------------------------------------------------------------------
  LOADING PHASE

  Only show the loader UI while Rive is loading.
  ---------------------------------------------------------------------------
  */
  if (!riveReady) {
    return (
      <main className="min-h-screen bg-black">
        {/* Visible loader */}
        <FullscreenLoader />

        {/* 
            Rive must be mounted in the DOM to load. 
            useRive loads the file asynchronously and creates the rive instance.
            When the rive instance becomes available, RiveHero calls onReady(),
            which updates the parent loading state and removes the loader. 
        */}

        <div className="opacity-0 overflow-hidden">
          <RiveHero onReady={() => setRiveReady(true)} />
        </div>
      </main>
    );
  }

  /*
  ---------------------------------------------------------------------------
  READY PHASE

  Rive is fully loaded and ready. We now render the actual website UI.
  ---------------------------------------------------------------------------
  */
  return (
    <main className="min-h-screen bg-black text-white px-[5%]">
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-[min(520px,100%)] flex flex-col items-center gap-[clamp(16px,3vh,28px)]">
          {/* Rive Hero Animation */}
          <div className="w-full h-[60vh] max-h-[600px] min-h-[260px]">
            <RiveHero />
          </div>

          {/* Google Play Store Download Button */}
          <div className="w-full flex justify-center">
            <GooglePlayButton
              url={PLAY_STORE_URL}
              theme="light"
              height={56}
              width={220}
              className="max-w-full"
            />
          </div>

          {/* Footer Navigation */}
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
