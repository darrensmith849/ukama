import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Reading — u-Kama",
  description:
    "Canonical doctrinal material, definitions, and structural references for the u-Kama ecological economic architecture.",
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
          <h1 className={styles.title}>
            Canonical Reading
          </h1>
          <p className={styles.subtitle}>
            Doctrinal definitions, structural principles, and reference material
            for the u-Kama ecological economic architecture.
          </p>
        </div>
      </header>

      {/* ---- Content ---- */}
      <div className={styles.content}>

        {/* Table of Contents */}
        <nav className={styles.toc}>
          <div className={styles.tocTitle}>Contents</div>
          <ol className={styles.tocList}>
            <li className={styles.tocItem}>
              <a href="#premise">The Doctrinal Premise</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#ecology">Ecology as Constraint</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#cells">Ecological Cells</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#rule-of-five">The Rule of Five</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#stewardship">The Stewardship Triad</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#witnesses">Witness Independence</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#instruments">Instruments and Boundaries</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#contraction">Contraction Under Stress</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#human-presence">The Human Presence Constant</a>
            </li>
            <li className={styles.tocItem}>
              <a href="#glossary">Glossary</a>
            </li>
          </ol>
        </nav>

        {/* ---- Chapter: Premise ---- */}
        <section id="premise" className={styles.chapter}>
          <div className={styles.chapterLabel}>Chapter I</div>
          <h2 className={styles.chapterTitle}>The Doctrinal Premise</h2>
          <div className={styles.prose}>
            <p>
              u-Kama proceeds from a single structural commitment: that economic
              systems must be subordinate to ecological reality. This is not a
              policy preference or ethical aspiration — it is an architectural
              constraint embedded at the foundation of every mechanism the system
              employs.
            </p>
            <p>
              Doctrine, in this context, is not ideology. It is the formal body
              of constraints, definitions, and resolution procedures that govern
              how the system operates, adapts, and — when necessary — contracts.
              Doctrine constrains finance. Ecology constrains doctrine. This
              ordering is non-negotiable.
            </p>
            <p>
              The system is designed to fail gracefully. Failure modes are
              defined in advance — not as emergency protocols, but as
              architectural properties of the system itself. When conditions
              deteriorate, the system does not seek external rescue or speculative
              expansion. It contracts, deliberately and predictably, according to
              predetermined rules.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Chapter: Ecology ---- */}
        <section id="ecology" className={styles.chapter}>
          <div className={styles.chapterLabel}>Chapter II</div>
          <h2 className={styles.chapterTitle}>Ecology as Constraint</h2>
          <div className={styles.prose}>
            <p>
              In conventional economic thought, ecology is treated as an
              externality — something to be priced, mitigated, or offset after
              economic activity has been defined. u-Kama inverts this
              relationship entirely. Ecological limits define what economic
              activity is permissible. They are not costs to be absorbed — they
              are boundaries that cannot be crossed.
            </p>
            <p>
              This inversion is not merely philosophical. It produces materially
              different institutional structures. Where conventional finance
              seeks to maximise returns within regulatory constraints, u-Kama
              seeks to maintain coherence within ecological constraints. The
              objective function is fundamentally different.
            </p>
            <p>
              Ecological constraint is not static. It is assessed through regular
              evaluation rhythms — the pentad cycle and seasonal resolution —
              that update the system&apos;s understanding of what its boundaries
              currently require. The system listens to its constraints rather
              than seeking to overcome them.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Chapter: Cells ---- */}
        <section id="cells" className={styles.chapter}>
          <div className={styles.chapterLabel}>Chapter III</div>
          <h2 className={styles.chapterTitle}>Ecological Cells</h2>
          <div className={styles.prose}>
            <p>
              The ecological cell is the fundamental unit of organisation within
              u-Kama. A cell is a bounded domain of ecological accountability —
              defined not by corporate structure or jurisdictional boundary, but
              by the ecological reality it encloses.
            </p>
            <p>
              Each cell operates semi-autonomously within doctrinal constraints.
              It has its own evaluation rhythm, its own stewardship roles, and
              its own relationship to the broader system. Cells do not compete
              with one another. They cohere, each maintaining its own integrity
              while contributing to the stability of the whole.
            </p>
            <p>
              The boundary of a cell is not a wall — it is a membrane. Exchange
              across cell boundaries is permitted, but structurally constrained.
              This is where the BIO instrument operates: at the membrane, and
              only at the membrane. Internal cell operations are governed by
              doctrinal constraint alone.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Chapter: Rule of Five ---- */}
        <section id="rule-of-five" className={styles.chapter}>
          <div className={styles.chapterLabel}>Chapter IV</div>
          <h2 className={styles.chapterTitle}>The Rule of Five</h2>
          <div className={styles.prose}>
            <p>
              The Rule of Five governs the structural geometry of u-Kama. Five
              is the minimum number of independent positions required for
              distributed resilience without centralised coordination. It
              appears throughout the architecture: in governance quorums, in
              evaluation rhythms, and in the temporal structure of the system.
            </p>
            <p>
              The pentad — a five-day evaluation cycle — is the fundamental
              temporal unit. Within each pentad, system state is assessed,
              recorded, and attested. This rhythm is not arbitrary; it is
              calibrated to be frequent enough to detect drift and infrequent
              enough to permit meaningful observation.
            </p>
            <p>
              Seasonal state resolution aggregates pentad observations into
              broader assessments. At seasonal boundaries, the system conducts
              doctrinal review — not to change doctrine, but to confirm that
              current operations remain within doctrinal constraint. Where they
              do not, the system contracts.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Chapter: Stewardship ---- */}
        <section id="stewardship" className={styles.chapter}>
          <div className={styles.chapterLabel}>Chapter V</div>
          <h2 className={styles.chapterTitle}>The Stewardship Triad</h2>
          <div className={styles.prose}>
            <p>
              Governance in u-Kama is distributed across three roles that cannot
              be consolidated. Custodians maintain the doctrinal record —
              preserving canonical texts and ensuring that amendments follow
              prescribed process. They hold the institutional memory of the
              system but do not direct its operations.
            </p>
            <p>
              Stewards execute within doctrinal bounds. They manage ecological
              cells, administer evaluation rhythms, and make operational
              decisions — always within the constraints that doctrine defines.
              Stewardship is not ownership. Stewards are accountable to doctrine,
              not to stakeholders.
            </p>
            <p>
              Witnesses attest independently. Their role is verification, not
              governance. Witnesses confirm that system state matches doctrinal
              expectation, that seasonal resolutions are valid, and that
              contradictions are surfaced for structural resolution. Witness
              independence is guaranteed architecturally — no participant may
              serve simultaneously as steward and witness within the same cell.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Chapter: Witnesses ---- */}
        <section id="witnesses" className={styles.chapter}>
          <div className={styles.chapterLabel}>Chapter VI</div>
          <h2 className={styles.chapterTitle}>Witness Independence</h2>
          <div className={styles.prose}>
            <p>
              The integrity of the system depends on the independence of its
              witnesses. This is not a soft requirement — it is a structural
              guarantee. No entity that holds a stewardship role, financial
              position, or operational interest within a cell may serve as its
              witness. Conflict of interest is not managed — it is architecturally
              prevented.
            </p>
            <p>
              AI is not a witness. Computational systems may assist with data
              collection, pattern detection, or administrative coordination —
              but attestation requires human presence, judgement, and
              accountability. The witness role is reserved for persons who can
              bear consequence for their attestations.
            </p>
            <p>
              Contradiction resolution is structural. When two valid doctrinal
              interpretations conflict, resolution follows a prescribed
              procedure: the more constraining interpretation prevails. This is
              not a matter of vote or consensus — it is a formal rule that
              ensures the system defaults to restraint, not expansion.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Chapter: Instruments ---- */}
        <section id="instruments" className={styles.chapter}>
          <div className={styles.chapterLabel}>Chapter VII</div>
          <h2 className={styles.chapterTitle}>Instruments and Boundaries</h2>
          <div className={styles.prose}>
            <p>
              u-Kama employs a small number of precisely defined instruments —
              not financial products, but structural mechanisms that serve
              specific doctrinal functions.
            </p>
            <p>
              <strong>CATOS</strong> — the Canonical Token of State — represents
              the system&apos;s measure of internal coherence. It is not a unit of
              exchange, an investment vehicle, or a store of speculative value.
              Its state reflects doctrinal integrity as assessed through
              evaluation rhythms and attested by witnesses.
            </p>
            <p>
              <strong>BDR</strong> — the Biodiversity Reserve — is a
              non-financial reserve. It represents ecological capital that is
              held, not deployed; preserved, not leveraged. The BDR cannot be
              liquidated under any circumstance. It is the anchor of the
              system&apos;s ecological commitment.
            </p>
            <p>
              <strong>BIO</strong> operates exclusively at the membrane — the
              boundary between u-Kama and external economic systems. It is the
              sole instrument through which controlled exchange occurs. BIO does
              not circulate internally. It exists to manage the interface between
              a doctrinally constrained system and an unconstrained external
              environment.
            </p>
            <p>
              <strong>Alignment bonds</strong> bind participants to doctrinal
              commitments. They are not financial derivatives — they are
              structural instruments that ensure participants bear consequence
              proportional to their involvement. Exposure symmetry is enforced:
              no participant may externalise risk without bearing proportional
              consequence.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Chapter: Contraction ---- */}
        <section id="contraction" className={styles.chapter}>
          <div className={styles.chapterLabel}>Chapter VIII</div>
          <h2 className={styles.chapterTitle}>Contraction Under Stress</h2>
          <div className={styles.prose}>
            <p>
              Conventional economic systems respond to stress through expansion:
              increased leverage, stimulus, emergency liquidity, and risk
              transfer. u-Kama responds to stress through contraction. This is
              not a failure state — it is a designed response.
            </p>
            <p>
              When evaluation rhythms detect that ecological constraints are
              being approached or breached, the system reduces its operational
              scope. Activity is curtailed, exposure is reduced, and the system
              retreats to a more conservative configuration — all according to
              rules defined in advance.
            </p>
            <p>
              This capacity for graceful contraction is what distinguishes a
              resilient architecture from a fragile one. The system does not
              depend on perpetual growth. It does not require external rescue.
              It knows how to become smaller, and it does so deliberately.
            </p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ---- Chapter: Human Presence ---- */}
        <section id="human-presence" className={styles.chapter}>
          <div className={styles.chapterLabel}>Chapter IX</div>
          <h2 className={styles.chapterTitle}>The Human Presence Constant</h2>
          <div className={styles.prose}>
            <p>
              The Human Presence Constant is the architectural commitment that
              value within u-Kama is anchored to human participation — not to
              computational throughput, algorithmic optimisation, or automated
              process. Human beings are present at every critical juncture: in
              attestation, in governance, in the resolution of contradiction.
            </p>
            <p>
              This is not a philosophical statement about the dignity of human
              labour, though it is consistent with such views. It is a
              structural design decision. Systems that remove human presence
              from critical functions become unaccountable. They optimise for
              metrics that diverge from human wellbeing. They cannot bear
              witness.
            </p>
            <p>
              The Human Presence Constant ensures that as the system grows,
              human involvement does not diminish proportionally. Automation
              serves the system; it does not replace the humans who are
              accountable for its integrity.
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
                A structural instrument that binds a participant to doctrinal
                commitments, ensuring proportional consequence for involvement.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>BDR (Biodiversity Reserve)</div>
              <div className={styles.defDesc}>
                A non-financial ecological reserve that cannot be liquidated or
                leveraged. The anchor of the system&apos;s ecological commitment.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>BIO</div>
              <div className={styles.defDesc}>
                The boundary instrument that operates exclusively at the
                membrane between u-Kama and external economies. Does not
                circulate internally.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>CATOS</div>
              <div className={styles.defDesc}>
                Canonical Token of State. A measure of system coherence derived
                from doctrinal integrity, not market sentiment.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Contradiction Resolution</div>
              <div className={styles.defDesc}>
                The structural procedure by which conflicting doctrinal
                interpretations are resolved. The more constraining
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
              <div className={styles.defTerm}>Ecological Cell</div>
              <div className={styles.defDesc}>
                The fundamental unit of organisation — a bounded domain of
                ecological accountability defined by ecological reality, not
                corporate structure.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Exposure Symmetry</div>
              <div className={styles.defDesc}>
                The constraint that no participant may externalise risk without
                bearing proportional consequence.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Human Presence Constant</div>
              <div className={styles.defDesc}>
                The architectural commitment that value is anchored to human
                participation, and that human involvement does not diminish as
                the system grows.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Membrane</div>
              <div className={styles.defDesc}>
                The boundary between the internal system and external economies.
                The only location where BIO operates and controlled exchange
                occurs.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Pentad</div>
              <div className={styles.defDesc}>
                The five-day evaluation cycle — the fundamental temporal unit
                within which system state is assessed, recorded, and attested.
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
                observations are aggregated and doctrinal compliance is
                confirmed.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Steward</div>
              <div className={styles.defDesc}>
                A governance role responsible for operational execution within
                doctrinal bounds. Stewards manage cells and administer
                evaluation rhythms.
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.defTerm}>Witness</div>
              <div className={styles.defDesc}>
                An independent attester who verifies system state and confirms
                seasonal resolutions. Must be human. Cannot simultaneously hold
                a stewardship role within the same cell.
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
