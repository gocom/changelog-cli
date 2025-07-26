[**@gocom/changelog-cli**](../README.md)

***

[@gocom/changelog-cli](../README.md) / [API](../Public/API.md) / latestFromFile

# Function: latestFromFile()

> **latestFromFile**(`path`): `Promise`\<`undefined` \| [`Changelog`](https://github.com/gocom/changelog)\>

Defined in: [library/Extract.ts:91](https://github.com/gocom/changelog-cli/blob/c5eb9a650dc7e70b281f2a2b55174b861d635527/src/library/Extract.ts#L91)

Gets the latest version from the given changelog file.

The versions are sorted based semantic versioning rules, and the latest version is
extracted from the changelog. If there is no version numbers in the given
contents, return undefined.

If you want to get some other version from the changelog, see [extractFromFile](API.extractFromFile.md), or [parseFile](API.parseFile.md) if
you want to parse the whole changelog.

## Parameters

### path

`string`

Path to the changelog file to process.

## Returns

`Promise`\<`undefined` \| [`Changelog`](https://github.com/gocom/changelog)\>

Changelog for the latest version, or `undefined` if there were no valid versions
available in the changelog file.

## Example

The following would extract version `3.0.0` from the changelog, as it is the greatest version listed:
```ts
import {latestFromFile} from '@gocom/changelog-cli';

const changelog = latestFromFile('path/to/CHANGELOG.md');

console.log(changelog.version);
```
The above would log `3.0.0`.
