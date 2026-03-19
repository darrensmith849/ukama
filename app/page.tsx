import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ---- Hero ---- */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle} data-animate="1">
            Ecology constrains
            <br />
            economics.
          </h1>
          <p className={styles.heroSubtitle} data-animate="2">
            u-Kama is a doctrinal architecture for ecological economic systems —
            where structure precedes speculation, failure modes are defined in
            advance, and human presence anchors value.
          </p>
          <hr className={styles.heroDivider} data-animate="3" />
          <p className={styles.heroEpigraph} data-animate="4">
            Finance without doctrine is extraction.
            Doctrine without ecology is abstraction.
          </p>
        </div>
      </section>

      {/* ---- Doctrinal Foundation ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Foundation</span>
          <h2 className={styles.sectionTitle}>
            Doctrine constrains finance.
          </h2>
          <div className={styles.sectionBody}>
            <p>
              u-Kama begins from a structural premise: ecological limits are not
              externalities to be priced — they are constraints that define what
              economic activity is permissible. Doctrine is the binding
              architecture that enforces this relationship.
            </p>
            <p>
              Every financial instrument, governance mechanism, and evaluation
              rhythm within u-Kama is derived from doctrinal principles — not
              from market convention or speculative demand. The system does not
              optimise for growth. It optimises for coherence under constraint.
            </p>
            <p>
              Failure modes are not afterthoughts. They are defined in advance,
              architecturally, so the system knows how to contract under stress
              before it needs to.
            </p>
          </div>
          <Link href="/reading" className={styles.readingLink}>
            Read the full doctrine →
          </Link>
        </div>
      </section>

      {/* ---- Rule of Five ---- */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Structural Stability</span>
          <h2 className={styles.sectionTitle}>
            The Rule of Five
          </h2>
          <div className={styles.sectionBody}>
            <p>
              Structural stability in u-Kama is governed by the Rule of Five — a
              pentadic constraint that shapes governance, evaluation, and
              temporal rhythm. Five is not arbitrary; it is the minimum
              configuration for distributed resilience without centralisation.
            </p>
          </div>

          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>I</div>
              <div className={styles.pillarName}>Cells</div>
              <div className={styles.pillarDesc}>
                Ecological cells as bounded units of accountability
              </div>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>II</div>
              <div className={styles.pillarName}>Pentad</div>
              <div className={styles.pillarDesc}>
                Five-day evaluation rhythm for state assessment
              </div>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>III</div>
              <div className={styles.pillarName}>Season</div>
              <div className={styles.pillarDesc}>
                Seasonal state resolution and doctrinal review
              </div>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>IV</div>
              <div className={styles.pillarName}>Witness</div>
              <div className={styles.pillarDesc}>
                Independent attestation of system state
              </div>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>V</div>
              <div className={styles.pillarName}>Bond</div>
              <div className={styles.pillarDesc}>
                Alignment bonds that bind participation to doctrine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Stewardship Triad ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Governance</span>
          <h2 className={styles.sectionTitle}>
            The Stewardship Triad
          </h2>
          <div className={styles.sectionBody}>
            <p>
              Governance in u-Kama is not delegated to token-holders or
              algorithmic consensus. It is structured through three distinct
              roles — each with defined responsibilities, constraints, and
              separation of concerns. No single role can act without the others.
            </p>
          </div>

          <div className={styles.triad}>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Custodians</h3>
              <p className={styles.triadDesc}>
                Maintain the doctrinal record. Custodians hold the canonical
                texts and ensure that structural amendments follow prescribed
                process. They do not govern — they preserve.
              </p>
            </div>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Stewards</h3>
              <p className={styles.triadDesc}>
                Execute within doctrine. Stewards manage ecological cells,
                administer evaluation rhythms, and ensure operational coherence.
                Their authority is bounded by doctrinal constraint.
              </p>
            </div>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Witnesses</h3>
              <p className={styles.triadDesc}>
                Attest independently. Witnesses verify system state, confirm
                seasonal resolutions, and resolve contradictions. Their
                independence is structurally guaranteed. AI is not a witness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CATOS & Instruments ---- */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Instruments</span>
          <h2 className={styles.sectionTitle}>
            CATOS and the Membrane
          </h2>
          <div className={styles.sectionBody}>
            <p>
              CATOS is the canonical token of state within u-Kama — not a
              speculative asset, but a measure of system coherence. Its value is
              derived from doctrinal integrity, not market sentiment.
            </p>
            <p>
              The system operates with a clear boundary architecture. The
              Biodiversity Reserve (BDR) functions as a non-financial reserve —
              an ecological anchor that cannot be liquidated or leveraged. BIO
              exists only at the membrane — the boundary between the system and
              external economies — where controlled exchange is necessary but
              structurally limited.
            </p>
            <p>
              Alignment bonds bind participants to doctrinal commitments.
              Exposure symmetry ensures that no participant can externalise risk
              without bearing proportional consequence. These are not financial
              products. They are structural constraints.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Axioms ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Axioms</span>
          <h2 className={styles.sectionTitle}>
            Structural Commitments
          </h2>
          <div className={styles.sectionBody}>
            <p>
              u-Kama is defined by a set of non-negotiable structural
              commitments. These are not aspirational — they are architectural
              constraints that the system enforces by design.
            </p>
          </div>

          <ul className={styles.axioms}>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                Ecology constrains economics. Not the reverse.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                Failure modes are defined in advance, not discovered in crisis.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                The Human Presence Constant anchors value to human participation, not computational abstraction.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                AI is not a witness. Attestation requires human presence and independence.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                The system contracts under stress. It does not inflate, lever, or externalise.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                Exposure symmetry: no participant may externalise risk without bearing proportional consequence.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                Contradiction resolution is structural, not political. When doctrine conflicts, the more constraining interpretation prevails.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ---- Contact ---- */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactInner}>
          <h2 className={styles.contactTitle}>Inquiry</h2>
          <p className={styles.contactBody}>
            u-Kama is in active doctrinal development. For serious inquiry
            regarding the architecture, governance, or research collaboration:
          </p>
          <a
            href="mailto:hello@ukama.org"
            className={styles.contactEmail}
          >
            hello@ukama.org
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
