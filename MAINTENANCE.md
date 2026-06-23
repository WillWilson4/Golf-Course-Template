# Maintenance notes

## Dependency audit

As of June 22, 2026, `npm audit` reports five moderate advisories in the YAML language-server chain used by `@astrojs/check`. This tooling runs during local development and type checking; it is not included in the static production site or browser runtime. `npm audit --omit=dev` reports no production dependency vulnerabilities.

The automated remediation currently proposes a forced change to an older `@astrojs/check` release. Do not run `npm audit fix --force` solely to silence this report. Revisit the advisory when Astro’s language-server/check packages publish a compatible fix, then apply normal non-breaking updates and rerun `npm run check` and `npm run build`.
