"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function RiveHero() {
  const { RiveComponent } = useRive({
    src: "/rive/afkaa-hero-privacy.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  return <RiveComponent className="w-full h-full block" />;
}
