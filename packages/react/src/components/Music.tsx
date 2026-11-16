import { useState, type ReactNode } from "react";
import { NoteIcon } from "./Content";
import "./Music.css";

const I = {
  home: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3z",
  search: "M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  library: "M4 6H2v14a2 2 0 002 2h14v-2H4zm16-4H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-1 9H9V9h10zm-4 4H9v-2h6zm4-8H9V5h10z",
  play: "M8 5v14l11-7z", pause: "M6 19h4V5H6zm8-14v14h4V5z",
  prev: "M6 6h2v12H6zm3.5 6l8.5 6V6z", next: "M6 18l8.5-6L6 6zM16 6v12h2V6z",
  heart: "M12 21l-1.5-1.3C5.4 15.4 2 12.3 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1C13.1 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.5c0 3.8-3.4 6.9-8.5 11.2z",
  more: "M6 10a2 2 0 100 4 2 2 0 000-4zm6 0a2 2 0 100 4 2 2 0 000-4zm6 0a2 2 0 100 4 2 2 0 000-4z",
  plus: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z",
};
export type MusicIcon = keyof typeof I;
export const Icon = ({ name }: { name: MusicIcon }) => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={I[name]} /></svg>;

/** Figma: Icon button. Always has an accessible name; pressed state for toggles. */
export function IconButton({ icon, label, pressed, variant = "ghost", onClick }: { icon: MusicIcon; label: string; pressed?: boolean; variant?: "ghost" | "primary"; onClick?: () => void }) {
  return (
    <button type="button" className={`ds-icon-button ds-icon-button--${variant}`} aria-label={label} aria-pressed={pressed} onClick={onClick}>
      <Icon name={icon} />
    </button>
  );
}

/** Figma: Nav item. Current item has aria-current and a filled background. */
export function NavItem({ icon, href, current, children }: { icon?: MusicIcon; href: string; current?: boolean; children: ReactNode }) {
  return (
    <a className="ds-nav-item" href={href} aria-current={current ? "page" : undefined}>
      {icon && <Icon name={icon} />}{children}
    </a>
  );
}

export interface Track { title: string; artist: string; album: string; duration: string }

/** Figma: Track row, inside a table. The play button names the track. */
export function TrackList({ tracks, current, onPlay }: { tracks: Track[]; current: number; onPlay: (i: number) => void }) {
  return (
    <table className="ds-tracks">
      <caption className="ds-visually-hidden">Songs in this playlist</caption>
      <thead><tr><th scope="col">#</th><th scope="col">Title</th><th scope="col" className="ds-tracks__album">Album</th><th scope="col" className="is-num">Duration</th></tr></thead>
      <tbody>
        {tracks.map((t, i) => (
          <tr key={t.title} className={i === current ? "is-current" : undefined} aria-current={i === current ? "true" : undefined}>
            <td className="ds-tracks__index">
              <span className="ds-tracks__num" aria-hidden="true">{i + 1}</span>
              <button type="button" className="ds-tracks__play" aria-label={`Play ${t.title} by ${t.artist}`} onClick={() => onPlay(i)}>
                <Icon name="play" />
              </button>
            </td>
            <th scope="row"><span className="ds-tracks__title">{t.title}</span><span className="ds-tracks__artist">{t.artist}</span></th>
            <td className="ds-tracks__album">{t.album}</td>
            <td className="is-num">{t.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const secs = (d: string) => { const [m, s] = d.split(":").map(Number); return m * 60 + s; };
const clock = (n: number) => `${Math.floor(n / 60)}:${String(Math.floor(n % 60)).padStart(2, "0")}`;

/** Figma: Player bar. Progress and volume are native range inputs with labels. */
export function PlayerBar({ track, playing, onToggle, onPrev, onNext }: { track: Track; playing: boolean; onToggle: () => void; onPrev: () => void; onNext: () => void }) {
  const total = secs(track.duration);
  const [pos, setPos] = useState(84);
  const [vol, setVol] = useState(70);
  const [liked, setLiked] = useState(false);
  return (
    <section className="ds-player" aria-label="Player">
      <div className="ds-player__now">
        <div className="ds-player__art" aria-hidden="true"><NoteIcon /></div>
        <p><span className="ds-player__title">{track.title}</span><span className="ds-player__artist">{track.artist}</span></p>
        <IconButton icon="heart" label={`Like ${track.title}`} pressed={liked} onClick={() => setLiked((l) => !l)} />
      </div>
      <div className="ds-player__controls">
        <div className="ds-player__buttons">
          <IconButton icon="prev" label="Previous song" onClick={onPrev} />
          <IconButton icon={playing ? "pause" : "play"} label={playing ? "Pause" : "Play"} variant="primary" onClick={onToggle} />
          <IconButton icon="next" label="Next song" onClick={onNext} />
        </div>
        <div className="ds-player__progress">
          <span aria-hidden="true">{clock(Math.min(pos, total))}</span>
          <input type="range" min={0} max={total} value={Math.min(pos, total)} onChange={(e) => setPos(Number(e.target.value))} aria-label="Song position" aria-valuetext={`${clock(Math.min(pos, total))} of ${track.duration}`} />
          <span aria-hidden="true">{track.duration}</span>
        </div>
      </div>
      <div className="ds-player__volume">
        <input type="range" min={0} max={100} value={vol} onChange={(e) => setVol(Number(e.target.value))} aria-label="Volume" aria-valuetext={`${vol}%`} />
      </div>
    </section>
  );
}
