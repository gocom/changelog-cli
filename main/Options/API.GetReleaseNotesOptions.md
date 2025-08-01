[**@gocom/changelog-cli**](../README.md)

***

[@gocom/changelog-cli](../README.md) / [API](../Public/API.md) / GetReleaseNotesOptions

# Interface: GetReleaseNotesOptions

Defined in: [types/ReleaseNotes.ts:36](https://github.com/gocom/changelog-cli/blob/8c0d751961ac375d71107d21f2f3f1934a62002b/src/types/ReleaseNotes.ts#L36)

Get release notes options.

Options for [getReleaseNotes](../API/API.getReleaseNotes.md).

## Properties

### directory

> **directory**: `string`

Defined in: [types/ReleaseNotes.ts:42](https://github.com/gocom/changelog-cli/blob/8c0d751961ac375d71107d21f2f3f1934a62002b/src/types/ReleaseNotes.ts#L42)

Project directory to process.

File such as CHANGELOG.md and package manager manifest files are looked up from this directory.

***

### docsUrl?

> `optional` **docsUrl**: `string`

Defined in: [types/ReleaseNotes.ts:118](https://github.com/gocom/changelog-cli/blob/8c0d751961ac375d71107d21f2f3f1934a62002b/src/types/ReleaseNotes.ts#L118)

URL to the documentation.

The URL can contain Handlebar's template string.

#### Example

```ts
{
 docsUrl: 'https://example.tld/docs/version/{{version}}',
}
```

***

### downloadUrl?

> `optional` **downloadUrl**: `string`

Defined in: [types/ReleaseNotes.ts:132](https://github.com/gocom/changelog-cli/blob/8c0d751961ac375d71107d21f2f3f1934a62002b/src/types/ReleaseNotes.ts#L132)

Download URL.

The URL can contain Handlebar's template string.

#### Example

```ts
{
 downloadUrl: 'https://example.tld/download/package-{{version}}.tar.gz',
}
```

***

### isComposer?

> `optional` **isComposer**: `boolean`

Defined in: [types/ReleaseNotes.ts:104](https://github.com/gocom/changelog-cli/blob/8c0d751961ac375d71107d21f2f3f1934a62002b/src/types/ReleaseNotes.ts#L104)

Enables Composer package processing.

When enabled, [getReleaseNotes](../API/API.getReleaseNotes.md) looks for `composer.json` file from the
[GetReleaseNotesOptions.directory](#directory) directory, and includes the package's composer installation
command in the generated release notes, if the file is found.

#### Example

```ts
{
 isComposer: false
}
```

***

### isNpm?

> `optional` **isNpm**: `boolean`

Defined in: [types/ReleaseNotes.ts:88](https://github.com/gocom/changelog-cli/blob/8c0d751961ac375d71107d21f2f3f1934a62002b/src/types/ReleaseNotes.ts#L88)

Enables npm package processing.

When enabled, [getReleaseNotes](../API/API.getReleaseNotes.md) looks for `package.json` file from the
[GetReleaseNotesOptions.directory](#directory) directory, and includes the package's npm installation
command in the generated release notes, if the file is found.

#### Example

```ts
{
 isNpm: false
}
```

***

### templateFile?

> `optional` **templateFile**: `string`

Defined in: [types/ReleaseNotes.ts:72](https://github.com/gocom/changelog-cli/blob/8c0d751961ac375d71107d21f2f3f1934a62002b/src/types/ReleaseNotes.ts#L72)

Path to a template file.

If not specified, defaults to [Private.releaseNotesTemplate](../API/Private.releaseNotesTemplate.md). If the specified file ends to `.json`
extension, it is treated as a JSON formatted file, allowing an array of template strings. Otherwise, the file
is processed as if it contained a single template string.

#### Example

```ts
{
 templateFile: 'path/to/release-notes.template.md'
}
```

***

### version?

> `optional` **version**: `string`

Defined in: [types/ReleaseNotes.ts:56](https://github.com/gocom/changelog-cli/blob/8c0d751961ac375d71107d21f2f3f1934a62002b/src/types/ReleaseNotes.ts#L56)

Version number the release notes are created for.

The specified version is extracted from the CHANGELOG.md file. If `undefined`, gets the latest version.

#### Example

```ts
{
 version: '0.1.0'
}
```
