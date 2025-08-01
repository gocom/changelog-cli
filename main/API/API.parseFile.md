[**@gocom/changelog-cli**](../README.md)

***

[@gocom/changelog-cli](../README.md) / [API](../Public/API.md) / parseFile

# Function: parseFile()

> **parseFile**(`path`): `Promise`\<`undefined` \| [`Changelog`](https://github.com/gocom/changelog)[]\>

Defined in: [library/Parser.ts:45](https://github.com/gocom/changelog-cli/blob/8c0d751961ac375d71107d21f2f3f1934a62002b/src/library/Parser.ts#L45)

Gets changelog from the specified file.

## Parameters

### path

`string`

Path to the changelog file to parse.

## Returns

`Promise`\<`undefined` \| [`Changelog`](https://github.com/gocom/changelog)[]\>

Returns either an array of [Changelog](https://github.com/gocom/changelog) objects, or `undefined` if the
specified file could not be processed.

## Example

```ts
import {parseFile} from '@gocom/changelog-cli';

const changelog = await parseFile('path/to/CHANGELOG.md');
```
