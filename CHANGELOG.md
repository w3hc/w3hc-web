# Changelog

## Unreleased

### Added

- `/dao` page (copy of the homepage) and a "DAO" item in the header menu
- HTTP security headers on every route in `next.config.ts`: a Content-Security-Policy (`default-src 'self'`; `connect-src` limited to same-origin plus the Optimism RPC, `chainid.network` and `rukh.w3hc.org`; `frame-ancestors 'none'`; `object-src 'none'`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, a restrictive `Permissions-Policy`, and `Strict-Transport-Security` with `includeSubDomains; preload`
- `pnpm.overrides` in `package.json` pinning patched versions of transitive dependencies with known advisories (`underscore`, `ws`, `brace-expansion` v1/v2, `js-yaml`, `esbuild`)
- `pnpm-workspace.yaml` with `minimumReleaseAge: 4320` (3 days), so a freshly published — potentially hijacked — dependency version cannot be installed immediately; `w3pk` is excluded, as it is published by this project's own maintainer
- `templateVersion` in `package.json`, recording which genji release this project is synced to, plus a warning-only CI step in `.github/workflows/build.yml` that compares it against the newest upstream tag and points at `/genji-sync` when it falls behind

### Changed

- Synced with the [genji](https://github.com/w3hc/genji) template up to v3.1.0
- Dependency bumps: Next.js and `eslint-config-next` to ^16.3.1, React and React DOM to ^19.2.8, Chakra UI to ^3.36.1, `@types/node` to ^26.2.0, `@types/react` to ^19.2.18, `@types/react-dom` to ^19.2.4, Prettier to ^3.9.6

### Removed

- `.github/dependabot.yml` — dependabot was too noisy and has been dropped from the genji template (w3hc/genji#130); dependency bumps are handled through template syncs instead
