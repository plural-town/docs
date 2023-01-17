# PluralTown Documentation Site

This repository contains the source for https://software.plural.town/.

## Resource Locator

- [Issue tracker][issues]

### Main Repository - [`plural-town/plural`][repo]

The main PluralTown repository contains files that should be included in forks and server deployments:

- PluralTown source
- Feature list (used as a changelog) ([`features.todo`][todo])
- PluralTown database schema ([`libs/models/src/schema.prisma`][prisma-schema])
- PluralTown database migrations ([`libs/models/src/migrations/`][prisma-migrations])
- Logos, favicons, and similar core artwork
- Test/build tools and configuration
  - Prettier configuration ([`.prettierrc`][prettierrc])
  - Unit tests
  - End-to-end tests ([`apps/plural-e2e/src/e2e/`][e2e-tests])
  - GitHub Actions workflow ([`.github/workflows/ci.yml`][ci-workflow])
- Documentation for end-users (compiled into PluralTown) ([`apps/plural/pages/docs/`][user-docs])

### Documentation Repository - [`plural-town/docs`][doc-repo]

[repo]: https://github.com/plural-town/plural
[doc-repo]: https://github.com/plural-town/docs
[issues]: https://github.com/plural-town/plural/issues
[todo]: https://github.com/plural-town/plural/blob/main/features.todo
[prisma-schema]: https://github.com/plural-town/plural/blob/main/libs/models/src/schema.prisma
[prisma-migrations]: https://github.com/plural-town/plural/tree/main/libs/models/src/migrations
[prettierrc]: https://github.com/plural-town/plural/blob/main/.prettierrc
[e2e-tests]: https://github.com/plural-town/plural/tree/main/apps/plural-e2e/src/e2e
[ci-workflow]: https://github.com/plural-town/plural/blob/main/.github/workflows/ci.yml
[user-docs]: https://github.com/plural-town/plural/tree/main/apps/plural/pages/docs
