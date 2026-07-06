# Harsh Kumar Jha — Portfolio

Static Next.js portfolio website. All product, content, design, and engineering
decisions are governed by the documents in [`docs/`](docs/); start with
[`docs/FOUNDATION.md`](docs/FOUNDATION.md) and [`CLAUDE.md`](CLAUDE.md).

Implementation proceeds milestone by milestone per
[`docs/IMPLEMENTATION_PLAN.md`](docs/IMPLEMENTATION_PLAN.md). See
[`DECISIONS.md`](DECISIONS.md) for recorded architecture decisions and
[`CHANGELOG.md`](CHANGELOG.md) for implementation history.

## Development

This project uses [pnpm](https://pnpm.io).

```bash
pnpm install       # install dependencies
pnpm dev           # start the dev server
pnpm build         # production build
pnpm start         # run the production build
pnpm lint          # eslint
pnpm typecheck     # tsc --noEmit
pnpm format        # prettier --write
pnpm format:check  # prettier --check
pnpm test          # vitest
```
