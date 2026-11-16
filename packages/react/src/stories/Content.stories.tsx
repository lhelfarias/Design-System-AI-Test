import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag, NotificationBanner, Accordion, Table, Pagination, ProductCard, StatCard, BarChart } from "..";

const meta: Meta = { title: "Components/Content and data", parameters: { layout: "padded" } };
export default meta;
type S = StoryObj;

export const Tags: S = { render: () => <div style={{ display: "flex", gap: 8 }}>{(["neutral", "brand", "success", "error", "warning", "info"] as const).map((t) => <Tag key={t} type={t}>{t}</Tag>)}</div> };
export const Banners: S = { render: () => <div style={{ display: "grid", gap: 16, maxWidth: 560 }}>{(["info", "success", "warning", "error"] as const).map((t) => <NotificationBanner key={t} type={t} title={`${t} title`}><p>Short message for this state.</p></NotificationBanner>)}</div> };
export const AccordionDefault: S = { render: () => <div style={{ maxWidth: 560 }}><Accordion items={[{ title: "First question", open: true, content: <p>Answer.</p> }, { title: "Second question", content: <p>Answer.</p> }]} /></div> };
export const TableSimple: S = { render: () => <Table caption="Top tracks" columns={["Track", "Streams"]} numeric={[1]} rows={[["Night Drive", "84,200"], ["Still Water", "61,050"]]} /> };
export const PaginationDefault: S = { render: () => <Pagination current={2} total={8} /> };
export const ProductCardDefault: S = { render: () => <div style={{ maxWidth: 288, display: "flex" }}><ProductCard name="Ataraxia Halo" description="Wireless headphones with adaptive noise cancelling." price="$299" tag={{ label: "New" }} /></div> };
export const StatCards: S = { render: () => <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 240px)", gap: 24 }}><StatCard label="Streams" value="312,400" change="+8% vs last month" trend="up" /><StatCard label="Average listening time" value="2:48" change="-4% vs last month" trend="down" /></div> };
export const BarChartDefault: S = { render: () => <div style={{ maxWidth: 480 }}><BarChart title="Listeners per day" data={[["Mon", 4100], ["Tue", 5000], ["Wed", 3400]].map(([label, value]) => ({ label: String(label), value: Number(value) }))} summary="Highest on Tuesday (5,000)." /></div> };
