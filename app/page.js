"use client";

import { useState } from "react";
import Link from "next/link";
import RiveHero from "./rive-hero";
import { GooglePlayButton } from "react-mobile-app-button";
import { AnimatePresence, motion } from "framer-motion";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=YOUR.PACKAGE.NAME";

function FullscreenLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
    </motion.div>
  );
}

export default function HomePage() {
  const [riveReady, setRiveReady] = useState(false);

  return (
    <>
      {/* Full-screen spinner until Rive is ready */}
      <AnimatePresence>
        {!riveReady && <FullscreenLoader />}
      </AnimatePresence>

      {/* Whole site fades in when ready */}
      <motion.main
        className="min-h-screen bg-black text-white px-[5%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: riveReady ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <section className="min-h-screen flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-[min(520px,100%)] flex flex-col items-center gap-[clamp(16px,3vh,28px)]">

            {/* Rive Hero (60vh) */}
            <div className="w-full h-[60vh] max-h-[600px] min-h-[260px]">
              <RiveHero onReady={() => setRiveReady(true)} />
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
      </motion.main>
    </>
  );
}
