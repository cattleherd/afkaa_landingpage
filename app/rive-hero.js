"use client";

import { useEffect } from "react";
import { useRive, Fit, Alignment } from "@rive-app/react-canvas";

export default function RiveHero({ onReady }) {
  const { rive, RiveComponent } = useRive({
    src: "/rive/afkaa-hero.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    fit: Fit.Contain,
    alignment: Alignment.Center,
  });

  useEffect(() => {
    if (rive) onReady?.();
  }, [rive, onReady]);

  return <RiveComponent className="w-full h-full block" />;
}
