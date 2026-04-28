# Axon DevOps

This workspace contains the Axon CTO Copilot frontend, built with Next.js 16 and TypeScript.

## Repository Layout

- `frontend/` is the application root.
- `.gitignore` contains workspace-wide ignore rules.
- `requirements.txt` is a placeholder for future Python tooling.

## Prerequisites

- Node.js 24 or newer
- npm, which is already available in this environment
- pnpm, installed globally through npm with `npm install -g pnpm`

If `pnpm` is missing in a new shell, reinstall or re-enable it before running the app.

## Install

Run all commands from `frontend/`:

```powershell
Set-Location 'D:\Project\axon devops\frontend'
pnpm install
```

## Run Locally

Development server:

```powershell
pnpm dev
```

Production preview:

```powershell
pnpm build
pnpm start
```

## Validation

Use these checks before deployment:

```powershell
pnpm build
pnpm lint
```

`pnpm build` passes in the current workspace. `pnpm lint` currently fails because the project script references `eslint`, but ESLint is not installed yet.

## Deployment Readiness

The frontend is build-ready right now. To treat it as deployment-ready, make sure:

1. `pnpm build` passes.
2. `pnpm lint` passes after adding and configuring ESLint.
3. Any required environment variables are set in the deployment target.

## Python Placeholder

There is no Python application in this workspace today. The `requirements.txt` file exists only so Python dependencies can be added later if tooling changes.