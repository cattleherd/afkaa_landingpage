import Link from "next/link";
import RiveHero from "../rive-hero-privacy"; // adjust path if needed

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-300">
      
      {/* Header */}
      <header className="mx-auto flex max-w-3xl items-center justify-between px-[5%] py-8">
        <Link
          href="/"
          className="text-sm font-semibold text-white hover:opacity-70 transition"
        >
          ← Afkaa
        </Link>

        <span className="text-sm text-neutral-500">
          Privacy Policy
        </span>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-2xl px-[5%] pb-20">

        {/* --- RIVE ANIMATION (ADDED ONLY THIS BLOCK) --- */}
        <div className="w-full flex justify-center mb-8">
  <div className="w-[clamp(150px,18vw,200px)] aspect-square">
            <RiveHero />
          </div>
        </div>
        {/* ------------------------------------------------ */}

        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Privacy Policy
        </h1>

        <p className="mt-2 text-sm text-neutral-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Body */}
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed">
          
          <p>
            Afkaa is a language-learning app. This policy explains what we
            collect, how we use it, and what choices you have.
          </p>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              Information we collect
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-neutral-200">
                  App usage & diagnostics:
                </strong>{" "}
                basic performance data (like crashes) to keep the app working.
              </li>
              <li>
                <strong className="text-neutral-200">
                  Progress data:
                </strong>{" "}
                lesson progress and scores, stored to support your learning
                experience.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              How we use information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and improve the app (features and stability).</li>
              <li>To fix bugs and understand crashes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Sharing</h2>
            <p>
              We do not sell your personal information. If we use third-party
              services (for example, analytics or crash reporting), they process
              limited data only to help us run the app.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              Data retention
            </h2>
            <p>
              We keep data only as long as needed for the purposes above, unless
              a longer period is required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              Your choices
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You can uninstall the app at any time.</li>
              <li>
                If the app includes analytics settings, you can opt out where
                available.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              Children’s privacy
            </h2>
            <p>
              Afkaa is not designed to knowingly collect personal information
              from children without appropriate consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p>
              If you have questions about this policy, contact:{" "}
              <strong className="text-neutral-200">
                radwan@afkaa.com
              </strong>
            </p>
          </section>

        </div>
      </article>
    </main>
  );
}
