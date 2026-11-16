import { useState } from "react";
import { NavItem, TrackList, PlayerBar, IconButton, Button, NoteIcon } from "..";
import { Shell } from "./Shell";
import "./Music.css";

const TRACKS = [
  { title: "Quiet Orbit", artist: "Mira Sol", album: "Afterlight", duration: "3:42" },
  { title: "Low Tide", artist: "Hollow Fields", album: "Open Hours", duration: "4:05" },
  { title: "Paper Lanterns", artist: "Ana Ríos", album: "Small Hours", duration: "2:58" },
  { title: "Slow Signal", artist: "Tomas Vale", album: "Afterlight", duration: "5:12" },
  { title: "Northern Room", artist: "Mira Sol", album: "Afterlight", duration: "3:27" },
  { title: "Glass Garden", artist: "Hollow Fields", album: "Open Hours", duration: "4:40" },
  { title: "Long Exhale", artist: "Ana Ríos", album: "Small Hours", duration: "6:03" },
];

/** Figma: "Ataraxia — Music", Desktop 6:96 and Mobile 7:115. Three panels: navigation, songs, player. */
export function Music() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const play = (i: number) => { setCurrent((i + TRACKS.length) % TRACKS.length); setPlaying(true); };
  return (
    <Shell current="music" mainClassName="music-main">
      <div className="music-app">
        <nav className="music-panel music-nav" aria-label="Library">
          <ul>
            <li><NavItem icon="home" href="#music">Home</NavItem></li>
            <li><NavItem icon="search" href="#music">Search</NavItem></li>
            <li><NavItem icon="library" href="#music" current>Your library</NavItem></li>
          </ul>
          <div className="music-nav__head">
            <h2>Playlists</h2>
            <IconButton icon="plus" label="Create playlist" />
          </div>
          <ul>
            {["Deep Focus", "Morning Run", "Late Night Jazz", "Rainy Day"].map((p) => <li key={p}><NavItem href="#music">{p}</NavItem></li>)}
          </ul>
        </nav>
        <section className="music-panel music-list" aria-labelledby="playlist-title">
          <div className="music-cover">
            <div className="music-cover__art" aria-hidden="true"><NoteIcon /></div>
            <div className="music-cover__text">
              <p className="music-cover__kind">Playlist</p>
              <h1 id="playlist-title">Deep Focus</h1>
              <p className="music-cover__meta">Ataraxia · 24 songs · 1 h 32 min</p>
              <div className="music-cover__actions">
                <Button onClick={() => play(0)}>Play</Button>
                <Button variant="secondary" onClick={() => play(Math.floor(Math.random() * TRACKS.length))}>Shuffle</Button>
                <IconButton icon="heart" label="Save Deep Focus to your library" pressed={false} />
                <IconButton icon="more" label="More options for Deep Focus" />
              </div>
            </div>
          </div>
          <TrackList tracks={TRACKS} current={current} onPlay={play} />
        </section>
        <div className="music-player">
          <PlayerBar track={TRACKS[current]} playing={playing} onToggle={() => setPlaying((p) => !p)} onPrev={() => play(current - 1)} onNext={() => play(current + 1)} />
        </div>
      </div>
    </Shell>
  );
}
