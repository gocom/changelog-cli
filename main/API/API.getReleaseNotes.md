[**@gocom/changelog-cli**](../README.md)

***

[@gocom/changelog-cli](../README.md) / [API](../Public/API.md) / getReleaseNotes

# Function: getReleaseNotes()

> **getReleaseNotes**(`options`): `Promise`\<`undefined` \| `string`\>

Defined in: [library/ReleaseNotes.ts:125](https://github.com/gocom/changelog-cli/blob/6c7536a38a30ab42e6ece90e04a897428a95f4d8/src/library/ReleaseNotes.ts#L125)

Gets release notes for the given options.

Reads CHANGELOG.md and common package manager manifest files from the project directory specified
via [GetReleaseNotesOptions.directory](../Options/API.GetReleaseNotesOptions.md#directory) option, and constructs opinionated Markdown formatted
release notes.

The changelog file is expected to be named as `CHANGELOG.md`. If [GetReleaseNotesOptions.version](../Options/API.GetReleaseNotesOptions.md#version) is given
that specific version's notes are extracted from the `CHANGELOG.md` file. If it is left undefined, the latest
version is extracted instead.

## Parameters

### options

[`GetReleaseNotesOptions`](../Options/API.GetReleaseNotesOptions.md)

Options.

## Returns

`Promise`\<`undefined` \| `string`\>

Processed release notes, or `undefined`, if constructing release notes is not possible.

## Example

The following would generate release notes for version `1.3.2` for a project located in the
`path/to/project/directory` directory:
```ts
import {getReleaseNotes} from '@gocom/changelog-cli';

const releaseNotes = await getReleaseNotes({
 directory: 'path/to/project/directory',
 version: '1.3.2',
});
```
The above `releaseNotes` variable will contain Markdown formatted release notes document string.
