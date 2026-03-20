import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import styles from "./page.module.css";

const failurePanels = [
  {
    label: "Post-Issuance Drift",
    title: "Proof decays after value is minted",
    body:
      "Conventional systems do not preserve living ecological conditions once financial value is created. Verification is episodic, not structural.",
  },
  {
    label: "Temporal Misalignment",
    title: "Monetary time ignores ecological time",
    body:
      "Quarterly and speculative cycles dominate decision-making while ecosystems move through stress windows, seasons, and recovery horizons.",
  },
  {
    label: "Spatial Externalisation",
    title: "Extraction and consequence separate",
    body:
      "Value can be realised in one jurisdiction while ecological loss is absorbed elsewhere, outside the ledger and outside accountability.",
  },
];

const architectureTiles = [
  {
    title: "Ecological Memory Plate",
    body:
      "BDR stores irreversible ecological record. It is non-financial and cannot be traded, pledged, or diluted.",
  },
  {
    title: "Membrane Interface",
    body:
      "BIO operates only at the boundary, translating participation into constrained coordination rather than extraction.",
  },
  {
    title: "Continuity Frame",
    body:
      "Five-day witnessing and seasonal gates preserve temporal discipline, so economic activity cannot outrun ecological truth.",
  },
];

const witnessBlocks = [
  {
    title: "Custodians",
    body:
      "Hold doctrinal continuity and preserve the non-negotiable clauses. They secure what cannot be politically edited.",
  },
  {
    title: "Stewards",
    body:
      "Maintain operational responsibility for ecological cells and execute decisions within explicit system boundaries.",
  },
  {
    title: "Witnesses",
    body:
      "Attest state independently across classes. No single actor, including AI systems, can self-certify ecological truth.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={styles.kicker} data-animate="1">
                Ecological Economic Architecture
              </p>
              <h1 className={styles.heroTitle} data-animate="2">
                A public system where
                <br />
                ecology sets the boundary
                <br />
                of value.
              </h1>
              <p className={styles.heroLead} data-animate="3">
                u-Kama is a doctrinal architecture for coordinating economies
                under living ecological constraint, with memory, witnessing, and
                boundary logic built into the core.
              </p>
              <div className={styles.heroActions} data-animate="4">
                <Link href="/reading" className={styles.primaryAction}>
                  Read canonical architecture
                </Link>
                <a href="#why-failure" className={styles.secondaryAction}>
                  Why current systems fail
                </a>
              </div>
            </div>

            <figure className={styles.heroArtifact} data-animate="4">
              <div className={styles.heroFrame}>
                <Image
                  src="/images/tower.jpg"
                  alt="Tower formation used as a reference artifact for layered ecological structure"
                  width={820}
                  height={1180}
                  priority
                  className={styles.heroImage}
                />
              </div>
              <figcaption className={styles.heroCaption}>
                Reference Artifact 01 · Vertical continuity under pressure
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="why-failure" className={styles.section}>
          <div className={styles.sectionHead}>
            <p className={styles.kicker}>Why Current Systems Fail</p>
            <h2 className={styles.sectionTitle}>
              The failure is structural, not rhetorical.
            </h2>
            <p className={styles.sectionLead}>
              Ecological damage persists because the dominant financial model is
              not designed to hold proof, time, and place in continuity.
            </p>
          </div>

          <div className={styles.failureGrid}>
            {failurePanels.map((panel, index) => (
              <article className={styles.doctrinePanel} key={panel.title}>
                <p className={styles.panelIndex}>0{index + 1}</p>
                <p className={styles.panelLabel}>{panel.label}</p>
                <h3 className={styles.panelTitle}>{panel.title}</h3>
                <p className={styles.panelBody}>{panel.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.insightSplit}>
            <div className={styles.insightBox}>
              <p className={styles.insightLabel}>Doctrine Insight</p>
              <p className={styles.insightText}>
                Once economics is allowed to define ecology, every safeguard
                eventually becomes optional.
              </p>
            </div>
            <figure className={styles.supportVisual}>
              <Image
                src="/images/layers.jpg"
                alt="Layered ecological terrain demonstrating structural depth"
                width={720}
                height={1080}
                className={styles.supportImage}
              />
              <figcaption className={styles.supportCaption}>
                Layer study · structure before flow
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.inversionSection}>
          <div className={styles.inversionInner}>
            <p className={styles.inversionKicker}>Core Inversion</p>
            <h2 className={styles.inversionTitle}>
              u-Kama reverses the order of authority.
            </h2>
            <div className={styles.inversionList}>
              <div className={styles.inversionItem}>
                <p className={styles.inversionName}>1 · Ecology</p>
                <p className={styles.inversionBody}>
                  Ecological conditions are primary and non-negotiable.
                </p>
              </div>
              <div className={styles.inversionItem}>
                <p className={styles.inversionName}>2 · Doctrine</p>
                <p className={styles.inversionBody}>
                  Doctrine binds interpretation and defines failure modes in
                  advance.
                </p>
              </div>
              <div className={styles.inversionItem}>
                <p className={styles.inversionName}>3 · Finance</p>
                <p className={styles.inversionBody}>
                  Finance remains at the membrane, coordinating only within
                  ecological and doctrinal boundaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <p className={styles.kicker}>Architecture Overview</p>
            <h2 className={styles.sectionTitle}>
              Concentric structure with a strict boundary membrane.
            </h2>
            <p className={styles.sectionLead}>
              The architecture is intentionally layered so each outer function
              depends on an inner truth layer that cannot be financially
              overridden.
            </p>
          </div>

          <div className={styles.architecturePlate}>
            <div className={styles.plateHeader}>
              <span>System Artifact</span>
              <span>Revision Surface</span>
              <span>Boundary Locked</span>
            </div>
            <div className={styles.plateBody}>
              <Image
                src="/images/architecture.jpg"
                alt="u-Kama concentric architecture showing BDR core, buffer layers, membrane interface, and BIO boundary coordination"
                width={1320}
                height={830}
                className={styles.architectureImage}
              />
            </div>
            <p className={styles.plateCaption}>
              Concentric architecture: ecological memory at the core, economic
              coordination at the edge.
            </p>
          </div>

          <div className={styles.tileGrid}>
            {architectureTiles.map((tile) => (
              <article key={tile.title} className={styles.archTile}>
                <h3 className={styles.archTileTitle}>{tile.title}</h3>
                <p className={styles.archTileBody}>{tile.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.governanceSection}>
          <div className={styles.sectionHeadOnDark}>
            <p className={styles.kickerOnDark}>Governance · Witnessing · Boundary</p>
            <h2 className={styles.sectionTitleOnDark}>
              Distributed authority with explicit boundary logic.
            </h2>
            <p className={styles.sectionLeadOnDark}>
              Governance is held as a witness structure, not a leadership brand.
              Roles are separated so no participant can collapse doctrine,
              verification, and execution into one center.
            </p>
          </div>

          <div className={styles.witnessGrid}>
            {witnessBlocks.map((block) => (
              <article key={block.title} className={styles.witnessBlock}>
                <h3 className={styles.witnessTitle}>{block.title}</h3>
                <p className={styles.witnessBody}>{block.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.boundaryCard}>
            <p className={styles.boundaryLabel}>Boundary Logic</p>
            <p className={styles.boundaryText}>
              If witness consensus fails, state escalation is withheld. If
              ecological continuity fails, coordination capacity contracts. If
              doctrine is breached, the boundary closes.
            </p>
          </div>
        </section>

        <section id="contact" className={styles.closing}>
          <div className={styles.closingInner}>
            <p className={styles.kicker}>Reading · Contact</p>
            <h2 className={styles.closingTitle}>
              Enter the full body of work.
            </h2>
            <p className={styles.closingBody}>
              The canonical reading includes ecological state machines,
              witnessing doctrine, reserve memory logic, coordination
              instruments, and governance charters.
            </p>
            <div className={styles.closingActions}>
              <Link href="/reading" className={styles.primaryAction}>
                Open canonical reading
              </Link>
              <a href="mailto:hello@ukama.org" className={styles.mailAction}>
                hello@ukama.org
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
