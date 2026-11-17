# Distribution: how other teams consume the system

Status: **planned, not done yet.** Today the library lives in this repository only. This page records the decision and the steps, so it can be done later without new research.

## Package names

The packages are named `@mi-design-system/tokens` and `@mi-design-system/react` today. GitHub Packages needs the scope to match the owner, so they will be renamed to `@lhelfarias/tokens` and `@lhelfarias/react` when they are published.

## What is shared and what is not

| Part | Path | Shared with teams |
|---|---|---|
| Tokens (JSON, CSS variables) | `packages/tokens` | Yes: package `@lhelfarias/tokens` |
| React components | `packages/react/src/components` | Yes: package `@lhelfarias/react` |
| Example screens (Ataraxia) | `packages/react/src/pages` | No. They show how a consumer team uses the library |
| Figma library | Figma file "Design System Library" | Yes, through Figma library publishing |
| AI context | `ai-context/` | Yes, read from the repository |

A consumer team never copies component code. It installs a version, uses the components and tokens, and updates when a new version comes out.

## Chosen registry: GitHub Packages (npm)

Why: it lives next to the repository, uses the same access rules, and is free for public packages.

Verified facts (GitHub Docs, November 2026):

- "GitHub Packages usage is free for public packages." Private packages on GitHub Free have a monthly quota of 500 MB storage and 1 GB data transfer. ([Billing for GitHub Packages](https://docs.github.com/en/billing/concepts/product-billing/github-packages))
- Only scoped, lowercase names are supported, for example `@lhelfarias/tokens`. ([Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry))
- "You need an access token to publish, install, and delete private, internal, and public packages." Installing needs a personal access token (classic) with at least `read:packages`. (same page)

The last point is the main cost: **every consumer, even for a public package, needs a token to install.** In CI, GitHub Actions can use `GITHUB_TOKEN` instead.

### Alternatives considered

| Option | Pros | Cons |
|---|---|---|
| GitHub Packages | Same place as the code; free for public | Token needed to install |
| npmjs.com (public) | No token to install | Separate account; everything public |
| Install from Git (`npm install github:owner/repo`) | No registry | No real versions; hard with a monorepo |

## Steps when we do it

1. In each `package.json`: scoped `name`, `version`, `"publishConfig": { "registry": "https://npm.pkg.github.com" }`, and a `repository` field that matches this repository.
2. `packages/react`: add a library build (Vite library mode) that outputs JS, type definitions and one CSS file; `react` and `react-dom` as `peerDependencies`; the tokens package as a dependency.
3. A GitHub Actions workflow publishes when a release tag is created, using `GITHUB_TOKEN`. Nobody publishes from a laptop.
4. Consumer teams add one line to their `.npmrc`: `@lhelfarias:registry=https://npm.pkg.github.com`, plus a token with `read:packages`.

## Versions

[Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`.

- **Patch:** fix with no visible change for consumers (a contrast fix, a bug).
- **Minor:** something new that does not break anything (a new component, a new token).
- **Major:** something that breaks consumers (a renamed or removed token, a changed component property).

Every release has a changelog entry written for designers and developers, not only for code. Token changes still start in `tokens.json` and a pull request, as today.

## How a consumer team uses it

```tsx
import "@lhelfarias/tokens/css/tokens.css";
import "@lhelfarias/react/style.css";
import { Header, Button, ProductCard } from "@lhelfarias/react";
```

Pages follow `ai-context/patterns.md`; `packages/react/src/pages/Shell.tsx` is the page recipe to copy.
