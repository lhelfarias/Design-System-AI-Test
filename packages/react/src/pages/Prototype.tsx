import { Container } from "..";
import { Shell } from "./Shell";

/**
 * Slot for a participant's prototype (user test, task 3).
 * `npm run check:prototype -- <file>` puts the submitted file here for the checks and restores this placeholder.
 */
export function Prototype() {
  return (
    <Shell band={<h1>Prototype</h1>}>
      <Container>
        <p>No prototype loaded. Run npm run check:prototype with a participant file.</p>
      </Container>
    </Shell>
  );
}
