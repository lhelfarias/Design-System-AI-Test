import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { IconButton, NavItem, TrackList, PlayerBar } from "..";

const meta: Meta = { title: "Components/Music", parameters: { layout: "padded" } };
export default meta;
type S = StoryObj;
const tracks = [{ title: "Quiet Orbit", artist: "Mira Sol", album: "Afterlight", duration: "3:42" }, { title: "Low Tide", artist: "Hollow Fields", album: "Open Hours", duration: "4:05" }];

export const IconButtons: S = { render: () => <div style={{ display: "flex", gap: 8 }}><IconButton icon="prev" label="Previous song" /><IconButton icon="pause" label="Pause" variant="primary" /><IconButton icon="heart" label="Like" pressed /></div> };
export const NavItems: S = { render: () => <div style={{ width: 240 }}><NavItem icon="home" href="#">Home</NavItem><NavItem icon="library" href="#" current>Your library</NavItem></div> };
export const Tracks: S = { render: () => { const [c, setC] = useState(0); return <TrackList tracks={tracks} current={c} onPlay={setC} />; } };
export const Player: S = { render: () => <PlayerBar track={tracks[0]} playing onToggle={() => {}} onPrev={() => {}} onNext={() => {}} /> };
