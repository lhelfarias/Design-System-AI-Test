# Linking design and code: options

How a person or an AI goes from a component in Figma to the same component in code and in Storybook, and back. Written to discuss with the team on 18 November 2026. Facts are sourced; the evaluation and the recommendation are opinions for this team.

## What each tool does

| | Code Connect | Storybook |
|---|---|---|
| Lives | Inside Figma (Dev Mode) | Outside Figma (a website) |
| Shows | The real code snippet for the selected design, with that instance's values: `<Button variant="secondary">` | The components really working: states, interaction, modes, accessibility |
| Answers | Which component do I use for this design? | How does it behave, what are its rules, does it pass the tests? |
| Runs code | No | Yes; here it also runs the accessibility checks |
| Used by | Whoever is looking at the design in Figma | Also people who never open Figma: development, QA, a new team |

They do different jobs; one does not replace the other.

## Options to connect them

| Option | What it does | Needs | Works with our Storybook on GitHub Pages | Effort | Evaluation (opinion) |
|---|---|---|---|---|---|
| 1. Cross-links (in use) | Each Storybook page links to Figma and to the code; each library component's description links to its Storybook page and its source file | Nothing extra | Yes | Done (18 Nov) | Covers the real need: from the design to the living component and back. Recommended now. |
| 2. Storybook Designs addon | Shows the Figma frame inside each Storybook page | Install `@storybook/addon-designs`; a Figma link per story | Yes | Low | Good next step for developers who compare design and build side by side. |
| 3. Storybook Connect (Figma plugin) | Links Figma components to their stories and opens them from Figma | Storybook published on Chromatic; each person a Chromatic collaborator with an editor role in Figma | No: only Storybooks hosted on Chromatic | Medium | Worth it if the team adopts Chromatic for another reason, such as visual tests. Check Chromatic pricing first. |
| 4. Code Connect | Real code snippets in Dev Mode for each instance | Library on a Figma Organization or Enterprise plan | Not related | Templates ready | Best for AI reuse ("without it the model is guessing"); blocked by the plan today. |

Facts behind the table:
- Storybook Connect needs a Storybook published on Chromatic and does not link stories to layers; only collaborators can see linked components. Source: Chromatic docs, "Figma plugin".
- The Designs addon embeds Figma files, prototypes and frames in Storybook through a `design` parameter. Source: Storybook docs, "Design integrations".
- Code Connect publishing needs the library on an Organization or Enterprise plan (API response, 17 November 2026). Source: Figma Help, "Code Connect"; Figma MCP server guide.

## Recommendation (opinion)

Keep the tools separate and linked (option 1, done). Add the Designs addon (option 2) when developers ask to see the frame next to the build. Revisit Storybook Connect (option 3) only if the team adopts Chromatic, and Code Connect (option 4) when the Figma plan changes. If only one tool were possible for a development team, Storybook: without it there is no place to see and test the living components.
