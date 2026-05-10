"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const SECURITY_EMAIL = "security@livepeer.foundation";
const IMMUNEFI_URL = "https://immunefi.com/bug-bounty/livepeer/";

const IN_SCOPE = [
  { label: "livepeer.org (this website)" },
  { label: "explorer.livepeer.org" },
  { label: "Developer dashboard & gateway services" },
];

const INC_SECURITY_EMAIL = "security@livepeer.org";

type OutOfScopeItem = {
  label: string;
  note?: string;
  description?: React.ReactNode;
};

const OUT_OF_SCOPE: OutOfScopeItem[] = [
  { label: "Smart contracts & on-chain protocol", note: "Report via Immunefi" },
  {
    label: "Livepeer Inc-operated products and subdomains",
    description: (
      <>
        Includes <code className="font-mono text-[12px] text-white/80">livepeer.studio</code>,{" "}
        <code className="font-mono text-[12px] text-white/80">livepeer.monster</code>, and any{" "}
        <code className="font-mono text-[12px] text-white/80">*.livepeer.org</code> subdomain
        not listed as in-scope above. Contact{" "}
        <a
          href={`mailto:${INC_SECURITY_EMAIL}`}
          className="text-white/80 underline-offset-4 hover:text-white hover:underline"
        >
          {INC_SECURITY_EMAIL}
        </a>
        .
      </>
    ),
  },
  { label: "Third-party products built on Livepeer", note: "Contact the operator" },
  { label: "Already-reported issues, social engineering, DoS / volumetric attacks" },
];

const AWARD_TERMS = [
  {
    title: "Discretionary",
    body: "Acknowledgment, swag, and any cash award are at the Foundation's sole discretion. Cash, if offered, is reserved for exceptional Critical or High findings — submission does not entitle you to compensation.",
  },
  {
    title: "Eligibility",
    body: "You must be 18 or the local age of majority, not an employee or contractor of the Foundation, and not on a sanctions list maintained by OFAC, the EU, or the UK. Awards, if any, may require identity verification.",
  },
  {
    title: "First reporter",
    body: "Only the first valid, original report of an issue is eligible. Duplicates and issues already known do not qualify.",
  },
  {
    title: "License to remediate",
    body: "By submitting a report, you grant the Foundation a perpetual, royalty-free license to use its contents to investigate and fix the issue.",
  },
  {
    title: "No relationship",
    body: "Participation does not create an employment, agency, or partnership relationship with the Foundation.",
  },
  {
    title: "Program changes",
    body: "The Foundation may modify or end the program at any time. Reports are evaluated under the rules in effect when submitted.",
  },
];

