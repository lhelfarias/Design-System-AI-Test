import { Container, Tag, Table, Accordion, HeadphonesIcon } from "..";
import { Shell } from "./Shell";
import "./Product.css";

const FEATURES = [
  ["Adaptive noise cancelling", "Halo listens to the room and adjusts 200 times per second."],
  ["30 hours of battery", "A full week of commutes on one charge; 10 minutes gives 5 hours."],
  ["Comfort for long days", "Memory foam cushions and a 250 g frame for all-day wear."],
];

/** Figma: "Ataraxia — Product", Desktop 13:419 and Mobile 14:136. The hero uses tv mode, like the TV design. */
export function Product() {
  return (
    <Shell current="product" mainClassName="product-main">
      <section className="product-hero" data-theme="tv" aria-labelledby="product-title">
        <Container>
          <div className="product-hero__inner">
            <div className="product-hero__text">
              <Tag type="brand">New</Tag>
              <h1 id="product-title">Ataraxia Halo</h1>
              <p className="product-hero__claim">Quiet that adapts to you.</p>
              <p className="product-hero__price">From $299 · Free delivery</p>
              <div className="product-hero__actions">
                <a className="ds-button ds-button--primary" href="#store">Buy<span className="ds-visually-hidden"> Ataraxia Halo</span></a>
                <a className="ds-button ds-button--secondary" href="#why">Learn more<span className="ds-visually-hidden"> about Ataraxia Halo</span></a>
              </div>
            </div>
            <div className="product-hero__media ds-glass" aria-hidden="true"><HeadphonesIcon /></div>
          </div>
        </Container>
      </section>
      <section className="product-section" aria-labelledby="why">
        <Container>
          <h2 id="why" className="product-h2">Why Halo</h2>
          <ul className="product-features">
            {FEATURES.map(([t, b]) => (
              <li key={t} className="product-feature">
                <h3>{t}</h3>
                <p>{b}</p>
                <a href="#help">Know more<span className="ds-visually-hidden"> about {t.toLowerCase()}</span></a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="product-section" aria-labelledby="compare">
        <Container>
          <h2 id="compare" className="product-h2">Compare models</h2>
          <Table caption="Halo and Halo Pro compared" columns={["Feature", "Halo", "Halo Pro"]} rows={[["Noise cancelling", "Adaptive", "Adaptive, 2 levels more"], ["Battery", "30 hours", "40 hours"], ["Weight", "250 g", "265 g"]]} />
        </Container>
      </section>
      <section className="product-section" aria-labelledby="questions">
        <Container>
          <h2 id="questions" className="product-h2">Questions</h2>
          <Accordion items={[
            { title: "Does Halo work with any phone?", open: true, content: <p>Yes. Halo connects by Bluetooth 5.3 to any phone, tablet or computer, and by cable when the battery is off.</p> },
            { title: "How long is the warranty?", content: <p>Two years, including the battery.</p> },
            { title: "Can I replace the ear cushions?", content: <p>Yes. They clip off and replacement pairs are sold in the shop.</p> },
          ]} />
        </Container>
      </section>
    </Shell>
  );
}
