Changelog CLI
=====

<!-- [![npm](https://img.shields.io/npm/v/%40gocom%2Fchangelog-cli)](https://www.npmjs.com/package/@gocom/changelog-cli) -->
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gocom_changelog-cli&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=gocom_changelog-cli) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=gocom_changelog-cli&metric=coverage)](https://sonarcloud.io/summary/new_code?id=gocom_changelog-cli) [![MIT](https://img.shields.io/badge/license-MIT-green)](https://github.com/gocom/changelog-cli/blob/main/LICENSE) ![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)

Opinionated CLI and Node.js backend-specific extension for [@gocom/changelog](https://github.com/gocom/changelog)
package. Build release notes from CHANGELOG.md in CI, or manually using CLI utility.

**Work in progress, not yet installable.**

⚡ Install
-----

Using npm:

```shell
$ npm install @gocom/changelog-cli
```

📖 Documentation
-----

See [API Docs](https://github.com/gocom/changelog-cli/blob/docs/main/Public/API.md).

📝 Example Usage
-----

### Via command line

```
$ changelog --help
```

### Parsing changelog file

The following would parse the given changelog document file, and returns the results from it as an array of objects:

```typescript
import {parseFile} from '@gocom/changelog-cli';

const changelog = parseFile('path/to/CHANGELOG.md');
```

The above `changelog` variable would become something along the lines of:

```typescript
[
  {
    version: '1.1.0-alpha.1',
    isPrerelease: true,
    titleStart: '',
    titleEnd: '',
    notes: '* Change 1.\n* Change 2.'
  },
  {
    version: '1.0.0',
    isPrerelease: false,
    titleStart: '',
    titleEnd: '🚀',
    notes: '* Initial public release.'
  }
];
```

For more see [documentation](https://github.com/gocom/changelog-cli/blob/docs/main/Public/API.md).

🛠️ Development
-----

See [CONTRIBUTING.md](https://github.com/gocom/changelog-cli/blob/main/CONTRIBUTING.md).
