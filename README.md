# EvoGenesis: Mythbound — World Alpha 1.0

A standalone, offline-capable, top-down 2D mythological creature RPG prototype for iPhone and GitHub Pages.

## Installation

Upload `index.html`, `manifest.webmanifest`, `service-worker.js`, and `icon.svg` to the root of the existing GitHub Pages repository. If updating an existing EvoGenesis repository, keep any other files unless intentionally removing them. Wait for deployment and visit `https://koa7-arch.github.io/EvoGenesis/?mythbound=1` in Safari. The previous v0.1–v0.4 saves are **not migrated into this new game**: they are intentionally left untouched under their old localStorage keys, to avoid damaging progress in the old game. This new game stores progress in `evogenesis_mythbound_v1`. Export the old game's save before replacing its files.

## Play

- Use the D-pad (or swipe) to walk; A to interact with adjacent characters, structures, and creatures.
- Start in Asterfall Village; speak to Elder Rowan, then walk south through the gap in the border to Whisperwood Trail.
- Continue south from Whisperwood to reach the Sunken Ruins.
- Encounter a creature and offer a bond. Once recruited, your first active creature can fight; weakening a wild creature improves the bonding chance.
- Visit the village inn or sanctuary to restore health.
- Use Menu for Party, Bestiary, Quest Journal, and JSON backup export/import.

## Scope and limitations

This is a playable **world alpha**, not a full game. Maps are handcrafted character-grid layouts rendered with procedural pixel-style canvas art; no licensed assets or external libraries. NPCs, town, routes, wild creature tokens, battle, bonding, save/export and offline caching are implemented. There is no branching story, animation sprite sheets, character customization, real-world accurate full mythological catalog, deep combat, shops, or complete sanctuary simulation yet. Creatures use emoji stand-ins, not original creature sprite sheets. World transitions use north/south gateways. Old preserve saves remain separate and unmodified; direct migration is not implemented. Test in Safari before treating as a stable release.
