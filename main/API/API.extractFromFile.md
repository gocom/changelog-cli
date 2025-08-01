[**@gocom/changelog-cli**](../README.md)

***

[@gocom/changelog-cli](../README.md) / [API](../Public/API.md) / extractFromFile

# Function: extractFromFile()

> **extractFromFile**(`options`): `Promise`\<`undefined` \| [`Changelog`](https://github.com/gocom/changelog)\>

Defined in: [library/Extract.ts:53](https://github.com/gocom/changelog-cli/blob/8c0d751961ac375d71107d21f2f3f1934a62002b/src/library/Extract.ts#L53)

Extracts the specified version from the given changelog file.

The function would extract the specified [ExtractOptions.version](../Options/API.ExtractOptions.md#version) from the given Markdown based
changelog provided with the [ExtractOptions.path](../Options/API.ExtractOptions.md#path) option.

## Parameters

### options

[`ExtractOptions`](../Options/API.ExtractOptions.md)

Options.

## Returns

`Promise`\<`undefined` \| [`Changelog`](https://github.com/gocom/changelog)\>

Returns changelog for the version, or `undefined`, if the version could not
be found from the changelog, or the version number is not a valid semantic version number.

## Example

The following would extract version 0.2.0's notes from the given [ExtractOptions.path](../Options/API.ExtractOptions.md#path):
```ts
import {extractFromFile} from '@gocom/changelog-cli';

const changelog = await extractFromFile({
 version: '0.2.0',
 path: 'path/to/CHANGELOG.md',
});
```
The `changelog` variable would contain [Changelog](https://github.com/gocom/changelog) object with the details about the requested 0.2.0.
