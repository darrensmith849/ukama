import Image from "next/image";
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
            u-Kama is an architecture where ecological reality defines the
            boundary of economic activity — not the reverse.
          </p>
          <hr className={styles.heroDivider} data-animate="3" />
          <p className={styles.heroEpigraph} data-animate="4">
            Finance without doctrine is extraction.
            <br />
            Doctrine without ecology is abstraction.
          </p>
        </div>
      </section>

      {/* ---- Tower Image ---- */}
      <div className={styles.imageBreak}>
        <Image
          src="/images/tower.jpg"
          alt="Layered stone structure within an ecological landscape"
          width={800}
          height={1200}
          className={styles.towerImage}
          priority
        />
      </div>

      {/* ---- The Problem ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            The coordination problem
          </h2>
          <div className={styles.sectionBody}>
            <p>
              Modern monetary systems cannot coordinate ecological protection.
              Once value is created, nothing requires the ecological conditions
              that justified it to persist. Time cycles disconnect from
              ecological time. Value is extracted in one place and its
              consequences externalised to another.
            </p>
            <p>
              u-Kama does not attempt to repair this from within the existing
              paradigm. It reverses the foundational relationship. Three
              principles are locked at the base:
            </p>
          </div>
          <div className={styles.principles}>
            <div className={styles.principle}>
              Ecology constrains economics.
            </div>
            <div className={styles.principle}>
              Doctrine constrains finance.
            </div>
            <div className={styles.principle}>
              Failure modes are defined in advance.
            </div>
          </div>
        </div>
      </section>

      {/* ---- The Inversion / Architecture ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            Constraint at the core. Finance at the margin.
          </h2>
          <div className={styles.sectionBody}>
            <p>
              The architecture is concentric. Ecological truth sits at the
              centre — irreversible, non-financial, beyond price. Finance
              interacts only at the outermost boundary. Stability emerges from
              separation.
            </p>
          </div>
        </div>
        <div className={styles.architectureImage}>
          <Image
            src="/images/architecture.jpg"
            alt="u-Kama concentric architecture — BDR ecological memory at the core, primary buffer, membrane interface, BIO coordination at the boundary"
            width={1200}
            height={700}
            className={styles.archImg}
          />
        </div>
        <div className={styles.sectionInner}>
          <div className={styles.coreSeparation}>
            <div className={styles.coreItem}>
              <span className={styles.coreName}>BDR</span>
              <span className={styles.coreDesc}>
                The Biodiversity Reserve sits at the core. Ecological memory
                stored through time. Non-financial. Non-transferable.
                Irreversible. It cannot be liquidated, leveraged, or priced.
              </span>
            </div>
            <div className={styles.coreDivider} />
            <div className={styles.coreItem}>
              <span className={styles.coreName}>BIO</span>
              <span className={styles.coreDesc}>
                BIO operates only at the membrane — the boundary between the
                system and external economies. It coordinates participation
                under ecological constraint. It does not circulate internally.
                External capital interacts here. It has no inward authority.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- How It Works ---- */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            Five layers
          </h2>
          <div className={styles.sectionBody}>
            <p>
              The system operates through five structural layers. Each depends
              on the one beneath it. None can be bypassed.
            </p>
          </div>
          <div className={styles.layers}>
            <div className={styles.layer}>
              <span className={styles.layerNumber}>1</span>
              <div className={styles.layerContent}>
                <span className={styles.layerName}>Ecology</span>
                <span className={styles.layerDesc}>
                  Five ecosystem processes define the boundary of all activity.
                </span>
              </div>
            </div>
            <div className={styles.layer}>
              <span className={styles.layerNumber}>2</span>
              <div className={styles.layerContent}>
                <span className={styles.layerName}>Knowledge</span>
                <span className={styles.layerDesc}>
                  Observation becomes structured truth through Trias Natura:
                  measurement, verification, memory.
                </span>
              </div>
            </div>
            <div className={styles.layer}>
              <span className={styles.layerNumber}>3</span>
              <div className={styles.layerContent}>
                <span className={styles.layerName}>Verification</span>
                <span className={styles.layerDesc}>
                  Three independent witness classes attest ecological state
                  every five days.
                </span>
              </div>
            </div>
            <div className={styles.layer}>
              <span className={styles.layerNumber}>4</span>
              <div className={styles.layerContent}>
                <span className={styles.layerName}>Memory</span>
                <span className={styles.layerDesc}>
                  Verified observation becomes irreversible ecological record
                  in the Biodiversity Reserve.
                </span>
              </div>
            </div>
            <div className={styles.layer}>
              <span className={styles.layerNumber}>5</span>
              <div className={styles.layerContent}>
                <span className={styles.layerName}>Coordination</span>
                <span className={styles.layerDesc}>
                  BIO coordinates economic participation at the boundary. CATOS
                  structures community through endurance, not entitlement.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Governance ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            The Stewardship Triad
          </h2>
          <div className={styles.sectionBody}>
            <p>
              Governance is distributed across three roles that cannot be
              consolidated. No single role can act without the others.
            </p>
          </div>
          <div className={styles.triad}>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Custodians</h3>
              <p className={styles.triadDesc}>
                Preserve the doctrinal record. They do not govern — they hold
                what must not change.
              </p>
            </div>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Stewards</h3>
              <p className={styles.triadDesc}>
                Execute within doctrine. Manage ecological cells. Maintain
                physical presence on the land.
              </p>
            </div>
            <div className={styles.triadRole}>
              <h3 className={styles.triadName}>Witnesses</h3>
              <p className={styles.triadDesc}>
                Attest independently. Verify system state. Resolve
                contradictions. AI is not a witness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Go Deeper / Contact ---- */}
      <section id="contact" className={styles.closing}>
        <div className={styles.closingInner}>
          <h2 className={styles.closingTitle}>
            This is the introduction.
          </h2>
          <p className={styles.closingBody}>
            The full doctrinal architecture — ecological state machines,
            proof mechanisms, instrument design, governance charters, and
            the complete glossary — is available in the canonical reading.
          </p>
          <Link href="/reading" className={styles.closingLink}>
            Read the full architecture →
          </Link>
          <hr className={styles.closingDivider} />
          <p className={styles.closingContact}>
            For serious inquiry regarding the architecture, governance, or
            research collaboration:
          </p>
          <a href="mailto:hello@ukama.org" className={styles.closingEmail}>
            hello@ukama.org
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
