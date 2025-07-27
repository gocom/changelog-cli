[**@gocom/changelog-cli**](../README.md)

***

[@gocom/changelog-cli](../README.md) / [API](../Public/API.md) / getReleaseNotes

# Function: getReleaseNotes()

> **getReleaseNotes**(`options`): `Promise`\<`undefined` \| `string`\>

Defined in: [library/ReleaseNotes.ts:113](https://github.com/gocom/changelog-cli/blob/3b4a6d4709757866fb2f2a2b7d73a6fccece5cbf/src/library/ReleaseNotes.ts#L113)

Get release notes for the given options.

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
