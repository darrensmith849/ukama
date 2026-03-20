import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import styles from "./page.module.css";

const doctrineFailures = [
  {
    code: "F-01",
    title: "Proof Collapse After Issuance",
    body:
      "Once value is minted, most systems stop requiring ecological proof continuity.",
    consequence: "Ecological conditions can decay without financial contraction.",
  },
  {
    code: "F-02",
    title: "Temporal Misfit",
    body:
      "Monetary cycles optimize for quarterly velocity while ecosystems recover on slower stress intervals.",
    consequence: "Capital outruns living regeneration.",
  },
  {
    code: "F-03",
    title: "Spatial Displacement",
    body:
      "Extraction can be monetized in one location while ecological cost is externalized somewhere else.",
    consequence: "Accountability detaches from place.",
  },
];

const membranePlates = [
  {
    title: "Authority Order",
    body: "Ecology defines boundary conditions. Doctrine governs interpretation. Finance operates at the edge.",
  },
  {
    title: "Contraction Logic",
    body: "If witnessing degrades, coordination capacity contracts before core integrity is compromised.",
  },
  {
    title: "No Inward Authority",
    body: "External capital can interact at the membrane but cannot alter reserve memory at the core.",
  },
];

const witnessBlocks = [
  {
    role: "Custodians",
    authority: "Hold doctrinal continuity and canonical boundaries.",
    limit: "Cannot directly allocate market coordination rights.",
  },
  {
    role: "Stewards",
    authority: "Operate ecological cells inside doctrinal constraints.",
    limit: "Cannot redefine witnessing criteria or reserve truth tests.",
  },
  {
    role: "Witnesses",
    authority: "Attest ecological state through independent classes.",
    limit: "Cannot self-verify from a single actor or automated authority.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroGrain} />

          <div className={styles.heroInner}>
            <p className={styles.heroKicker} data-animate="1">
              Ecological Economic Architecture
            </p>
            <h1 className={styles.heroTitle} data-animate="2">
              Ecology sets the boundary.
              <br />
              Value moves within it.
            </h1>
            <p className={styles.heroLead} data-animate="3">
              u-Kama is a public systems architecture where ecological truth,
              memory, and witnessing constrain economic participation.
            </p>
            <div className={styles.heroActions} data-animate="4">
              <Link href="/reading" className={styles.primaryAction}>
                Read Canonical Architecture
              </Link>
              <a href="#inversion" className={styles.secondaryAction}>
                See Core Inversion
              </a>
            </div>
            <p className={styles.heroSignal}>
              Designed for continuity, not extraction velocity.
            </p>
          </div>
        </section>

        <section className={styles.lightSection}>
          <div className={styles.sectionHead}>
            <p className={styles.kicker}>Why Current Systems Fail</p>
            <h2 className={styles.sectionTitle}>Failure is mechanical, not moral.</h2>
            <p className={styles.sectionLead}>
              The dominant financial stack cannot reliably preserve ecological
              proof across time, place, and governance transitions.
            </p>
          </div>

          <div className={styles.doctrineGrid}>
            {doctrineFailures.map((item) => (
              <article key={item.code} className={styles.doctrineObject}>
                <p className={styles.objectCode}>{item.code}</p>
                <h3 className={styles.objectTitle}>{item.title}</h3>
                <p className={styles.objectBody}>{item.body}</p>
                <p className={styles.objectConsequence}>{item.consequence}</p>
              </article>
            ))}
          </div>

          <div className={styles.continuityBox}>
            <p className={styles.continuityLabel}>Continuity Clause</p>
            <p className={styles.continuityText}>
              If proof continuity cannot be maintained, legitimate coordination
              must contract before ecological state is compromised.
            </p>
          </div>
        </section>

        <section id="inversion" className={styles.darkSection}>
          <div className={styles.sectionHeadDark}>
            <p className={styles.kickerDark}>Core Inversion</p>
            <h2 className={styles.sectionTitleDark}>
              Constraint at the core.
              <br />
              Coordination at the membrane.
            </h2>
            <p className={styles.sectionLeadDark}>
              u-Kama reverses the default order of authority and formalizes
              boundary behavior before market participation.
            </p>
          </div>

          <div className={styles.membraneGrid}>
            {membranePlates.map((item) => (
              <article key={item.title} className={styles.membranePlate}>
                <h3 className={styles.membraneTitle}>{item.title}</h3>
                <p className={styles.membraneBody}>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.lightSection}>
          <div className={styles.sectionHead}>
            <p className={styles.kicker}>Architecture Overview</p>
            <h2 className={styles.sectionTitle}>A framed systems artifact.</h2>
            <p className={styles.sectionLead}>
              The architecture plate records one design law: reserve memory
              remains non-financial at the core while participation interfaces
              only at the boundary.
            </p>
          </div>

          <figure className={styles.archArtifact}>
            <div className={styles.archMeta}>
              <span>Artifact Plate A-01</span>
              <span>Concentric Authority Model</span>
              <span>Boundary Locked</span>
            </div>

            <div className={styles.archFrame}>
              <Image
                src="/images/architecture.jpg"
                alt="u-Kama concentric architecture with ecological memory at core and financial coordination at boundary"
                width={1536}
                height={1024}
                className={styles.archImage}
              />
            </div>

            <figcaption className={styles.archCaption}>
              BDR core is non-financial and irreversible. BIO activity is constrained to membrane participation.
            </figcaption>
          </figure>
        </section>

        <section className={styles.darkSection}>
          <div className={styles.sectionHeadDark}>
            <p className={styles.kickerDark}>Governance & Witnessing</p>
            <h2 className={styles.sectionTitleDark}>Distributed authority blocks capture risk.</h2>
            <p className={styles.sectionLeadDark}>
              Roles are separated so doctrine, operation, and attestation cannot
              collapse into a single control path.
            </p>
          </div>

          <div className={styles.witnessGrid}>
            {witnessBlocks.map((block) => (
              <article key={block.role} className={styles.witnessBlock}>
                <h3 className={styles.witnessRole}>{block.role}</h3>
                <p className={styles.witnessAuthority}>{block.authority}</p>
                <p className={styles.witnessLimit}>Boundary: {block.limit}</p>
              </article>
            ))}
          </div>

          <div className={styles.boundaryPlate}>
            <p className={styles.boundaryLabel}>Membrane Boundary Logic</p>
            <p className={styles.boundaryText}>
              If independent witness consensus fails, state elevation is withheld.
              If ecological continuity fails, participation capacity contracts.
              If doctrine is breached, boundary interfaces close.
            </p>
          </div>
        </section>

        <section id="contact" className={styles.lightSection}>
          <div className={styles.closeInner}>
            <p className={styles.kicker}>Go Deeper</p>
            <h2 className={styles.sectionTitle}>Enter the full canonical body.</h2>
            <p className={styles.sectionLead}>
              Detailed material includes state machines, witness classes,
              reserve memory rules, coordination instruments, and governance
              charters.
            </p>
            <div className={styles.heroActions}>
              <Link href="/reading" className={styles.primaryAction}>
                Open Reading
              </Link>
              <Link href="/contact" className={styles.contactAction}>
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
