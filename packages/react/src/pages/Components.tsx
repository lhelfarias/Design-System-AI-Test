import { useState } from "react";
import { Container, Panel, Card, Link, BackLink, Divider, Textarea, Search, Tabs, Dialog, Button, Table, AlbumTile, NoteIcon } from "..";
import { Shell } from "./Shell";
import "./Components.css";

/** Every library component that had no screen yet, on one page, so the accessibility check covers them. Not in the main menu: #components. */
export function Components() {
  const [open, setOpen] = useState(false);
  return (
    <Shell band={<><h1 className="cmp-title">Components</h1><p className="cmp-lead">Library components shown together, for review and for the accessibility check.</p></>}>
      <Container>
        <div className="cmp-grid">
          <Panel variant="solid" padding="xl" aria-labelledby="cmp-nav">
            <h2 id="cmp-nav">Links</h2>
            <BackLink href="#store">Back to the shop</BackLink>
            <p>Read <Link href="#help">how a cash advance works</Link> before you confirm.</p>
            <Divider />
            <p>The skip link is the first element of this page: press Tab to see it.</p>
          </Panel>
          <Panel variant="solid" padding="xl" aria-labelledby="cmp-forms">
            <h2 id="cmp-forms">Forms</h2>
            <Search />
            <Textarea label="Message" hint="Do not include personal information" />
          </Panel>
        </div>
        <h2 className="cmp-h2">Cards</h2>
        <div className="cmp-cards">
          <Card title="How a cash advance works" body="Move money from your card to a bank account and pay it back in installments." href="#help" image={<NoteIcon />} />
          <Card title="Card fees and limits" body="Annual fee, interest and the limits of your Ataraxia card." actions={<Button variant="secondary">Download PDF</Button>} />
        </div>
        <Panel variant="solid" padding="xl" aria-labelledby="cmp-tabs">
          <h2 id="cmp-tabs">Tabs and dialog</h2>
          <Tabs label="Card details" items={[{ label: "Overview", content: <p>Your card at a glance.</p> }, { label: "Fees", content: <p>Annual fee $0. Cash advance 1.9% monthly.</p> }, { label: "Limits", content: <p>Credit line $2,000.</p> }]} />
          <Button onClick={() => setOpen(true)}>Cancel the request</Button>
          <Dialog open={open} onClose={() => setOpen(false)} title="Cancel this request?" actions={<><Button onClick={() => setOpen(false)}>Yes, cancel</Button><Button variant="secondary" onClick={() => setOpen(false)}>Keep it</Button></>}>
            <p>Your simulation will not be saved.</p>
          </Dialog>
        </Panel>
        <div className="cmp-grid">
          <Panel variant="solid" padding="xl" aria-labelledby="cmp-sort">
            <h2 id="cmp-sort">Sortable table</h2>
            <Table type="sortable" caption="Top tracks, sortable" columns={["Track", "Streams"]} rows={[["Night Drive", "84,200"], ["Still Water", "61,050"], ["Paper Lanterns", "47,900"]]} numeric={[1]} />
          </Panel>
          <Panel variant="solid" padding="xl" aria-labelledby="cmp-select">
            <h2 id="cmp-select">Selectable table</h2>
            <Table type="selectable" caption="Saved simulations" columns={["Simulation", "Amount"]} rows={[["Trip", "$500"], ["Laptop", "$1,000"]]} numeric={[1]} />
          </Panel>
        </div>
        <div className="cmp-tv" data-theme="tv">
          <h2 className="cmp-h2">Album tiles (TV)</h2>
          <div className="cmp-tiles"><AlbumTile title="Afterlight" /><AlbumTile title="Open Hours" /><AlbumTile title="Small Hours" /></div>
        </div>
      </Container>
    </Shell>
  );
}
