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

import type {Template, Version} from '@gocom/changelog';

/**
 * Get release notes options.
 *
 * Options for {@link getReleaseNotes}.
 *
 * @group Library
 * @category Options
 */
export interface GetReleaseNotesOptions {
  /**
   * Project directory to process.
   *
   * File such as CHANGELOG.md and package manager manifest files are looked up from this directory.
   */
  directory: string

  /**
   * Version number the release notes are created for.
   *
   * The specified version is extracted from the CHANGELOG.md file. If `undefined`, gets the latest version.
   *
   * @example
   * ```ts
   * {
   *  version: '0.1.0'
   * }
   * ```
   */
  version?: Version

  /**
   * Path to a template file.
   *
   * If not specified, defaults to {@link Private.releaseNotesTemplate}. If the specified file ends to `.json`
   * extension, it is treated as a JSON formatted file, allowing an array of template strings. Otherwise, the file
   * is processed as if it contained a single template string.
   *
   * @example
   * ```ts
   * {
   *  templateFile: 'path/to/release-notes.template.md'
   * }
   * ```
   */
  templateFile?: string

  /**
   * Enables npm package processing.
   *
   * When enabled, {@link getReleaseNotes} looks for `package.json` file from the
   * {@link GetReleaseNotesOptions.directory} directory, and includes the package's npm installation
   * command in the generated release notes, if the file is found.
   *
   * @example
   * ```ts
   * {
   *  isNpm: false
   * }
   * ```
   */
  isNpm?: boolean

  /**
   * Enables Composer package processing.
   *
   * When enabled, {@link getReleaseNotes} looks for `composer.json` file from the
   * {@link GetReleaseNotesOptions.directory} directory, and includes the package's composer installation
   * command in the generated release notes, if the file is found.
   *
   * @example
   * ```ts
   * {
   *  isComposer: false
   * }
   * ```
   */
  isComposer?: boolean

  /**
   * URL to the documentation.
   *
   * The URL can contain Handlebar's template string.
   *
   * @example
   * ```ts
   * {
   *  docsUrl: 'https://example.tld/docs/version/{{version}}',
   * }
   * ```
   */
  docsUrl?: Template

  /**
   * Download URL.
   *
   * The URL can contain Handlebar's template string.
   *
   * @example
   * ```ts
   * {
   *  downloadUrl: 'https://example.tld/download/package-{{version}}.tar.gz',
   * }
   * ```
   */
  downloadUrl?: Template
}
