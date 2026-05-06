export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know the real cost of every<br />
          <span className="text-[#58a6ff]">AI-powered outcome</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Stop guessing your AI ROI. Correlate OpenAI spend with leads generated, bugs fixed, and features shipped — in one dashboard built for engineering leaders.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $49/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card required to explore.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["$0.003", "avg cost per lead"],
            ["$0.12", "avg cost per bug fix"],
            ["$1.40", "avg cost per feature"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-[#8b949e] text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            ["01", "Connect providers", "Webhook or API key ingestion from OpenAI, Anthropic, and more."],
            ["02", "Log outcomes", "Send business events — leads, deploys, tickets — via a simple REST API."],
            ["03", "See cost-per-outcome", "The dashboard correlates spend to outcomes automatically."]
          ].map(([num, title, desc]) => (
            <div key={num} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-mono text-sm mb-2">{num}</div>
              <div className="text-white font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e] text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt ingestion",
              "Up to 10 outcome event types",
              "Real-time cost-per-outcome dashboard",
              "OpenAI, Anthropic, Cohere support",
              "REST API + webhook integrations",
              "CSV export & Slack alerts"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which AI providers are supported?",
              "OpenAI, Anthropic, and Cohere are supported out of the box via API key or webhook. Additional providers can be added via our generic event API."
            ],
            [
              "How do I log business outcomes?",
              "Send a POST request to our /api/outcomes endpoint with your event type and timestamp. We handle the correlation automatically."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Prompt Cost Per Outcome. All rights reserved.
      </footer>
    </main>
  );
}
