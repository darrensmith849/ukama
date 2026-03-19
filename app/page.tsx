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
            u-Kama is a doctrinal architecture for ecological economic
            coordination — where ecology defines the boundary of legitimate
            economic activity, structure precedes speculation, failure modes are
            defined in advance, and human presence anchors value.
          </p>
          <hr className={styles.heroDivider} data-animate="3" />
          <p className={styles.heroEpigraph} data-animate="4">
            Finance without doctrine is extraction.
            <br />
            Doctrine without ecology is abstraction.
          </p>
        </div>
      </section>

      {/* ---- Architecture Diagram ---- */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Architecture</span>
          <h2 className={styles.sectionTitle}>
            Constraint at the Core. Finance at the Margin.
          </h2>
          <div className={styles.sectionBody}>
            <p>
              The u-Kama architecture is concentric. Ecological truth sits at
              the centre — irreversible, non-financial, beyond price. Each
              successive layer adds structured coordination while preserving the
              integrity of the core. Finance interacts only at the outermost
              membrane. Stability emerges from separation.
            </p>
          </div>

          <div className={styles.concentricWrap}>
            <div className={styles.concentric}>
              <div className={styles.ring5}>
                <span className={styles.ringLabel}>$BIO Coordination</span>
                <div className={styles.ring4}>
                  <span className={styles.ringLabel}>CATOS Participation</span>
                  <div className={styles.ring3}>
                    <span className={styles.ringLabel}>EVU Verification</span>
                    <div className={styles.ring2}>
                      <span className={styles.ringLabel}>BGU Observation</span>
                      <div className={styles.ring1}>
                        <span className={styles.ringCore}>BDR</span>
                        <span className={styles.ringCoreDesc}>
                          Ecological Memory
                          <br />
                          Non-financial
                          <br />
                          Irreversible
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.concentricAnnotations}>
              <div className={styles.annotation}>
                <span className={styles.annotationTitle}>Membrane Interface</span>
                <span className={styles.annotationDesc}>
                  Financial flows isolated. Contraction before compromise.
                  External capital interacts here. No inward authority.
                </span>
              </div>
              <div className={styles.annotation}>
                <span className={styles.annotationTitle}>Primary Buffer</span>
                <span className={styles.annotationDesc}>
                  Ecological truth cannot be priced or altered. Growth is
                  time-bound and irreversible.
                </span>
              </div>
              <div className={styles.annotation}>
                <span className={styles.annotationTitle}>Core</span>
                <span className={styles.annotationDesc}>
                  Ecological reality constrains economics. Finance never
                  touches the core.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Five Layers ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>System Logic</span>
          <h2 className={styles.sectionTitle}>
            Five Layers of Structural Coherence
          </h2>
          <div className={styles.sectionBody}>
            <p>
              The entire u-Kama system operates through five structural layers.
              Each layer depends on the one beneath it. None can be bypassed.
              This is the Rule of Five — the minimum configuration for
              distributed resilience without centralisation.
            </p>
          </div>

          <div className={styles.layers}>
            <div className={styles.layer}>
              <div className={styles.layerNumber}>1</div>
              <div className={styles.layerContent}>
                <div className={styles.layerName}>Ecology</div>
                <div className={styles.layerDesc}>
                  The primary constraint. Five ecosystem processes — energy
                  capture, water cycle, nutrient cycle, biological community,
                  and time continuity — define the boundary of all activity.
                </div>
              </div>
            </div>
            <div className={styles.layer}>
              <div className={styles.layerNumber}>2</div>
              <div className={styles.layerContent}>
                <div className={styles.layerName}>Knowledge</div>
                <div className={styles.layerDesc}>
                  Ecological observation becomes structured knowledge through
                  Trias Natura: measurement, verification, and memory. Truth
                  emerges only when these three remain coherent.
                </div>
              </div>
            </div>
            <div className={styles.layer}>
              <div className={styles.layerNumber}>3</div>
              <div className={styles.layerContent}>
                <div className={styles.layerName}>Verification</div>
                <div className={styles.layerDesc}>
                  Tritestium provides three independent witness classes — human,
                  observational, and laboratory — governed by truth tests of
                  logical consistency, empirical adequacy, and experiential
                  relevance.
                </div>
              </div>
            </div>
            <div className={styles.layer}>
              <div className={styles.layerNumber}>4</div>
              <div className={styles.layerContent}>
                <div className={styles.layerName}>Memory</div>
                <div className={styles.layerDesc}>
                  The BGU → EVU → BDR pipeline records ecological state as
                  durable, irreversible memory. Base Granular Units are
                  observed, verified into Ecological Verification Units, and
                  accumulated into the Biodiversity Reserve.
                </div>
              </div>
            </div>
            <div className={styles.layer}>
              <div className={styles.layerNumber}>5</div>
              <div className={styles.layerContent}>
                <div className={styles.layerName}>Coordination</div>
                <div className={styles.layerDesc}>
                  BIO coordinates economic behaviour under ecological
                  constraint, operating only at the membrane. CATOS — Community
                  as the Operating System — structures participation through
                  endurance, not entitlement.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.primeStructure}>
            <span className={styles.primeLabel}>Prime Structure</span>
            <span className={styles.primeValue}>
              1 — Ecology &nbsp;&middot;&nbsp; 3 — Truth Recognition
              &nbsp;&middot;&nbsp; 5 — Coordination Under Constraint
            </span>
          </div>
        </div>
      </section>

      {/* ---- Ecological State Machine ---- */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Ecological Reality</span>
          <h2 className={styles.sectionTitle}>
            The Ecological Boolean Gate
          </h2>
          <div className={styles.sectionBody}>
            <p>
              Ecological state within u-Kama reduces to two binary
              determinations: Protected or Not Protected. Regenerating or Not
              Regenerating. There is no gradient, no partial compliance, no
              probability. Ecological truth is boolean.
            </p>
            <p>
              State is evaluated every five days through the pentad cycle.
              Seasonal state resolution aggregates pentad observations and
              determines eligibility for BIO issuance. Three proof mechanisms
              govern transitions:
            </p>
          </div>

          <div className={styles.proofs}>
            <div className={styles.proof}>
              <div className={styles.proofName}>
                Proof of Rehabilitation
              </div>
              <div className={styles.proofAbbr}>PoRH</div>
              <div className={styles.proofDesc}>
                Transition from degraded to protected condition.
              </div>
            </div>
            <div className={styles.proofArrow}>&rarr;</div>
            <div className={styles.proof}>
              <div className={styles.proofName}>
                Proof of Protection
              </div>
              <div className={styles.proofAbbr}>PoP</div>
              <div className={styles.proofDesc}>
                Continuous ecological protection under stress.
              </div>
            </div>
            <div className={styles.proofArrow}>&rarr;</div>
            <div className={styles.proof}>
              <div className={styles.proofName}>
                Proof of Regeneration
              </div>
              <div className={styles.proofAbbr}>PoR</div>
              <div className={styles.proofDesc}>
                Directional ecological improvement over time.
              </div>
            </div>
          </div>

          <div className={styles.sectionBody} style={{ marginTop: "var(--space-6)" }}>
            <p>
              The Ecological Difficulty Adjustment ensures that ecological
              success tightens future issuance conditions — the system becomes
              harder to satisfy as it matures, not easier.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Trias Natura ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Knowledge</span>
          <h2 className={styles.sectionTitle}>
            Trias Natura
          </h2>
          <div className={styles.sectionBody}>
            <p>
              The foundation of ecological knowledge rests on three inseparable
              pillars. Truth emerges only when all three remain coherent. If any
              one fails, the system does not approximate — it withholds
              determination.
            </p>
          </div>

          <div className={styles.triad}>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Measurement</h3>
              <p className={styles.triadDesc}>
                Ecological observation through the five ecosystem processes —
                energy capture, water cycle, nutrient cycle, biological
                community, and time continuity. Ecological cells are the
                spatial unit: immutable polygon boundaries defined by ecological
                reality, not jurisdiction.
              </p>
            </div>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Verification</h3>
              <p className={styles.triadDesc}>
                Tritestium provides three independent witness classes — human,
                observational, and laboratory — each structurally independent.
                Conflicting evidence increases the verification burden rather
                than averaging out. AI may assist but does not witness.
              </p>
            </div>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Memory</h3>
              <p className={styles.triadDesc}>
                Observation becomes durable ecological memory through the BGU →
                EVU → BDR pipeline. The Bio Dynamic Regeneration Record is
                non-financial, non-transferable, and irreversible — ecological
                memory stored through time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Stewardship Triad ---- */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Governance</span>
          <h2 className={styles.sectionTitle}>
            The Stewardship Triad
          </h2>
          <div className={styles.sectionBody}>
            <p>
              Governance is distributed across three roles that cannot be
              consolidated. Right of Use (ROU) operates as stewardship licence
              rather than ownership — no participant owns what they steward.
            </p>
          </div>

          <div className={styles.triad}>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Custodians</h3>
              <p className={styles.triadDesc}>
                Maintain the doctrinal record and ensure canonical integrity.
                Custodians hold the institutional memory of the system. They do
                not govern — they preserve.
              </p>
            </div>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Stewards</h3>
              <p className={styles.triadDesc}>
                Execute within doctrinal bounds. Manage ecological cells,
                coordinate community participation, administer evaluation
                rhythms, and maintain physical presence on the land. Accountable
                to doctrine, not stakeholders.
              </p>
            </div>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Witnesses</h3>
              <p className={styles.triadDesc}>
                Attest independently. Verify system state, confirm seasonal
                resolutions, and resolve contradictions. Structural independence
                is guaranteed — no entity holding a stewardship role may serve
                as witness within the same cell. AI is not a witness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Instruments ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Instruments</span>
          <h2 className={styles.sectionTitle}>
            Membrane Doctrine
          </h2>
          <div className={styles.sectionBody}>
            <p>
              u-Kama employs precisely defined structural instruments — not
              financial products. Finance interacts only at the boundary of the
              system. The Membrane Doctrine ensures that external capital has no
              inward authority.
            </p>
          </div>

          <div className={styles.instrumentGrid}>
            <div className={styles.instrument}>
              <div className={styles.instrumentName}>CATOS</div>
              <div className={styles.instrumentFull}>Community as the Operating System</div>
              <div className={styles.instrumentDesc}>
                Participation under constraint. Community motivation is
                structural rather than moral. Participation requires endurance
                rather than entitlement. Social recognition confers honour, not
                additional financial reward.
              </div>
            </div>
            <div className={styles.instrument}>
              <div className={styles.instrumentName}>BDR</div>
              <div className={styles.instrumentFull}>Bio Dynamic Regeneration Record</div>
              <div className={styles.instrumentDesc}>
                Non-financial ecological reserve. Non-transferable. Irreversible.
                Represents ecological memory stored through time. Cannot be
                liquidated under any circumstance — the anchor of ecological
                commitment.
              </div>
            </div>
            <div className={styles.instrument}>
              <div className={styles.instrumentName}>BIO</div>
              <div className={styles.instrumentFull}>Boundary Coordination Layer</div>
              <div className={styles.instrumentDesc}>
                Operates exclusively at the membrane. Coordinates economic
                behaviour under ecological constraint. Issuance bounded by
                ecological cells, witnessing time, and EDA tightening. Does not
                circulate internally.
              </div>
            </div>
            <div className={styles.instrument}>
              <div className={styles.instrumentName}>Alignment Bonds</div>
              <div className={styles.instrumentFull}>Negative-yield participation mechanism</div>
              <div className={styles.instrumentDesc}>
                Bind participants to doctrinal commitments. Exposure symmetry
                ensures no actor benefits from ecological continuity without
                sharing risk. These are structural commitments, not derivatives.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Pentad Rhythm ---- */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Temporal Structure</span>
          <h2 className={styles.sectionTitle}>
            Pentad Evaluation Rhythm
          </h2>
          <div className={styles.sectionBody}>
            <p>
              Time in u-Kama is structured, not continuous. The pentad — a
              five-day evaluation cycle — is the fundamental temporal unit.
              Within each pentad, ecological state is observed, recorded, and
              attested. This rhythm is calibrated to be frequent enough to
              detect drift and infrequent enough to permit meaningful
              observation.
            </p>
            <p>
              Seasonal endpoints are determined by ecological regime transition,
              not calendar convention. At seasonal boundaries, the system
              conducts state resolution — confirming that operations remain
              within doctrinal constraint. The Canonical Ecological Condition
              Clause governs these transitions: protection requires
              non-acceleration of entropy; regeneration requires directional
              improvement in energy capture and biological community under
              uninterrupted protection.
            </p>
          </div>

          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>I</div>
              <div className={styles.pillarName}>Ecology</div>
              <div className={styles.pillarDesc}>
                Primary constraint and boundary definition
              </div>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>II</div>
              <div className={styles.pillarName}>Knowledge</div>
              <div className={styles.pillarDesc}>
                Observation through Trias Natura
              </div>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>III</div>
              <div className={styles.pillarName}>Witnessing</div>
              <div className={styles.pillarDesc}>
                Independent verification via Tritestium
              </div>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>IV</div>
              <div className={styles.pillarName}>State</div>
              <div className={styles.pillarDesc}>
                Boolean determination and seasonal resolution
              </div>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>V</div>
              <div className={styles.pillarName}>Memory</div>
              <div className={styles.pillarDesc}>
                Durable ecological record via BGU → EVU → BDR
              </div>
            </div>
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
              u-Kama is defined by non-negotiable structural commitments. These
              are not aspirational — they are architectural constraints enforced
              by design. The system prioritises ecological truth over efficiency.
            </p>
          </div>

          <ul className={styles.axioms}>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                Ecology constrains economics. Nature determines the boundary of
                legitimate economic activity.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                Doctrine constrains finance. Every instrument and mechanism is
                derived from doctrinal principles, not market convention.
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
                The Human Presence Constant: minimum human stewardship presence
                required for protection verification. Value is anchored to human
                participation, not computational abstraction.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                AI is not a witness. Attestation requires human presence,
                judgement, and accountability.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                The system contracts under stress rather than diluting
                constraint. It does not inflate, lever, or externalise.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                Exposure symmetry: no actor benefits from ecological continuity
                without sharing risk.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                Contradiction resolution is structural: the more constraining
                interpretation prevails.
              </span>
            </li>
            <li className={styles.axiom}>
              <span className={styles.axiomMark}>&#9671;</span>
              <span className={styles.axiomText}>
                Constraint before optimisation. System design prioritises
                ecological truth over efficiency.
              </span>
            </li>
          </ul>

          <Link href="/reading" className={styles.readingLink}>
            Read the full canonical material →
          </Link>
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
