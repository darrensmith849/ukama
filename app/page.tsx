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
          <div className={styles.heroMain}>
            <h1 className={styles.heroTitle} data-animate="1">
              Ecology
              <br />
              constrains
              <br />
              economics.
            </h1>
            <p className={styles.heroSubtitle} data-animate="2">
              u-Kama is an architecture where ecological reality defines the
              boundary of economic activity — not the reverse.
            </p>
          </div>
          <div className={styles.heroAside} data-animate="3">
            <hr className={styles.heroDivider} />
            <p className={styles.heroEpigraph}>
              Finance without doctrine
              <br />
              is extraction.
            </p>
            <p className={styles.heroEpigraph}>
              Doctrine without ecology
              <br />
              is abstraction.
            </p>
          </div>
        </div>
      </section>

      {/* ---- The Problem ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.overline}>The Problem</div>
          <h2 className={styles.sectionTitle}>
            The coordination failure
          </h2>
          <div className={styles.sectionBody}>
            <p className={styles.lead}>
              Modern monetary systems cannot coordinate ecological protection.
            </p>
            <p>
              Once value is created, nothing requires the ecological conditions
              that justified it to persist. Time cycles disconnect from
              ecological time. Value is extracted in one place and its
              consequences externalised to another.
            </p>
            <p>
              u-Kama reverses the foundational relationship. Three
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

      {/* ---- Tower Image Band ---- */}
      <div className={styles.imageBand}>
        <div className={styles.imageBandInner}>
          <Image
            src="/images/tower.jpg"
            alt="Layered stone structure within an ecological landscape"
            width={800}
            height={1200}
            className={styles.towerImage}
            priority
          />
        </div>
      </div>

      {/* ---- The Inversion / Architecture ---- */}
      <section className={styles.architectureSection}>
        <div className={styles.archContent}>
          <div className={styles.overlineDark}>Architecture</div>
          <h2 className={styles.archTitle}>
            Constraint at the core.
            <br />
            Finance at the margin.
          </h2>
          <p className={styles.archBody}>
            The architecture is concentric. Ecological truth sits at the
            centre — irreversible, non-financial, beyond price. Finance
            interacts only at the outermost boundary. Stability emerges from
            separation.
          </p>
        </div>

        <div className={styles.archPlate}>
          <div className={styles.archPlateInner}>
            <Image
              src="/images/architecture.jpg"
              alt="u-Kama concentric architecture — BDR ecological memory at the core, primary buffer, membrane interface, BIO coordination at the boundary"
              width={1200}
              height={700}
              className={styles.archImg}
            />
          </div>
          <p className={styles.archCaption}>
            <span className={styles.captionRule} />
            Concentric architecture — ecological memory at the core, coordination at the boundary
            <span className={styles.captionRule} />
          </p>
        </div>

        <div className={styles.archContent}>
          <div className={styles.coreSeparation}>
            <div className={styles.coreItem}>
              <span className={styles.coreName}>BDR</span>
              <span className={styles.coreDesc}>
                The Biodiversity Reserve sits at the core. Ecological memory
                stored through time. Non-financial. Non-transferable.
                Irreversible.
              </span>
            </div>
            <div className={styles.coreDivider} />
            <div className={styles.coreItem}>
              <span className={styles.coreName}>BIO</span>
              <span className={styles.coreDesc}>
                BIO operates only at the membrane — the boundary between the
                system and external economies. It coordinates participation
                under ecological constraint.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Five Layers ---- */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.overline}>Structure</div>
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
            {[
              { n: "1", name: "Ecology", desc: "Five ecosystem processes define the boundary of all activity." },
              { n: "2", name: "Knowledge", desc: "Observation becomes structured truth through Trias Natura: measurement, verification, memory." },
              { n: "3", name: "Verification", desc: "Three independent witness classes attest ecological state every five days." },
              { n: "4", name: "Memory", desc: "Verified observation becomes irreversible ecological record in the Biodiversity Reserve." },
              { n: "5", name: "Coordination", desc: "BIO coordinates economic participation at the boundary. CATOS structures community through endurance." },
            ].map((layer) => (
              <div key={layer.n} className={styles.layer}>
                <span className={styles.layerNumber}>{layer.n}</span>
                <div className={styles.layerContent}>
                  <span className={styles.layerName}>{layer.name}</span>
                  <span className={styles.layerDesc}>{layer.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Governance ---- */}
      <section className={styles.sectionDeep}>
        <div className={styles.sectionInner}>
          <div className={styles.overline}>Governance</div>
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
          <div className={styles.closingMark}>u-Kama</div>
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