const REPORT_TIPS = [
  {
    num: "01",
    title: "Description & impact",
    body: "What the issue is, what an attacker could achieve, and which users or systems are affected.",
  },
  {
    num: "02",
    title: "Steps to reproduce",
    body: "Clear, minimal steps. Include URLs, payloads, request/response samples, or a short PoC.",
  },
  {
    num: "03",
    title: "Environment",
    body: "Browser, OS, account or wallet state, and the date / commit hash if you can identify it.",
  },
  {
    num: "04",
    title: "Suggested fix (optional)",
    body: "If you have a remediation idea, share it — it's appreciated, not required.",
  },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M12 3l8 3v6c0 4.5-3.2 8.4-8 9-4.8-.6-8-4.5-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SecurityPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden">
        <div className="tile-bg absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(24,121,78,0.12) 0%, transparent 70%)",
          }}
        />
        <Container className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-6 font-mono text-xs font-medium tracking-wider text-white/50 uppercase">
              Security Disclosure
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl text-balance">
              Report a vulnerability
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65 lg:text-xl text-pretty">
              We work with security researchers to keep the Livepeer network
              and its surrounding services safe. Two channels, depending on
              what you&apos;ve found.
            </p>
          </motion.div>
        </Container>
        <div className="divider-gradient absolute bottom-0 left-0 right-0" />
      </section>

      {/* ---- Reporting channels ---- */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeader
                label="Reporting Channels"
                title="Where to send your report"
                description="Pick the channel that matches what you found — the right one gets a faster response."
                align="center"
              />
            </motion.div>

            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {/* Protocol — Immunefi */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex flex-col rounded-xl border border-white/[0.07] bg-[#1a1a1a] p-8 lg:p-10"
              >
                <div className="flex items-center gap-3 text-green-bright">
                  <ShieldIcon />
                  <p className="font-mono text-[11px] tracking-wider text-white/40 uppercase">
                    01 — Protocol
                  </p>
                </div>
                <h3 className="mt-6 text-2xl font-medium leading-snug text-white lg:text-3xl">
                  Smart contracts &amp; on-chain protocol
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed">
                  On-chain protocol issues — contracts, staking, delegation,
                  reward logic — handled on Immunefi with cash bounties
                  scaled by severity.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/50">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green-bright" />
                    Cash bounties scaled by severity (Immunefi tiers)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green-bright" />
                    Triage and response handled on-platform
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green-bright" />
                    Coordinated disclosure timelines
                  </li>
                </ul>
                <div className="mt-8">
                  <Button href={IMMUNEFI_URL} target="_blank" rel="noopener noreferrer">
                    Open Immunefi program
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3.5 2H10v6.5M10 2L2 10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Button>
                </div>
              </motion.div>

              {/* Non-protocol — email */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex flex-col rounded-xl border border-white/[0.07] bg-[#1a1a1a] p-8 lg:p-10"
              >
                <div className="flex items-center gap-3 text-white/80">
                  <MailIcon />
                  <p className="font-mono text-[11px] tracking-wider text-white/40 uppercase">
                    02 — Non-protocol
                  </p>
                </div>
                <h3 className="mt-6 text-2xl font-medium leading-snug text-white lg:text-3xl">
                  Web, explorer &amp; developer services
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Issues in this website, the explorer, or Foundation-operated
                  developer services. Recognized with public acknowledgment,
                  swag, and our thanks — this is an informal program and
                  terms may evolve.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/50">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    Safe harbor for good-faith research
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    Acknowledgment, swag &amp; thanks for valid reports
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    We aim to respond within 5 business days
                  </li>
                </ul>
                <div className="mt-8">
                  <Button href={`mailto:${SECURITY_EMAIL}`} variant="secondary">
                    Email {SECURITY_EMAIL}
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ---- Scope ---- */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="divider-gradient absolute top-0 right-0 left-0" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeader
                label="Scope"
                title="What this program covers"
                align="split"
                description="Email scope is limited to Foundation-operated services. Anything else routes elsewhere."
              />
            </motion.div>

            <div className="mt-16 grid gap-4 md:grid-cols-2">
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-white/[0.07] bg-[#1a1a1a] p-8"
              >
                <p className="font-mono text-[11px] tracking-wider text-green-bright uppercase">
                  In scope
                </p>
                <ul className="mt-6 space-y-4">
                  {IN_SCOPE.map((item) => (
                    <li key={item.label} className="flex items-start gap-3 text-white/80">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-green-bright" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-white/[0.07] bg-[#1a1a1a] p-8"
              >
                <p className="font-mono text-[11px] tracking-wider text-white/40 uppercase">
                  Out of scope
                </p>
                <ul className="mt-6 space-y-4">
                  {OUT_OF_SCOPE.map((item) => (
                    <li key={item.label} className="flex items-start gap-3 text-white/70">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-white/30" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
                      </svg>
                      <div>
                        <span>{item.label}</span>
                        {item.note && (
                          <span className="ml-2 font-mono text-[11px] tracking-wider text-white/30 uppercase">
                            {item.note}
                          </span>
                        )}
                        {item.description && (
                          <p className="mt-2 text-sm leading-relaxed text-white/45">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ---- Report tips ---- */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="divider-gradient absolute top-0 right-0 left-0" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeader
                label="Writing a Report"
                title="What to include"
                description="Short but complete. The clearer the repro, the faster the fix."
                align="center"
              />
            </motion.div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {REPORT_TIPS.map((tip) => (
                <motion.div
                  key={tip.num}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border border-white/[0.07] bg-[#1a1a1a] p-6"
                >
                  <p className="font-mono text-[11px] tracking-wider text-white/25">
                    {tip.num}
                  </p>
                  <h3 className="mt-3 text-base font-medium text-white">{tip.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{tip.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ---- Safe harbor ---- */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="divider-gradient absolute top-0 right-0 left-0" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeader
                label="Safe Harbor"
                title="Researching in good faith"
                align="center"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12 rounded-xl border border-white/[0.07] bg-[#1a1a1a] p-8 lg:p-10"
            >
              <p className="text-white/70 leading-relaxed">
                Good-faith research that follows this policy is authorized.
                We won&apos;t pursue legal action, and we&apos;ll work with
                you to resolve the issue. Safe harbor applies only to systems
                listed as in-scope above — the Foundation cannot grant safe
                harbor over systems it does not operate.
              </p>
              <p className="mt-5 text-white/70 leading-relaxed">
                Good faith means: don&apos;t exfiltrate user data beyond what
                proves impact, don&apos;t degrade service, don&apos;t disclose
                publicly for at least 90 days after reporting (or until
                we&apos;ve fixed and acknowledged the issue, whichever is
                sooner), and don&apos;t use the finding for anything other
                than the report.
              </p>
              <p className="mt-5 text-sm text-white/40">
                Adapted from the{" "}
                <a
                  href="https://disclose.io/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 underline-offset-4 hover:text-white hover:underline"
                >
                  disclose.io Core Terms
                </a>
                .
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ---- Eligibility & award terms ---- */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="divider-gradient absolute top-0 right-0 left-0" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.05 }}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeader
                label="Eligibility & Award Terms"
                title="Program rules"
                align="center"
              />
            </motion.div>

            <motion.ol
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12 divide-y divide-white/[0.06] rounded-xl border border-white/[0.07] bg-[#1a1a1a]"
            >
              {AWARD_TERMS.map((term, i) => (
                <li key={term.title} className="flex gap-6 p-6 sm:p-8">
                  <span className="font-mono text-[11px] tracking-wider text-white/25 pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-white">{term.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{term.body}</p>
                  </div>
                </li>
              ))}
            </motion.ol>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-6 text-center text-xs text-white/35"
            >
              Smart contract reports are governed by the{" "}
              <a
                href={IMMUNEFI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 underline-offset-4 hover:text-white hover:underline"
              >
                Immunefi program rules
              </a>
              , not these terms.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ---- Final CTA ---- */}
      <section className="relative py-20 sm:py-28 lg:py-32">
        <div className="divider-gradient absolute top-0 right-0 left-0" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Found something? Thank you.
            </h2>
            <p className="mt-5 text-lg text-white/55 text-pretty">
              Researchers who help keep the network safe make the whole
              ecosystem stronger.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={IMMUNEFI_URL} target="_blank" rel="noopener noreferrer">
                Protocol report
              </Button>
              <Button href={`mailto:${SECURITY_EMAIL}`} variant="secondary">
                Email security@
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
