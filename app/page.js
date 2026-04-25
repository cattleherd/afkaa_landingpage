"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Gamepad2, Cpu, Workflow } from "lucide-react";
import { useRive, Fit, Alignment } from "@rive-app/react-canvas";

export default function AfkaaPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 18, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 110, damping: 14 },
    },
  };

  return (
    <div className="min-h-screen bg-[#FFCA45] overflow-y-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-4xl px-6 sm:px-10 pt-24 pb-32 text-yellow-950"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.82] mb-6">
            Afkaa
          </h1>
          <p className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight max-w-2xl">
            A fun, gamified app that makes learning Somali feel like play.
          </p>
        </motion.div>

        {/* Why Afkaa */}
        <motion.div
          variants={itemVariants}
          className="mb-16 space-y-6 max-w-3xl text-lg leading-relaxed"
        >
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide mb-6">
            Why Afkaa?
          </h3>
          <p className="italic opacity-90">
            Without active use, a language can fade within a single generation.
            Many young people in Western countries grow up unable to speak their
            mother tongue, which can weaken their sense of identity, belonging,
            and connection to their elders, culture, and history. Afkaa exists
            to help close that gap, by making learning Somali intuitive,
            engaging, and genuinely enjoyable.
          </p>
        </motion.div>

        {/* Feature blocks */}
        <motion.div variants={itemVariants} className="space-y-20">
          <RiveStoryBlock
            label="Gamification"
            title="Motivation by design"
            desc="Multiple interaction-based game types with built-in scoring track learner progress in real time, while unlocking lessons creates a clear, motivating path forward."
            icon={Gamepad2}
            src="/game.riv"
          />
          <RiveStoryBlock
            label="Curriculum"
            title="15+ hours of content"
            desc="15+ hours of structured lessons covering vocabulary, grammar, and everyday Somali. Explained ELI5-style with zero assumptions, built for English speakers."
            icon={Workflow}
            src="/glasses.riv"
          />
          <RiveStoryBlock
            label="Learning Science"
            title="Review. Practice. Active learning."
            desc="Lessons are generated from a topic-based question bank with randomized game order, and incorrect answers are replayed immediately to reinforce learning."
            icon={Cpu}
            src="/time.riv"
          />

          {/* Beta Tester Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            className="border-t-2 border-yellow-950/15 pt-16"
          >
            <div className="space-y-10">
              <div className="space-y-3">
                <p className="text-xs font-black uppercase tracking-widest opacity-60">
                  Beta Program
                </p>
                <h3 className="text-3xl sm:text-4xl font-black uppercase italic leading-tight">
                  Help us build it.
                </h3>
                <p className="text-lg opacity-85 leading-relaxed max-w-2xl">
                  Afkaa is in active development. Join the beta to get early
                  access on Android, shape features before launch, and be part
                  of a community that cares about keeping Somali alive.
                </p>
              </div>

              {/* Screenshot carousel */}
              <div className="relative overflow-hidden">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                  className="flex gap-3 sm:gap-5 w-max"
                >
                  {[
                    ...["1.png", "2.png", "3.png", "4.png", "5.png"],
                    ...["1.png", "2.png", "3.png", "4.png", "5.png"],
                  ].map((filename, i) => (
                    <div
                      key={i}
                      className="aspect-[9/16] w-32 sm:w-40 shrink-0 rounded-2xl bg-yellow-950/8 border-2 border-dashed border-yellow-950/20 overflow-hidden"
                    >
                      <img src={`/${filename}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-widest opacity-60">
                  How to join
                </p>
                <div className="space-y-3">
                  {[
                    {
                      step: "01",
                      text: "Join the testers group",
                      sub: "Registers you as an authorized tester with Google",
                      href: "https://groups.google.com/g/afkaa-testers",
                      cta: "Join group",
                      img: "info1.webp",
                    },
                    {
                      step: "02",
                      text: "Opt in to the beta",
                      sub: "Click 'Become a tester' on the Play Store page",
                      href: "https://play.google.com/apps/testing/com.anonymous.afkaa",
                      cta: "Opt in",
                      img: "info2.webp",
                    },
                    {
                      step: "03",
                      text: "Download & play",
                      sub: "Install from the Play Store link on that same page",
  href: "https://play.google.com/apps/testing/com.anonymous.afkaa",
  cta: "Download",
                      img: "info3.webp",
                    },
                  ].map(({ step, text, sub, href, cta, img }) => (
                    <StepRow
                      key={step}
                      step={step}
                      text={text}
                      sub={sub}
                      href={href}
                      cta={cta}
                      img={img}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
          
        </motion.div>
        <footer className="border-t border-yellow-950/15 pt-8 flex items-center justify-between">
  <p className="text-xs font-black uppercase tracking-widest opacity-40">Afkaa - 2026</p>
  <a
    href="/privacy"
    className="text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-80 transition-opacity"
  >
    Privacy Policy
  </a>
</footer>
      </motion.div>
    </div>
  );
}

function StepRow({ step, text, sub, href, cta, img }) {
  return (
    <div className="flex items-stretch gap-4">
      <div className="flex-1 flex flex-col justify-between p-4 rounded-2xl bg-yellow-950/5 border border-yellow-950/10">
        <div className="space-y-1">
          <span className="text-xs font-black opacity-30">{step}</span>
          <p className="font-black text-sm uppercase tracking-wide">{text}</p>
          <p className="text-sm opacity-60 mt-0.5">{sub}</p>
        </div>
        {href && cta && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-3 bg-yellow-950 text-yellow-50 rounded-xl text-xs font-black uppercase tracking-wider mt-4"
          >
            {cta}
          </a>
        )}
      </div>
      <img
        src={`/${img}`}
        className="w-[calc(50%-0.5rem)] aspect-square rounded-2xl object-cover shrink-0"
      />
    </div>
  );
}

function RiveStoryBlock({
  label,
  title,
  desc,
  icon: Icon,
  src,
  stateMachine = "State Machine 1",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  const { RiveComponent } = useRive(
    inView
      ? {
          src,
          stateMachines: stateMachine,
          autoplay: true,
          fit: Fit.Contain,
          alignment: Alignment.Center,
        }
      : { src: "" }
  );

  return (
    <section ref={ref} className="space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ amount: 0.35, once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-xl bg-yellow-950/10 border border-yellow-950/20 flex items-center justify-center">
            <Icon size={20} strokeWidth={2.3} />
          </div>
          <p className="text-xs font-black uppercase tracking-widest opacity-70">{label}</p>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase italic leading-tight">{title}</h3>
        <p className="text-base sm:text-lg leading-relaxed opacity-85 mt-2">{desc}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ amount: 0.35, once: true }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
        className="w-full"
      >
        <div className="w-full aspect-[16/9] sm:aspect-[21/9]">
          {inView ? <RiveComponent className="w-full h-full block" /> : null}
        </div>
      </motion.div>
    </section>
  );
}