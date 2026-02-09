"use client";

import { useState } from "react";
import Link from "next/link";
import RiveHero from "./rive-hero";
import { GooglePlayButton } from "react-mobile-app-button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=YOUR.PACKAGE.NAME";

function Spinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
    </div>
  );
}

export default function HomePage() {
  const [riveReady, setRiveReady] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white px-[5%]">
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-[min(520px,100%)] flex flex-col items-center gap-[clamp(16px,3vh,28px)]">

          {/* Rive Hero (60vh) */}
          <div className="relative w-full h-[60vh] max-h-[600px] min-h-[260px]">
            
            {!riveReady && <Spinner />}

            <div
              className={`w-full h-full transition-opacity duration-300 ${
                riveReady ? "opacity-100" : "opacity-0"
              }`}
            >
              <RiveHero onReady={() => setRiveReady(true)} />
            </div>

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
