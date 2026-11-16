import { Breadcrumbs, Container, Panel, Select, Fieldset, Checkbox, ProductCard, Pagination } from "..";
import { Shell, BandHeading } from "./Shell";
import "./Store.css";

const PRODUCTS = [
  { name: "Ataraxia Halo", description: "Wireless headphones with adaptive noise cancelling.", price: "$299", tag: { label: "New" } },
  { name: "Ataraxia Pulse", description: "True wireless earbuds with 30-hour battery.", price: "$149", tag: { label: "Bestseller" } },
  { name: "Ataraxia Dome", description: "Portable speaker with 360° sound.", price: "$199" },
  { name: "Ataraxia Halo Lite", description: "Lightweight headphones for everyday listening.", price: "$179", tag: { label: "New" } },
  { name: "Ataraxia Studio", description: "Over-ear monitors tuned for mixing.", price: "$399" },
  { name: "Ataraxia Echo Mini", description: "Pocket speaker, water resistant.", price: "$79", tag: { label: "Sale" } },
];

/** Figma: "Ataraxia — Store", Desktop 15:10 and Mobile 15:477. */
export function Store() {
  return (
    <Shell
      current="store"
      band={<>
        <Breadcrumbs items={[{ label: "Home", href: "#product" }, { label: "Shop", href: "#store" }, { label: "Headphones & speakers" }]} />
        <BandHeading title="Headphones & speakers" meta="6 products" control={
          <Select label="Sort by" defaultValue="popular" options={[{ value: "popular", label: "Most popular" }, { value: "low", label: "Price: low to high" }, { value: "high", label: "Price: high to low" }]} />
        } />
      </>}
    >
      <Container>
        <div className="store-layout">
          <Panel variant="solid" padding="lg" as="aside" aria-labelledby="store-filters" className="store-filters">
            <h2 id="store-filters" className="store-filters__title">Filters</h2>
            <Fieldset legend="Category">
              {["Headphones", "Earbuds", "Speakers"].map((c) => <Checkbox key={c} label={c} />)}
            </Fieldset>
            <Fieldset legend="Price">
              {["Under $100", "$100 – $250", "Over $250"].map((c) => <Checkbox key={c} label={c} />)}
            </Fieldset>
          </Panel>
          <section aria-labelledby="store-results" className="store-results">
            <h2 id="store-results" className="ds-visually-hidden">Products</h2>
            <ul className="store-grid">
              {PRODUCTS.map((p) => <li key={p.name}><ProductCard {...p} href="#product" /></li>)}
            </ul>
            <Pagination current={2} total={8} label="Product pages" />
          </section>
        </div>
      </Container>
    </Shell>
  );
}
