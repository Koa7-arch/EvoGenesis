# EvoGenesis v0.3 — The Living Menagerie

Complete static, offline-capable GitHub Pages replacement package. **Upload all files and the assets directory to the root of your existing EvoGenesis repository.** Do not upload the ZIP itself to GitHub Pages.

## Installation on iPhone
1. In your working v0.2 game, export a JSON creature save backup first.
2. Upload/replace `index.html`, `manifest.webmanifest`, `service-worker.js`, `icon.svg`, `menagerie.js`, `menagerie.css`, and all three `assets/*.webp` files in the existing repository root, preserving the `assets` folder.
3. Wait for GitHub Pages to finish deploying. Visit `https://koa7-arch.github.io/EvoGenesis/?v=0301` in Safari to check the new version.
4. Do not clear Safari website data or uninstall the existing PWA until your creatures are verified.

## Gameplay
- Drag the isometric map to pan; pinch to zoom.
- Tap wolves to inspect, care, train, or breed; tap research lodge to open research; tap supply depot to gather.
- Select a construction tool then tap an empty map tile to place a tree (1 supply), path (1), pond (4), wolf den (5), or garden (3). Remove decorative structures with Remove. Founding buildings cannot be removed.
- Wolves roam visually; animation positions are decorative and do not affect the underlying creature statistics.
- Existing v0.1/v0.2 care, research, breeding, transformation, and journal mechanics are retained.

## Saves / limitations
- Creature data uses the **unchanged** `evogenesis-v01-save` localStorage key and v1 save schema.
- New decorative map structures use `evogenesis-v03-menagerie`, separately. Existing JSON exports only include creatures/research, **not map construction**. Do not clear browser data if you want to retain your built map.
- Construction is currently decorative and does not increase the original 20-wolf capacity or change welfare.
- This is a lightweight 2D canvas simulation, not a full 3D park builder. Wolf silhouettes are rendered in the map; illustrated portraits remain in the creature profiles.
