# Axon CTO Copilot (Frontend)

This repository contains the frontend for the Axon CTO Copilot website, built with Next.js 16 and TypeScript.

Live site: https://axon-cto-copilot.example.com (replace with actual production URL)

## What’s New

- Updated UI components and accessibility improvements.
- New `use-cases` pages and architecture documentation under the `app/` directory.
- Improved developer DX: `pnpm` workspace and faster local builds.

## Repository Layout

- `frontend/` — Next.js application root.
- `frontend/app/` — route-based pages and content.
- `frontend/components/` — UI components and sections.
- `frontend/public/` — static assets.
- `requirements.txt` — placeholder for optional Python tooling.

## Quick Start

Prerequisites:

- Node.js 24 or newer
- pnpm (preferred) — install with `npm install -g pnpm` if missing

Install dependencies and run from the `frontend/` folder:

```powershell
Set-Location 'D:\Project\AXON-CTO-Copilot\frontend'
pnpm install
pnpm dev
```

Open http://localhost:3000 to view the site locally.

## Build & Preview

Production build and local preview:

```powershell
pnpm build
pnpm start
```

## Validation & Linting

Run these checks before merging changes:

```powershell
pnpm build
pnpm lint
pnpm test
```

Notes:

- `pnpm build` currently passes in CI for the main branches.
- `pnpm lint` may require installing and configuring ESLint and shared configs.

## Website Content Summary

The site includes the following pages and content sections:

- Home: hero, features overview, social proof, and CTA.
- About: mission, team, and high-level architecture.
- Architecture: layered stack, data-flow diagrams, deployment guidance.
- Features: integrations, workflows, and skills descriptions.
- Use Cases: curated examples showing how teams use Axon CTO Copilot.
- Docs: documentation hub and sidebar navigation.
- Contact: contact form and support info.

Content is authored in the `frontend/app/` routes and `frontend/components/` sections.

## Contributing

If you'd like to contribute:

1. Fork the repo and create a feature branch.
2. Run the app locally and ensure your changes build.
3. Run lint and tests: `pnpm lint && pnpm test`.
4. Open a pull request describing the changes and linking any relevant issues.

Code style follows the project's TypeScript and Prettier configurations in `frontend/`.

## Deployment

Deploy the `frontend/` build output to your static host or Node host. Typical steps:

1. Set environment variables in your host (if any).
2. `pnpm build` in the `frontend/` folder.
3. Upload the `.next` (or build) output to the hosting provider, or run `pnpm start` on a Node host.

## Maintainers & Contact

For questions or support, contact the maintainers listed in the project or open an issue.

— The Axon Dev Team

## Notes

- This README was updated to reflect recent UI and content changes for the website. If you want, I can:
	- add the live production URL and deployment instructions for your hosting provider,
	- add a screenshot or badges (build, coverage), or
	- expand the contribution guide into a CONTRIBUTING.md file.

