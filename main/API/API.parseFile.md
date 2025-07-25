[**@gocom/changelog-cli**](../README.md)

***

[@gocom/changelog-cli](../README.md) / [API](../Public/API.md) / parseFile

# Function: parseFile()

> **parseFile**(`path`): `Promise`\<`undefined` \| [`Changelog`](https://github.com/gocom/changelog)[]\>

Defined in: [library/Parser.ts:39](https://github.com/gocom/changelog-cli/blob/53aadc68571fc685b4a39d2e76611072cc34f819/src/library/Parser.ts#L39)

Gets changelog from the specified file.

## Parameters

### path

`string`

Path to the changelog file to parse.

## Returns

`Promise`\<`undefined` \| [`Changelog`](https://github.com/gocom/changelog)[]\>

Returns either an array of [Changelog](https://github.com/gocom/changelog) objects, or `undefined` if the
specified file could not be processed.
