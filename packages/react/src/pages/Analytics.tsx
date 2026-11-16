import { Container, Panel, Select, StatCard, BarChart, Table } from "..";
import { Shell, BandHeading } from "./Shell";
import "./Analytics.css";

const DAYS = [["Mon", 4100], ["Tue", 5000], ["Wed", 3400], ["Thu", 6000], ["Fri", 6900], ["Sat", 6400], ["Sun", 4800]] as const;

/** Figma: "Ataraxia — Analytics", Desktop 25:3 and Mobile 25:233. */
export function Analytics() {
  return (
    <Shell
      current="analytics"
      band={<BandHeading title="Listening analytics" lead="Ataraxia for artists · Updated today at 09:00" control={
        <Select label="Period" defaultValue="30" options={[{ value: "7", label: "Last 7 days" }, { value: "30", label: "Last 30 days" }, { value: "90", label: "Last 90 days" }]} />
      } />}
    >
      <Container>
        <h2 className="ds-visually-hidden">Summary</h2>
        <div className="an-stats">
          <StatCard label="Monthly listeners" value="48,200" change="+12% vs last month" trend="up" />
          <StatCard label="Streams" value="312,400" change="+8% vs last month" trend="up" />
          <StatCard label="Followers" value="9,870" change="+3% vs last month" trend="up" />
          <StatCard label="Average listening time" value="2:48" change="-4% vs last month" trend="down" />
        </div>
        <div className="an-columns">
          <BarChart title="Listeners per day, last 7 days" data={DAYS.map(([label, value]) => ({ label, value }))} summary="Highest on Friday (6,900). Lowest on Wednesday (3,400)." />
          <Panel variant="glass" padding="lg" aria-labelledby="an-top">
            <h2 id="an-top" className="page-h2">Top tracks</h2>
            <Table caption="Top tracks this period" columns={["Track", "Streams", "Change"]} numeric={[1, 2]} rows={[["Night Drive", "84,200", "+14%"], ["Still Water", "61,050", "+6%"], ["Paper Lanterns", "47,900", "-2%"]]} />
          </Panel>
        </div>
      </Container>
    </Shell>
  );
}
