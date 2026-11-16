import { Breadcrumbs, Container, Panel, Table, NotificationBanner, Accordion } from "..";
import { Shell, BandHeading } from "./Shell";
import { quote } from "./Simulator";
import "./HelpArticle.css";

const money = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });
const SECTIONS = [["what", "What it is"], ["costs", "What it costs"], ["before", "Before you confirm"], ["faq", "Frequently asked questions"]];

/** Figma: "Ataraxia — Help article", Desktop 22:201 and Mobile 22:333. Long text: white panel at reading width. */
export function HelpArticle() {
  return (
    <Shell
      current="help"
      band={<>
        <Breadcrumbs items={[{ label: "Home", href: "#product" }, { label: "Support", href: "#help" }, { label: "How a cash advance works" }]} />
        <BandHeading title="How a cash advance works" lead="A cash advance lets you move money from your Ataraxia card to a bank account and pay it back in monthly installments." meta="Updated 12 November 2026 · 4 min read" />
      </>}
    >
      <Container>
        <div className="help-layout">
          <Panel variant="solid" padding="xl" as="article" aria-label="Article" className="help-article">
            <h2 id="what">What it is</h2>
            <p>A cash advance is a loan taken from the credit line of your card. The money arrives in the account you choose, usually within one business day, and the amount is added to your card balance.</p>
            <p>It is different from a purchase: interest starts on the day you receive the money, and there is no interest-free period. That is why it helps to simulate the cost before you confirm.</p>
            <h2 id="costs">What it costs</h2>
            <p>The cost depends on the amount and on how many installments you choose. More installments mean a lower monthly payment and a higher total cost. These examples use a monthly interest of 1.9%.</p>
            <Table caption="Example monthly payments" columns={["Amount", "Installments", "Monthly payment"]} rows={[[200, 6], [500, 12], [1000, 24]].map(([a, m]) => [money(a).replace(".00", ""), `${m} months`, money(quote(a, m).payment)])} />
            <NotificationBanner type="info" title="Example values"><p>These figures are examples, not a real offer. Your rate is shown in the simulator.</p></NotificationBanner>
            <h2 id="before">Before you confirm</h2>
            <ul>
              <li>Check that the monthly payment fits your budget for the whole period.</li>
              <li>Compare the total cost with other options, such as a personal loan.</li>
              <li>Confirm the destination account: a transfer cannot be reversed.</li>
              <li>Remember that the advance reduces the credit available on your card.</li>
            </ul>
            <h2 id="faq">Frequently asked questions</h2>
            <Accordion items={[
              { title: "How long does the money take to arrive?", open: true, content: <p>Usually within one business day. Transfers requested on weekends are processed on the next business day.</p> },
              { title: "Can I pay the advance early?", content: <p>Yes. You can pay the full balance at any time, and you only pay interest for the days you used the money.</p> },
              { title: "Does a cash advance affect my credit limit?", content: <p>Yes. The amount is taken from your available credit until you pay it back.</p> },
            ]} />
            <a className="ds-button ds-button--primary help-cta" href="#simulator">Open the simulator</a>
          </Panel>
          <Panel variant="solid" padding="lg" as="aside" aria-label="On this page and related links" className="help-aside">
            <nav aria-labelledby="help-toc">
              <h2 id="help-toc">On this page</h2>
              <ul>{SECTIONS.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView(); }}>{label}</a></li>)}</ul>
            </nav>
            <h2>Related</h2>
            <ul>
              <li><a href="#simulator">Open the simulator</a></li>
              <li><a href="#fees">Card fees and limits</a></li>
              <li><a href="#pay-early">How to pay your card early</a></li>
            </ul>
          </Panel>
        </div>
      </Container>
    </Shell>
  );
}
