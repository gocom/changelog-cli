/*!
 * Changelog CLI
 * https://github.com/gocom/changelog-cli
 *
 * Copyright (C) 2025 Jukka Svahn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import path from 'node:path';
import type {Changelog, ReleaseNotesOptions, Template} from '@gocom/changelog';
import {asReleaseNotes} from '@gocom/changelog';
import type {GetReleaseNotesOptions} from '../types/ReleaseNotes';
import {readJsonFile, readTemplateFile} from './Helpers';
import {parseFile} from './Parser';

/**
 * Default release notes template.
 *
 * Contains a Handlebar's template string that is used by {@link getReleaseNotes}.
 *
 * @group Library
 * @category API
 */
export const releaseNotesTemplate: Template[] = [
  // Prerelease notice.
  `{{#if isPrerelease}}
⚠️ **This is a prerelease for {{major}}.{{minor}}.{{patch}}. This release is not intended for production use.**
{{/if}}
`,

  // Changelog.
  `{{#if notes}}
## 🚀 Notes for version {{version}}

{{notes}}
{{/if}}`,

  // npm.
  `{{#if npm}}
## ⚡ Install

\`\`\`shell
$ npm install {{npm.name}}@^{{version}}
\`\`\`

{{/if}}`,

  // Composer.
  `{{#if composer}}
## ⚡ Install

    $ composer require {{composer.name}}:^{{version}}

{{/if}}`,

  // Or download instead of package manager.
  `{{#if isPackage}}{{#if downloadUrl}}

Or [download]({{downloadUrl}}).

{{/if}}{{/if}}`,

  // Download Url.
  `{{#unless isPackage}}{{#if downloadUrl}}
## 📦 Download

[Download {{version}}]({{downloadUrl}}).

{{/if}}{{/unless}}`,

  // Documentation link.
  `{{#if docsUrl}}
## 📖 Documentation

[Docs for {{version}}]({{docsUrl}}).

{{/if}}`,
];

/**
 * Gets release notes for the given options.
 *
 * Reads CHANGELOG.md and common package manager manifest files from the project directory specified
 * via {@link GetReleaseNotesOptions.directory} option, and constructs opinionated Markdown formatted
 * release notes.
 *
 * The changelog file is expected to be named as `CHANGELOG.md`. If {@link GetReleaseNotesOptions.version} is given
 * that specific version's notes are extracted from the `CHANGELOG.md` file. If it is left undefined, the latest
 * version is extracted instead.
 *
 * @param {GetReleaseNotesOptions} options Options.
 * @return {string|undefined} Processed release notes, or `undefined`, if constructing release notes is not possible.
 * @group Library
 * @category API
 * @example
 * The following would generate release notes for version `1.3.2` for a project located in the
 * `path/to/project/directory` directory:
 * ```ts
 * import {getReleaseNotes} from '@gocom/changelog-cli';
 *
 * const releaseNotes = await getReleaseNotes({
 *  directory: 'path/to/project/directory',
 *  version: '1.3.2',
 * });
 * ```
 * The above `releaseNotes` variable will contain Markdown formatted release notes document string.
 */
export const getReleaseNotes = async (options: GetReleaseNotesOptions) => {
  const {
    directory,
    version,
    isNpm,
    isComposer,
    templateFile,
  } = options;

  const contents = await parseFile(
    path.join(directory, 'CHANGELOG.md')
  );

  let changelog: Changelog|undefined = contents
    ?.find((item) => item.version === version || version === undefined);

  // Emulate if given version, and does not have changelog.
  if (version && !changelog) {
    changelog = {
      version,
      notes: '',
    };
  }

  if (changelog) {
    const npm = isNpm
      ? await readJsonFile(path.join(directory, 'package.json'))
      : undefined;

    const composer = isComposer
      ? await readJsonFile(path.join(directory, 'composer.json'))
      : undefined;

    const releaseNoteOptions: ReleaseNotesOptions = {
      changelog,
      template: releaseNotesTemplate,

      ...(!!templateFile && {
        template: (await readTemplateFile(templateFile)) ?? releaseNotesTemplate,
      }),

      variables: {
        npm,
        composer,
      },
    };

    const docsUrl = options.docsUrl
      ? asReleaseNotes({
        ...releaseNoteOptions,
        template: options.docsUrl,
      })
      : undefined;

    const downloadUrl = options.downloadUrl
      ? asReleaseNotes({
        ...releaseNoteOptions,
        template: options.downloadUrl,
      })
      : undefined;

    return asReleaseNotes({
      ...releaseNoteOptions,
      variables: {
        ...releaseNoteOptions.variables,
        docsUrl,
        downloadUrl,
        isPackage: !!npm || !!composer,
      },
    });
  }

  return undefined;
};
