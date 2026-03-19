import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Reading — u-Kama",
  description:
    "Canonical doctrinal material, structural definitions, and reference material for the u-Kama ecological economic architecture.",
};

export default function Reading() {
  return (
    <>
      <Nav />

      {/* ---- Header ---- */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">u-Kama</Link> &nbsp;/&nbsp; Reading
          </div>
          <h1 className={styles.title}>Canonical Reading</h1>
          <p className={styles.subtitle}>
            Coordinating value under ecological constraint. Doctrinal
            definitions, structural principles, and reference material for the
            u-Kama architecture.
          </p>
        </div>
      </header>
      <div className={styles.headerImage}>
        <Image
          src="/images/layers.jpg"
          alt="Tiered ecological knowledge architecture"
          width={900}
          height={1350}
          className={styles.headerImg}
        />
      </div>

      {/* ---- Content ---- */}
      <div className={styles.content}>
        {/* Table of Contents */}
        <nav className={styles.toc}>
          <div className={styles.tocTitle}>Contents</div>
          <ol className={styles.tocList}>
            <li className={styles.tocItem}>
              <a href="#coordination-problem">
                The Ecological Coordination Problem
              </a>
            </li>
            <li className={styles.tocItem}>
              <a href="#philosophical-foundations">Philosophical Foundations</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#ecological-reality">Ecological Reality</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#knowledge-system">Ecological Knowledge System</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#state-machine">Ecological State Machine</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#memory-layer">Ecological Memory Layer</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#economic-coordination">Economic Coordination Layer</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#governance">Governance Architecture</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#community">Community Architecture</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#external-interface">External Interface</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#system-integrity">System Integrity</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#glossary">Glossary</a>
            </li>
          </ol>
        </nav>

        {/* ---- Part I: Introduction ---- */}
        <section id="coordination-problem" className={styles.chapter}>
          <div className={styles.chapterLabel}>Part I — Introduction</div>
          <h2 className={styles.chapterTitle}>
            The Ecological Coordination Problem
          </h2>
          <div className={styles.prose}>
            <p>
              Current financial systems are structurally incapable of
              coordinating the protection of ecosystems. This is not a failure
              of intention — it is a mechanical failure. Modern monetary systems
              suffer from four fundamental deficiencies: post-issuance proof
              failure, temporal discipline failure, spatial accountability
              failure, and incentive distortion.
            </p>
            <p>
              Post-issuance proof failure means that once value is created
              within conventional systems, there is no requirement that the
              ecological conditions which justified that value continue to hold.
              Temporal discipline failure means that monetary systems operate on
              cycles disconnected from ecological time. Spatial accountability
              failure means that value can be extracted from one location and
              its consequences externalised to another. Incentive distortion
              means that the system rewards ecological degradation more reliably
              than ecological protection.
            </p>
            <p>
              u-Kama does not attempt to fix these failures from within the
              existing monetary paradigm. It reverses the foundational
              relationship: ecology constrains economics. Nature determines the
              boundary of legitimate economic activity — not the reverse.
            </p>
            <p>
              Three core operating principles are locked at the foundation:
              ecology constrains economics; doctrine constrains finance; failure
              modes are defined in advance.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Part II: Philosophical Foundations ---- */}
        <section id="philosophical-foundations" className={styles.chapter}>
          <div className={styles.chapterLabel}>
            Part II — Philosophical Foundations
          </div>
          <h2 className={styles.chapterTitle}>Ecology as Primary Constraint</h2>
          <div className={styles.prose}>
            <p>
              Nature determines the boundary of legitimate economic activity.
              This is not a policy preference or ethical aspiration — it is the
              foundational axiom from which the entire architecture proceeds.
              Ecological limits are not externalities to be priced. They are
              constraints that cannot be crossed.
            </p>
          </div>

          <h3 className={styles.subheading}>Trias Natura</h3>
          <div className={styles.prose}>
            <p>
              The foundation of ecological knowledge rests on three pillars:
              measurement, verification, and memory. Truth emerges only when
              these three remain coherent. If any one fails — if measurement is
              inaccurate, verification is compromised, or memory is incomplete —
              the system does not approximate. It withholds determination.
            </p>
          </div>

          <h3 className={styles.subheading}>Truth Tests</h3>
          <div className={styles.prose}>
            <p>
              Ecological truth within u-Kama is validated against three tests:
              logical consistency (the observation must not contradict
              established ecological law), empirical adequacy (the observation
              must correspond to measurable reality), and experiential relevance
              (the observation must be meaningful within the context of the
              ecological cell in question).
            </p>
          </div>

          <h3 className={styles.subheading}>Rule of Five Stability Principle</h3>
          <div className={styles.prose}>
            <p>
              System stability emerges from five structural layers: ecology,
              knowledge, witnessing, state determination, and memory. Five is
              the minimum number of independent positions required for
              distributed resilience without centralised coordination.
            </p>
          </div>

          <h3 className={styles.subheading}>Prime Structure</h3>
          <div className={styles.prose}>
            <p>
              The system&apos;s deepest structure can be expressed through
              primes: 1 — Ecology. 3 — Truth recognition. 5 — Coordination
              under constraint. This is not numerology; it is the observation
              that the system&apos;s irreducible components map onto the first
              three primes.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Part III: Ecological Reality ---- */}
        <section id="ecological-reality" className={styles.chapter}>
          <div className={styles.chapterLabel}>Part III — Ecological Reality</div>
          <h2 className={styles.chapterTitle}>
            What Is Being Protected and Regenerated
          </h2>

          <h3 className={styles.subheading}>Five Ecosystem Processes</h3>
          <div className={styles.prose}>
            <p>
              Ecological reality within u-Kama is assessed through five
              fundamental processes: energy capture, the water cycle, the
              nutrient cycle, biological community dynamics, and time continuity.
              These five processes define the health and trajectory of every
              ecological cell.
            </p>
          </div>

          <h3 className={styles.subheading}>Ecological Cells</h3>
          <div className={styles.prose}>
            <p>
              The ecological cell is the spatial unit of observation — an
              immutable polygon boundary defined by ecological reality, not by
              jurisdictional or corporate structure. Each cell operates
              semi-autonomously within doctrinal constraints, with its own
              evaluation rhythm, stewardship roles, and relationship to the
              broader system.
            </p>
          </div>

          <h3 className={styles.subheading}>Ecological Stress Windows</h3>
          <div className={styles.prose}>
            <p>
              Observation occurs through pentad intervals — five-day ecological
              evaluation cycles. These stress windows are the fundamental
              temporal unit within which ecological state is assessed, recorded,
              and attested.
            </p>
          </div>

          <h3 className={styles.subheading}>Seasonal Gate</h3>
          <div className={styles.prose}>
            <p>
              Seasonal endpoints are determined by ecological regime transition,
              not calendar convention. At seasonal boundaries, pentad
              observations are aggregated into broader assessments, and the
              system confirms that current operations remain within doctrinal
              constraint.
            </p>
          </div>

          <h3 className={styles.subheading}>
            Canonical Ecological Condition Clause
          </h3>
          <div className={styles.prose}>
            <p>
              Protection requires non-acceleration of entropy. Regeneration
              requires directional improvement in energy capture and biological
              community under uninterrupted protection. These conditions are
              non-negotiable and structurally enforced.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Part IV: Knowledge System ---- */}
        <section id="knowledge-system" className={styles.chapter}>
          <div className={styles.chapterLabel}>
            Part IV — Ecological Knowledge System
          </div>
          <h2 className={styles.chapterTitle}>
            From Observation to Ecological Truth
          </h2>

          <h3 className={styles.subheading}>Tritestium</h3>
          <div className={styles.prose}>
            <p>
              Tritestium establishes three independent witness classes: human
              witnesses (direct observation by trained individuals present on
              the land), observational witnesses (remote sensing, drone,
              satellite, and instrument-based observation), and laboratory
              witnesses (analytical verification of samples and data). Each
              class operates independently. Agreement strengthens confidence.
              Conflict increases the verification burden.
            </p>
          </div>

          <h3 className={styles.subheading}>Witness Independence</h3>
          <div className={styles.prose}>
            <p>
              Witnesses must remain structurally independent. No entity that
              holds a stewardship role, financial position, or operational
              interest within a cell may serve as its witness. This is not a
              soft requirement — it is architecturally enforced. Conflict of
              interest is not managed; it is prevented.
            </p>
          </div>

          <h3 className={styles.subheading}>Contradiction Resolution</h3>
          <div className={styles.prose}>
            <p>
              When witness classes produce conflicting evidence, the
              verification burden increases rather than averaging. The system
              does not resolve contradictions by compromise. It demands
              additional evidence until coherence is re-established, or it
              withholds determination. The more constraining interpretation
              prevails.
            </p>
          </div>

          <h3 className={styles.subheading}>Artificial Intelligence Boundary</h3>
          <div className={styles.prose}>
            <p>
              Artificial intelligence may assist analytical processes within the
              system — data collection, pattern detection, administrative
              coordination — but it does not function as a witness. Attestation
              requires human presence, judgement, and accountability. AI may
              support the system; it may not attest on its behalf.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Part V: State Machine ---- */}
        <section id="state-machine" className={styles.chapter}>
          <div className={styles.chapterLabel}>
            Part V — Ecological State Machine
          </div>
          <h2 className={styles.chapterTitle}>The Ecological Boolean Gate</h2>
          <div className={styles.prose}>
            <p>
              Ecological state reduces to two binary determinations: Protected
              or Not Protected. Regenerating or Not Regenerating. There is no
              gradient, no partial compliance, no probability score. The system
              requires categorical clarity.
            </p>
          </div>

          <h3 className={styles.subheading}>Pentad State Evaluation</h3>
          <div className={styles.prose}>
            <p>
              Ecological state is determined every five days. Within each pentad
              cycle, observations from all three witness classes are collected,
              verified against the truth tests, and resolved into a boolean
              state determination.
            </p>
          </div>

          <h3 className={styles.subheading}>Proof Mechanisms</h3>
          <div className={styles.prose}>
            <p>
              Three proof mechanisms govern transitions between ecological
              states. <strong>Proof of Rehabilitation (PoRH)</strong> governs
              the transition from degraded to protected condition — the initial
              threshold. <strong>Proof of Protection (PoP)</strong> attests
              continuous ecological protection under stress — maintenance of
              the protected state. <strong>Proof of Regeneration (PoR)</strong>{" "}
              attests directional ecological improvement — active regeneration
              beyond mere protection.
            </p>
            <p>
              These proofs are sequential: PoRH → PoP → PoR. A cell cannot
              claim regeneration without first demonstrating protection, and
              cannot claim protection without first demonstrating rehabilitation
              from degraded baseline.
            </p>
          </div>

          <h3 className={styles.subheading}>Seasonal State Resolution</h3>
          <div className={styles.prose}>
            <p>
              At seasonal boundaries, pentad observations are aggregated into a
              seasonal determination. This resolution determines eligibility for
              BIO issuance. A cell that fails seasonal resolution does not
              receive issuance — the system contracts rather than
              accommodating.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Part VI: Memory Layer ---- */}
        <section id="memory-layer" className={styles.chapter}>
          <div className={styles.chapterLabel}>
            Part VI — Ecological Memory Layer
          </div>
          <h2 className={styles.chapterTitle}>Recording Ecological State</h2>
          <div className={styles.prose}>
            <p>
              Ecological observation must become durable memory. The memory
              layer transforms verified observations into permanent,
              irreversible records through a structured pipeline.
            </p>
          </div>

          <h3 className={styles.subheading}>Base Granular Units (BGU)</h3>
          <div className={styles.prose}>
            <p>
              The BGU is the metric used to write the ecological state of a
              cell to the blockchain. Each BGU represents a single granular
              observation at a specific time and location — the atomic unit of
              ecological memory.
            </p>
          </div>

          <h3 className={styles.subheading}>
            Ecological Verification Units (EVU)
          </h3>
          <div className={styles.prose}>
            <p>
              An EVU records that a BGU observation has been independently
              witnessed and verified through the Tritestium process. The
              transition from BGU to EVU represents the moment when raw
              observation becomes verified ecological knowledge.
            </p>
          </div>

          <h3 className={styles.subheading}>
            Bio Dynamic Regeneration Record (BDR)
          </h3>
          <div className={styles.prose}>
            <p>
              The BDR represents ecological memory stored through time. It is
              non-financial, non-transferable, and irreversible. Once ecological
              state is recorded in the BDR, it cannot be altered, liquidated, or
              leveraged. The BDR is the anchor of the system&apos;s ecological
              commitment — it holds what has been verified without converting it
              into financial value.
            </p>
          </div>

          <h3 className={styles.subheading}>
            Ecological Difficulty Adjustment (EDA)
          </h3>
          <div className={styles.prose}>
            <p>
              Ecological success tightens future issuance conditions. As the
              system matures and ecological cells demonstrate sustained
              protection and regeneration, the threshold for further issuance
              rises. The system becomes harder to satisfy over time — the
              opposite of conventional monetary systems that loosen under
              pressure.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Part VII: Economic Coordination ---- */}
        <section id="economic-coordination" className={styles.chapter}>
          <div className={styles.chapterLabel}>
            Part VII — Economic Coordination Layer
          </div>
          <h2 className={styles.chapterTitle}>BIO and the Membrane</h2>
          <div className={styles.prose}>
            <p>
              BIO coordinates economic behaviour under ecological constraint. It
              is not a currency, not an investment, not a store of speculative
              value. It is a coordination instrument that operates under strict
              conditions.
            </p>
          </div>

          <h3 className={styles.subheading}>Issuance Eligibility</h3>
          <div className={styles.prose}>
            <p>
              Issuance is permitted only under a valid Protection state, as
              confirmed through seasonal state resolution. No ecological
              protection, no issuance. This constraint is absolute.
            </p>
          </div>

          <h3 className={styles.subheading}>Issuance Envelope</h3>
          <div className={styles.prose}>
            <p>
              BIO issuance is bounded by three constraints: ecological cells
              (spatial), witnessing time (temporal), and EDA tightening
              (progressive). The issuance envelope cannot be expanded by demand,
              governance vote, or external pressure. It is determined solely by
              ecological reality.
            </p>
          </div>

          <h3 className={styles.subheading}>Membrane Doctrine</h3>
          <div className={styles.prose}>
            <p>
              Finance interacts only at the boundary of the system — the
              membrane. BIO does not circulate internally. It manages the
              interface between a doctrinally constrained system and an
              unconstrained external environment. External capital interacts
              here. It has no inward authority.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Part VIII: Governance ---- */}
        <section id="governance" className={styles.chapter}>
          <div className={styles.chapterLabel}>
            Part VIII — Governance Architecture
          </div>
          <h2 className={styles.chapterTitle}>Stewardship and Right of Use</h2>
          <div className={styles.prose}>
            <p>
              Right of Use (ROU) functions as a stewardship licence rather than
              ownership title. Participants do not own what they steward. ROU
              confers the responsibility of maintaining protection conditions,
              coordinating community participation, ensuring witnessing
              integrity, and maintaining physical presence on the land.
            </p>
          </div>

          <h3 className={styles.subheading}>Governance Triad</h3>
          <div className={styles.prose}>
            <p>
              Governance is distributed across three roles that cannot be
              consolidated. <strong>Custodians</strong> maintain the doctrinal
              record and ensure canonical integrity.{" "}
              <strong>Stewards</strong> execute within doctrinal bounds —
              managing cells, coordinating participation, and maintaining
              presence on the land. <strong>Witnesses</strong> attest
              independently, verifying state and resolving contradictions.
            </p>
          </div>

          <h3 className={styles.subheading}>Exposure Symmetry</h3>
          <div className={styles.prose}>
            <p>
              Participants remain exposed to ecological outcomes. No actor may
              benefit from ecological continuity without sharing the risk of
              ecological failure. This symmetry is structural — it is built into
              the instruments and governance mechanisms, not enforced through
              secondary regulation.
            </p>
          </div>

          <h3 className={styles.subheading}>Human Presence Constant (HPC)</h3>
          <div className={styles.prose}>
            <p>
              Minimum human stewardship presence is required for protection
              verification. This constant ensures that as the system scales,
              human involvement does not diminish proportionally. Automation
              serves the system; it does not replace the humans who are
              accountable for its integrity.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Part IX: Community ---- */}
        <section id="community" className={styles.chapter}>
          <div className={styles.chapterLabel}>
            Part IX — Community Architecture
          </div>
          <h2 className={styles.chapterTitle}>CATOS</h2>
          <div className={styles.prose}>
            <p>
              CATOS — Community as the Operating System — structures
              participation through endurance rather than entitlement. Community
              is not an audience or a stakeholder group. It is the operational
              layer through which the system functions.
            </p>
          </div>

          <h3 className={styles.subheading}>Participation Under Constraint</h3>
          <div className={styles.prose}>
            <p>
              Participation within u-Kama requires endurance. It is not
              frictionless entry and exit. Participants accept doctrinal
              constraints as a condition of involvement. The system does not
              compete for attention or optimise for engagement. It requires
              commitment.
            </p>
          </div>

          <h3 className={styles.subheading}>Alignment Bonds</h3>
          <div className={styles.prose}>
            <p>
              Alignment bonds are negative-yield participation mechanisms. They
              bind participants to doctrinal commitments by requiring that
              participants bear proportional consequence for their involvement.
              They are not investments that produce return — they are structural
              commitments that produce alignment.
            </p>
          </div>

          <h3 className={styles.subheading}>Social Recognition</h3>
          <div className={styles.prose}>
            <p>
              Regeneration achievements confer honour rather than additional
              financial reward. Community motivation is structural rather than
              moral. The system does not depend on goodwill or altruism — it
              produces alignment through architecture, and recognition through
              achievement.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Part X: External Interface ---- */}
        <section id="external-interface" className={styles.chapter}>
          <div className={styles.chapterLabel}>
            Part X — External Interface
          </div>
          <h2 className={styles.chapterTitle}>The Membrane Boundary</h2>
          <div className={styles.prose}>
            <p>
              External capital interacts only at the edge of the system. The
              membrane boundary ensures that external economic logic does not
              penetrate into the internal doctrinal architecture. Inward
              capital flow is controlled; inward authority is prohibited.
            </p>
          </div>

          <h3 className={styles.subheading}>Compatible Activities</h3>
          <div className={styles.prose}>
            <p>
              The membrane permits interaction with activities that are
              structurally compatible with ecological constraint: carbon credit
              mechanisms, biodiversity credit systems, regenerative agriculture,
              and ecological research. BIO serves as the coordination layer
              that aligns incentives across these overlapping initiatives
              without compromising internal doctrine.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Part XI: System Integrity ---- */}
        <section id="system-integrity" className={styles.chapter}>
          <div className={styles.chapterLabel}>
            Part XI — System Integrity
          </div>
          <h2 className={styles.chapterTitle}>Constraint Before Optimisation</h2>
          <div className={styles.prose}>
            <p>
              System design prioritises ecological truth over efficiency. Where
              conventional systems seek optimal throughput, u-Kama seeks
              structural integrity. The system would rather produce less under
              certainty than more under doubt.
            </p>
          </div>

          <h3 className={styles.subheading}>Failure Modes</h3>
          <div className={styles.prose}>
            <p>
              Failures are defined in advance — not as emergency protocols, but
              as architectural properties. The system knows, before any crisis
              arrives, exactly how it will respond. Failure triggers contraction,
              not innovation. The response to stress is predetermined, not
              improvised.
            </p>
          </div>

          <h3 className={styles.subheading}>System Contraction</h3>
          <div className={styles.prose}>
            <p>
              Under stress, the system contracts rather than diluting constraint.
              Activity is curtailed, exposure is reduced, and the system
              retreats to a more conservative configuration. This capacity for
              graceful contraction is what distinguishes a resilient
              architecture from a fragile one. The system does not depend on
              perpetual growth. It knows how to become smaller.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Glossary ---- */}
        <section id="glossary" className={styles.chapter}>
          <div className={styles.chapterLabel}>Reference</div>
          <h2 className={styles.chapterTitle}>Glossary</h2>
          <div className={styles.prose}>
            <p>
              Canonical definitions of terms as used within the u-Kama
              doctrinal architecture.
            </p>
          </div>

          <div className={styles.definitions}>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Alignment Bond</div>
              <div className={styles.defDesc}>
                A negative-yield participation mechanism that binds a
                participant to doctrinal commitments, ensuring proportional
                consequence for involvement.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>BDR (Bio Dynamic Regeneration Record)</div>
              <div className={styles.defDesc}>
                Ecological memory stored through time. Non-financial,
                non-transferable, irreversible. The anchor of the
                system&apos;s ecological commitment.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>BGU (Base Granular Unit)</div>
              <div className={styles.defDesc}>
                The atomic metric used to write the ecological state of a cell.
                A single granular observation at a specific time and location.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>BIO</div>
              <div className={styles.defDesc}>
                The boundary coordination instrument that operates exclusively
                at the membrane between u-Kama and external economies.
                Coordinates economic behaviour under ecological constraint.
                Does not circulate internally.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>CATOS (Community as the Operating System)</div>
              <div className={styles.defDesc}>
                The community architecture layer. Participation requires
                endurance rather than entitlement. Community motivation is
                structural rather than moral.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Contradiction Resolution</div>
              <div className={styles.defDesc}>
                The structural procedure by which conflicting observations or
                doctrinal interpretations are resolved. Conflicting evidence
                increases verification burden. The more constraining
                interpretation prevails.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Custodian</div>
              <div className={styles.defDesc}>
                A governance role responsible for maintaining the doctrinal
                record and ensuring canonical integrity. Custodians preserve;
                they do not govern.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>EDA (Ecological Difficulty Adjustment)</div>
              <div className={styles.defDesc}>
                The mechanism by which ecological success tightens future
                issuance conditions. The system becomes harder to satisfy as it
                matures.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Ecological Boolean Gate</div>
              <div className={styles.defDesc}>
                The binary state determination: Protected / Not Protected.
                Regenerating / Not Regenerating. No gradient, no partial
                compliance.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Ecological Cell</div>
              <div className={styles.defDesc}>
                The fundamental spatial unit of observation — an immutable
                polygon boundary defined by ecological reality, not corporate
                structure or jurisdiction.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>EVU (Ecological Verification Unit)</div>
              <div className={styles.defDesc}>
                Records that a BGU observation has been independently witnessed
                and verified through the Tritestium process. The transition
                from raw observation to verified knowledge.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Exposure Symmetry</div>
              <div className={styles.defDesc}>
                The constraint that no actor may benefit from ecological
                continuity without sharing the risk of ecological failure.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Five Ecosystem Processes</div>
              <div className={styles.defDesc}>
                Energy capture, water cycle, nutrient cycle, biological
                community dynamics, and time continuity. The five processes
                through which ecological health is assessed.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Human Presence Constant (HPC)</div>
              <div className={styles.defDesc}>
                Minimum human stewardship presence required for protection
                verification. Ensures human involvement does not diminish as
                the system scales.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Membrane</div>
              <div className={styles.defDesc}>
                The boundary between the internal system and external economies.
                The only location where BIO operates and controlled exchange
                occurs. External capital interacts here; no inward authority.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Pentad</div>
              <div className={styles.defDesc}>
                The five-day evaluation cycle — the fundamental temporal unit
                within which ecological state is assessed, recorded, and
                attested.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>PoP (Proof of Protection)</div>
              <div className={styles.defDesc}>
                Attestation of continuous ecological protection under stress.
                Maintenance of the protected state over time.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>PoR (Proof of Regeneration)</div>
              <div className={styles.defDesc}>
                Attestation of directional ecological improvement — active
                regeneration beyond mere protection.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>PoRH (Proof of Rehabilitation)</div>
              <div className={styles.defDesc}>
                Attestation of transition from degraded to protected condition.
                The initial threshold proof.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Prime Structure</div>
              <div className={styles.defDesc}>
                The system&apos;s irreducible structure expressed through
                primes: 1 — Ecology. 3 — Truth recognition. 5 — Coordination
                under constraint.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>ROU (Right of Use)</div>
              <div className={styles.defDesc}>
                Stewardship licence rather than ownership title. Confers
                responsibility for maintaining protection conditions and
                physical presence on the land.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Rule of Five</div>
              <div className={styles.defDesc}>
                The structural principle that five is the minimum number of
                independent positions required for distributed resilience
                without centralisation.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Seasonal State Resolution</div>
              <div className={styles.defDesc}>
                The periodic process at seasonal boundaries where pentad
                observations are aggregated, doctrinal compliance is confirmed,
                and BIO issuance eligibility is determined.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Steward</div>
              <div className={styles.defDesc}>
                A governance role responsible for operational execution within
                doctrinal bounds. Manages cells, coordinates participation,
                maintains physical presence on the land.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Trias Natura</div>
              <div className={styles.defDesc}>
                The foundation of ecological knowledge: measurement,
                verification, and memory. Truth emerges only when all three
                remain coherent.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Tritestium</div>
              <div className={styles.defDesc}>
                The three independent witness classes: human, observational,
                and laboratory. Each operates independently; conflict increases
                verification burden.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Truth Tests</div>
              <div className={styles.defDesc}>
                Logical consistency, empirical adequacy, and experiential
                relevance. The three validations applied to ecological
                observations.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Witness</div>
              <div className={styles.defDesc}>
                An independent attester who verifies system state and confirms
                seasonal resolutions. Must be human. Cannot simultaneously hold
                a stewardship role within the same cell. AI is not a witness.
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
